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