import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, BatteryCharging, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CarCard } from "@/components/CarCard"
import { cars } from "@/data/cars"

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1920&h=1080&fit=crop"
            alt="VinFast VF3 trên đường đô thị"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
              VinFast VF3
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl text-lg">
              Xe điện nhỏ gọn cho đô thị. Tối giản, bền bỉ, tiết kiệm.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/chi-tiet-xe">
                <Button size="lg">
                  Khám phá chi tiết
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dat-coc">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
                  Đặt cọc ngay
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Danh mục xe</h2>
          <p className="text-muted-foreground mt-2">Các phiên bản VF3 với màu sắc đa dạng</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} id={car.id} name={car.name} variant={car.variant} price={car.price} image={car.image} colorName={car.colorName} />
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <BatteryCharging className="h-5 w-5 text-primary" />
                Phạm vi hoạt động
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">~215 km</div>
              <div className="text-sm text-muted-foreground">Theo tiêu chuẩn NEDC/WLTP</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Zap className="h-5 w-5 text-primary" />
                Tăng tốc
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0-50 km/h: 5.3s</div>
              <div className="text-sm text-muted-foreground">3 chế độ lái: Eco, Comfort, Sport</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold">
                <Shield className="h-5 w-5 text-primary" />
                Bảo hành pin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8 năm</div>
              <div className="text-sm text-muted-foreground">Không giới hạn số km (khi mua pin)</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="border-dashed">
          <CardContent className="py-10 text-center">
            <h3 className="text-2xl font-bold">Sẵn sàng trải nghiệm VF3?</h3>
            <p className="text-muted-foreground mt-2">Đăng ký tư vấn để nhận ưu đãi sớm</p>
            <div className="mt-6">
              <Link to="/dat-coc">
                <Button size="lg">Đăng ký tư vấn</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
