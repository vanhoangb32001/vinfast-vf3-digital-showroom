import { motion } from "framer-motion";
import {
  ArrowUp,
  Facebook,
  Phone,
  Mail,
  MapPin,
  CircleChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Profile } from "@/config/globalconfig";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border flex relative">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info - Left Side */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">VinFast</span>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                TẬP ĐOÀN ĐẦU TƯ MIỀN NAM
              </p>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  Địa chỉ Vinfast Miền Nam CN Cộng Hòa: Số 15-17 đường Cộng Hòa,
                  Phường 4, Q. Tân Bình, TP. HCM
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  Địa chỉ Vinfast Miền Nam CN Đồng Nai: Số 270 - 369 QL51,
                  Phường An Hòa, TP.Biên Hoà, Tỉnh Đồng Nai
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  Địa chỉ Vinfast Miền Nam CN Bình Chánh: Số 1732 Quốc Lộ 1A,
                  Thị Trấn Tân Túc, Huyện Bình Chánh, TP.Hồ Chí Minh
                </p>
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
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Tầm nhìn & Sứ mệnh
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Về VinGroup
                  </a>
                </li>
              </ul>

              <h3 className="text-sm font-semibold text-foreground mb-4 mt-6 uppercase tracking-wide">
                Tin tức
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Tin công ty
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Tin thị trường
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Showroom & Đại lý
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Tìm showroom
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Đại lý ủy quyền
                  </a>
                </li>
              </ul>

              <h3 className="text-sm font-semibold text-foreground mb-4 mt-6 uppercase tracking-wide">
                Điều khoản chính sách
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Điều khoản sử dụng
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info - Right Side */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground mb-4 mt-6 uppercase tracking-wide">
              Speak-up Hotline
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`tel:${Profile.phone}`}
                  className="text-primary hover:underline underline-offset-2 cursor-pointer"
                >
                  {Profile.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${Profile.email}`}
                  className="text-primary hover:underline"
                >
                  {Profile.email}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-foreground mb-3">
                Kết nối với VinFast
              </p>
              <div className="flex space-x-3">
                <a
                  href={Profile.fanpage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4">
            <p className="text-xs text-muted-foreground">
              © 2025 VinFast. Tất cả quyền được bảo lưu.
            </p>
            <div>
              <motion.button
                onClick={scrollToTop}
                className="text-muted-foreground text-sm text-black bottom-6 right-7 z-50 flex items-center absolute"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CircleChevronUp
                  className="h-12 w-12 p-1 rounded-full
             bg-blue-600 "
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
