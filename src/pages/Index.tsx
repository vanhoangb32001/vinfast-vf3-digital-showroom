import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, BatteryCharging, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FeaturedCarSlider } from "@/components/FeaturedCarSlider"
import { CarCategorySection } from "@/components/CarCategorySection"
import { BrandHistorySection } from "@/components/BrandHistorySection"

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Featured Car Slider - Full Screen */}
      <FeaturedCarSlider />

      {/* Car Category Section */}
      <CarCategorySection />

      {/* Brand History Section */}
      <BrandHistorySection />

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
