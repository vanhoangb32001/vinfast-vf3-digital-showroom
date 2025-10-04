import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ColorPicker } from "@/components/ColorPicker";
import {
  carExtraExtension,
  carExtraExtensions,
} from "@/data/carExtraExtensions";
import {
  vinFastGreenData,
  VinFastGreenModel,
} from "@/data/specificationsGreen";
import { useParams } from "react-router-dom";

export default function SwiperCar() {
  const { id } = useParams<{ id: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  const model2 = carExtraExtensions.find((model) => model.id === id);

  // Initialize selected colors (first color for each car)
  useEffect(() => {
    const initialColors: Record<string, string> = {};
    carExtraExtensions.forEach((car) => {
      initialColors[car.id] = car.colors[0].code;
    });
    setSelectedColors(initialColors);
  }, []);
  const currentCar = carExtraExtensions[currentIndex];
  const selectedColor = selectedColors[model2?.id] || model2?.colors[0]?.code;
  const currentCarImage = model2?.colors.find(
    (c) => c.code === selectedColor
  )?.image;

  const handleColorChange = (carId: string, colorCode: string) => {
    setSelectedColors((prev) => ({ ...prev, [carId]: colorCode }));
  };

  // Calculate billions
  // const formatPrice = (basePrice: string | number) => {
  //   const cleaned = String(basePrice).replace(/[^\d]/g, "");
  //   if (!cleaned) return "";
  //   let num = parseFloat(cleaned);
  //   num = num / 1_000_000;

  //   if (num >= 1000) {
  //     return `${(num / 1000).toFixed(2)} tỷ VNĐ`;
  //   }
  //   return `${num.toLocaleString()} triệu VNĐ`;
  // };

  if (!currentCar) return null;

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentIndex}-${selectedColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <img
            src={currentCarImage}
            alt={`${currentCar.name} màu ${
              currentCar.colors.find((c) => c.code === selectedColor)?.name
            }`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Car Info */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                {model2.name}
              </h1>
              {model2.isNew && (
                <Badge className="bg-primary text-primary-foreground">
                  Mới
                </Badge>
              )}
            </div>

            <p className="text-xl sm:text-2xl text-white/90 mb-4">
              {model2.tagline}
            </p>

            <p className="text-white/80 mb-6 max-w-lg">{model2.description}</p>

            <div className="mb-6">
              <div className="text-3xl font-bold mb-2">
                {(model2.basePrice)}
              </div>
              <div className="text-white/80 text-sm">Giá khởi điểm</div>
            </div>

            {/* Color Picker */}
            <div className="mb-8">
              <div className="text-sm text-white/80 mb-3">Chọn màu sắc:</div>
              <ColorPicker
                colors={model2.colors}
                selectedColor={selectedColor}
                onColorChange={(colorCode) =>
                  handleColorChange(model2.id, colorCode)
                }
              />
              <div className="text-sm text-white/80 mt-2">
                {model2.colors.find((c) => c.code === selectedColor)?.name}
              </div>
            </div>

            <div className="flex gap-4">
              {/* <Link to="/chi-tiet-xe">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                >
                  Xem chi tiết
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link> */}
              <Link to="/dat-coc">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white/10"
                >
                  Đặt cọc ngay
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Specs */}
          <motion.div
            key={`specs-${currentIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:justify-self-end">
            {/* <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-white text-xl font-semibold mb-4">
                Thông số kỹ thuật
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {model2.specs.map((spec, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {spec.value}
                    </div>
                    <div className="text-white/70 text-sm">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            className="text-white hover:bg-white/20 border border-white/30"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="flex gap-2">
            {carExtraExtensions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="text-white hover:bg-white/20 border border-white/30"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div> */}

      {/* Auto-advance (optional) */}
      <div className="absolute top-4 right-4 z-20">
        <div className="text-white/60 text-sm">
          {currentIndex + 1} / {carExtraExtensions.length}
        </div>
      </div>
    </section>
  );
}
