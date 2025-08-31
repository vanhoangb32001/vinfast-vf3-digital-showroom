import { motion } from "framer-motion"
import { ArrowUp, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-gradient">VinFast</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Công ty Ô tô VinFast - Thương hiệu ô tô Việt Nam tiên phong trong lĩnh vực xe điện thông minh.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/chi-tiet-xe" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Chi tiết xe
                </a>
              </li>
              <li>
                <a href="/dat-coc" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Đặt cọc
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hotline: 1900 23 23 89
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Email: support@vinfastauto.com
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Bảo hành & Bảo dưỡng
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Lưu ý:</strong> Thông tin và hình ảnh sản phẩm trên website chỉ mang tính chất tham khảo và có thể thay đổi mà không cần báo trước. 
              Quãng đường di chuyển thực tế có thể khác nhau tùy thuộc vào tốc độ lái xe, địa hình, thói quen lái xe, 
              số lượng hành khách và điều kiện giao thông. Để biết thông tin chính xác nhất, 
              vui lòng liên hệ với đại lý VinFast gần nhất.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © 2024 VinFast. Tất cả quyền được bảo lưu.
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