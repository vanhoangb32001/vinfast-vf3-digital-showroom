import { motion } from "framer-motion"
import { ArrowUp, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info - Left Side */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">VinFast</span>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                Công ty TNHH Kinh doanh Thương mại và Dịch vụ VinFast
              </p>
              <p>
                MST/MSDN: 0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày 01/10/2019 
                và các lần thay đổi tiếp theo.
              </p>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  Địa chỉ trụ sở chính: Số 7, Đường Bằng Lăng 1, Khu đô thị Vinhomes Riverside, 
                  Phường Việt Hưng, Thành phố Hà Nội, Việt Nam
                </p>
              </div>
            </div>

            {/* Ecosystem Links */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-muted-foreground font-medium">Hệ sinh thái</span>
                <a href="#" className="text-primary hover:underline">Vinhomes</a>
                <a href="#" className="text-primary hover:underline">Vinmec</a>
                <a href="#" className="text-primary hover:underline">Vinpearl</a>
              </div>
            </div>
          </div>

          {/* Navigation Links - Center */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Về VinFast
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Giới thiệu</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tầm nhìn & Sứ mệnh</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Về VinGroup</a></li>
              </ul>
              
              <h3 className="text-sm font-semibold text-foreground mb-4 mt-6 uppercase tracking-wide">
                Tin tức
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tin công ty</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tin thị trường</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Showroom & Đại lý
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tìm showroom</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Đại lý ủy quyền</a></li>
              </ul>
              
              <h3 className="text-sm font-semibold text-foreground mb-4 mt-6 uppercase tracking-wide">
                Điều khoản chính sách
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Điều khoản sử dụng</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info - Right Side */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
              Dịch vụ khách hàng
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:1900232389" className="text-primary font-medium hover:underline">
                  1900 23 23 89
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:support.vn@vinfastauto.com" className="text-primary hover:underline">
                  support.vn@vinfastauto.com
                </a>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-foreground mb-4 mt-6 uppercase tracking-wide">
              Speak-up Hotline
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+842444582193" className="text-primary font-medium hover:underline">
                  +84 24 4458 2193
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:v.speakup@vinfast.vn" className="text-primary hover:underline">
                  v.speakup@vinfast.vn
                </a>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-foreground mb-3">Kết nối với VinFast</p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="space-y-6">
          {/* Certification */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-12 bg-primary/10 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-primary">ĐÃ THÔNG BÁO</span>
            </div>
            <div className="text-xs text-muted-foreground">
              <p className="font-medium">Bộ Công Thương</p>
              <p>VinFast. All rights reserved</p>
              <p>© Copyright 2025</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Lưu ý:</strong> Thông tin và hình ảnh sản phẩm trên website chỉ mang tính chất tham khảo và có thể thay đổi mà không cần báo trước. 
              Quãng đường di chuyển thực tế có thể khác nhau tùy thuộc vào tốc độ lái xe, địa hình, thói quen lái xe, 
              số lượng hành khách và điều kiện giao thông. Để biết thông tin chính xác nhất, 
              vui lòng liên hệ với đại lý VinFast gần nhất.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4">
            <p className="text-xs text-muted-foreground">
              © 2025 VinFast. Tất cả quyền được bảo lưu.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="mt-4 sm:mt-0 flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-4 w-4" />
              <span>Về đầu trang</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}