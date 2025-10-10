import { motion } from "framer-motion";
import { Car, Battery, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { featuredVanCar, featuredVanCars } from "@/data/featuredVanCar";
import { VanModel, VanData } from "@/data/specificationsVan";

export default function DanhSachXeVan() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getCarImage = (id: string) => {
    const car = featuredVanCars.find((c) => c.id === id);
    return car?.colors[0]?.image || "/fallback-car.png";
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Danh Sách Xe Điện
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl mx-auto">
              Khám phá dòng xe điện hiện đại, tiết kiệm và thân thiện với môi
              trường từ VinFast
            </p>
          </motion.div>
        </div>
      </section>

        <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Các Mẫu Xe Điện VinFast
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chọn mẫu xe VinFast
          </p>
        </div>
        {/* VF */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VanData.map((model: VanModel) => (
            <motion.div key={model.id} variants={itemVariants}>
              <Card className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Car className="mr-2 h-6 w-6 text-primary" />
                    {model.model}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Battery className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        <strong>Phạm vi: </strong>
                        {model.distance || 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        <strong>Công suất: </strong>
                        {model.operate || 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2 h-[70px]">
                      <span className="text-sm">
                        <strong>Giá bán: </strong>
                         {
                          model.comparisons.find(
                            (comp) => comp.parameter === "Giá bán (ước tính)"
                          )?.values[0]
                        }
                      </span>
                    </div>
                    <Link to={`/danh-sach-xe-van/${model.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Xem chi tiết
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

          {/* Green */}
          <div className="text-center mb-10 pt-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Các Mẫu Xe Điện Green
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chọn mẫu xe Green
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VanData.map((model: VanModel) => (
            <motion.div key={model.id} variants={itemVariants}>
              <Card className="lg:h-[auto] md:h-[auto] hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-2xl ">
                    <Car className="mr-2 h-6 w-6 text-primary " />
                    {model.model}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 ">
                    <div className="flex justify-center">
                    <img
                      src={getCarImage(model.id)}
                      alt={model.model}
                      className="h-40 object-contain "
                    />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Battery className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        <strong>Phạm vi: </strong>
                        {model.specs["Quãng đường"]}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        <strong>Công suất: </strong>
                        {model.specs["Động cơ"].split(", ")[1]}
                      </span>
                    </div>
                    <div className="flex items-top space-x-2 lg:h-[60px] md:h-[65px]">
                      <span className="text-sm">
                        <strong>Giá bán: </strong>
                        {
                          model.comparisons.find(
                            (comp) => comp.parameter === "Giá bán (ước tính)"
                          )?.values[0]
                        }
                      </span>
                    </div>
                    <Link to={`/danh-sach-xe-green/${model.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90 lg:mt-0 md:mt-0 mt-4">
                        Xem chi tiết
                        <ArrowRight className="ml- h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}
