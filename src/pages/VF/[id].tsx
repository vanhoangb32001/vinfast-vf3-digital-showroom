import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Battery, Zap, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { vinFastData, VinFastModel, CarColor } from "@/data/specifications";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ColorPicker } from "@/components/ColorPicker";

export default function ChiTietXeVFDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Find the model based on id
  const model = vinFastData.find((m) => m.id === id);

  // Initialize selected color with the first color of the model
  useEffect(() => {
    if (model && model.colors.length > 0) {
      setSelectedColor(model.colors[0].code);
    }
  }, [model]);

  if (!model) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Không tìm thấy mẫu xe</h2>
          <p className="text-muted-foreground">Vui lòng kiểm tra lại ID hoặc liên hệ hỗ trợ.</p>
        </div>
      </div>
    );
  }

  // Price fallback
  const price = model.priceEco || model.pricePlus || model.pricePlus2 || "Liên hệ để biết giá";
  const currentCarImage = model.colors.find((c) => c.code === selectedColor)?.image;

  const handleColorChange = (carId: string, colorCode: string) => {
    setSelectedColor(colorCode);
  };

  // Get previous and next car IDs for navigation
  const currentIndex = vinFastData.findIndex((m) => m.id === id);
  const prevId = vinFastData[currentIndex > 0 ? currentIndex - 1 : vinFastData.length - 1].id;
  const nextId = vinFastData[currentIndex < vinFastData.length - 1 ? currentIndex + 1 : 0].id;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Slider */}
      <section className="relative h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${model.id}-${selectedColor}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <img
              src={currentCarImage || "/placeholder.jpg"}
              alt={`${model.model} màu ${model.colors.find((c) => c.code === selectedColor)?.name || "mặc định"}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
          asChild
        >
          <Link to={`/vf/${prevId}`}>
            <ChevronLeft className="h-6 w-6" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
          asChild
        >
          <Link to={`/vf/${nextId}`}>
            <ChevronRight className="h-6 w-6" />
          </Link>
        </Button>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Car Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                  {model.model}
                </h1>
                {model.isNew && (
                  <Badge className="bg-primary text-primary-foreground">Mới</Badge>
                )}
              </div>

              <p className="text-xl sm:text-2xl text-white/90 mb-4">
                {model.tagline}
              </p>

              <p className="text-white/80 mb-6 max-w-lg">
                {model.description}
              </p>

              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">
                  {model.priceEco || model.pricePlus || "Liên hệ"}
                </div>
                <div className="text-white/80 text-sm">Giá khởi điểm</div>
              </div>

              {/* Color Picker */}
              <div className="mb-8">
                <div className="text-sm text-white/80 mb-3">Chọn màu sắc:</div>
                <ColorPicker
                  colors={model.colors}
                  selectedColor={selectedColor}
                  onColorChange={(colorCode) => handleColorChange(model.id, colorCode)}
                />
                <div className="text-sm text-white/80 mt-2">
                  {model.colors.find((c) => c.code === selectedColor)?.name}
                </div>
              </div>

              <div className="flex gap-4">
                <Link to={`/vf/${model.id}`}>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Xem chi tiết
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dat-coc">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-black hover:bg-white/10 hover:text-white"
                  >
                    Đặt cọc ngay
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Specs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:justify-self-end"
            >
              <Card className="bg-black/30 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-4">Thông số kỹ thuật</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{model.distance}</div>
                      <div className="text-white/70 text-sm">Quãng đường</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{model.operate}</div>
                      <div className="text-white/70 text-sm">Công suất</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{model.charging}</div>
                      <div className="text-white/70 text-sm">Thời gian sạc</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Selection Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Chọn màu xe</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {model.colors.map((color) => (
              <Button
                key={color.code}
                variant={selectedColor === color.code ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => handleColorChange(model.id, color.code)}
              >
                <img
                  src={color.image}
                  alt={`${model.model} - ${color.name}`}
                  className="w-12 h-12 object-cover rounded-full border-2 border-gray-300"
                />
                <span className="capitalize">{color.name}</span>
              </Button>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-medium">Màu đã chọn: <span className="text-primary">{model.colors.find((c) => c.code === selectedColor)?.name}</span></p>
            <img
              src={currentCarImage || model.colors[0].image}
              alt={`${model.model} - ${model.colors.find((c) => c.code === selectedColor)?.name}`}
              className="mt-4 w-full max-w-xl mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Thông số nổi bật
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Battery className="h-8 w-8 text-primary mb-2 mx-auto" />
                <h3 className="font-bold text-lg mb-1">Quãng đường</h3>
                <p className="text-2xl font-bold">{model.distance}</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-primary mb-2 mx-auto" />
                <h3 className="font-bold text-lg mb-1">Công suất</h3>
                <p className="text-2xl font-bold">{model.operate}</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-primary mb-2 mx-auto" />
                <h3 className="font-bold text-lg mb-1">Thời gian sạc</h3>
                <p className="text-2xl font-bold">{model.charging}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Promotion Section */}
      <motion.section
        variants={itemVariants}
        className="text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-white mb-16"
      >
        <h2 className="text-3xl font-bold mb-4 uppercase">VinFast Khuyến Mãi</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          KHUYẾN MÃI & GIẢM GIÁ<br />
          Liên hệ ngay để nhận Khuyến Mãi & Giá Ưu Đãi mới nhất hôm nay.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
            asChild
          >
            <a href="tel:+840328184676">
              <Phone className="mr-2 h-5 w-5" />
              Gọi Ngay
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
            asChild
          >
            <a href="https://zalo.me/0328184676" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" />
              Nhắn Zalo
            </a>
          </Button>
        </div>
      </motion.section>

      {/* Content Sections */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        {model.content.ct1 && model.content.ct1.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct1 }} />
        )}
        {model.content.ct11 && model.content.ct11.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct11 }} />
        )}
        {model.content.ct12 && model.content.ct12.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct12 }} />
        )}
        {model.content.ct13 && model.content.ct13.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct13 }} />
        )}
        {model.content.ct14 && model.content.ct14.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct14 }} />
        )}
        {model.content.ct15 && model.content.ct15.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct15 }} />
        )}
        {model.content.ct16 && model.content.ct16.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct16 }} />
        )}
        {model.content.ct2 && model.content.ct2.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct2 }} />
        )}
        {model.content.ct21 && model.content.ct21.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct21 }} />
        )}
        {model.content.ct22 && model.content.ct22.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct22 }} />
        )}
        {model.content.ct23 && model.content.ct23.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct23 }} />
        )}
        {model.content.ct24 && model.content.ct24.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct24 }} />
        )}
        {model.content.ct25 && model.content.ct25.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct25 }} />
        )}
        {model.content.ct26 && model.content.ct26.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct26 }} />
        )}
        {model.content.ct3 && model.content.ct3.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct3 }} />
        )}
        {model.content.ct31 && model.content.ct31.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct31 }} />
        )}
        {model.content.ct32 && model.content.ct32.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct32 }} />
        )}
        {model.content.ct33 && model.content.ct33.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct33 }} />
        )}
        {model.content.ct34 && model.content.ct34.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct34 }} />
        )}
        {model.content.ct35 && model.content.ct35.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct35 }} />
        )}
        {model.content.ct36 && model.content.ct36.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct36 }} />
        )}
        {model.content.ct4 && model.content.ct4.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct4 }} />
        )}
        {model.content.ct41 && model.content.ct41.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct41 }} />
        )}
        {model.content.ct42 && model.content.ct42.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct42 }} />
        )}
        {model.content.ct43 && model.content.ct43.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct43 }} />
        )}
        {model.content.ct44 && model.content.ct44.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct44 }} />
        )}
        {model.content.ct45 && model.content.ct45.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct45 }} />
        )}
        {model.content.ct46 && model.content.ct46.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct46 }} />
        )}
        {model.content.ct5 && model.content.ct5.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct5 }} />
        )}
        {model.content.ct51 && model.content.ct51.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct51 }} />
        )}
        {model.content.ct52 && model.content.ct52.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct52 }} />
        )}
        {model.content.ct53 && model.content.ct53.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct53 }} />
        )}
        {model.content.ct54 && model.content.ct54.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct54 }} />
        )}
        {model.content.ct55 && model.content.ct55.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct55 }} />
        )}
        {model.content.ct56 && model.content.ct56.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct56 }} />
        )}
        {model.content.ct6 && model.content.ct6.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct6 }} />
        )}
        {model.content.ct61 && model.content.ct61.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct61 }} />
        )}
        {model.content.ct62 && model.content.ct62.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct62 }} />
        )}
        {model.content.ct63 && model.content.ct63.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct63 }} />
        )}
        {model.content.ct64 && model.content.ct64.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct64 }} />
        )}
        {model.content.ct65 && model.content.ct65.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct65 }} />
        )}
        {model.content.ct66 && model.content.ct66.trim() && (
          <div dangerouslySetInnerHTML={{ __html: model.content.ct66 }} />
        )}
      </motion.section>

      {/* Comparisons Table if available */}
      {model.competitors.length > 0 && model.comparisons.length > 0 && (
        <motion.section
          variants={itemVariants}
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">So sánh thông số</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thông số
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {model.vfNameInComp || model.model}
                  </th>
                  {model.competitors.map((comp, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {comp}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {model.comparisons.map((comp, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {comp.parameter}
                    </td>
                    {comp.values.map((value, vIndex) => (
                      <td
                        key={vIndex}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      )}
    </div>
  );
}