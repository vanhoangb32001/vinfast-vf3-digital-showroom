import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Chi tiết xe", href: "/chi-tiet-xe" },
  { name: "Đặt cọc", href: "/dat-coc" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActivePath = (path: string) => location.pathname === path

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" onClick={scrollToTop} className="-m-1.5 p-1.5">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="https://vinfast-vn.vn/wp-content/uploads/2023/10/VinFast_2022.png"
                alt="VinFast Logo"
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold text-foreground w-2xs:text-lg lg:text-xl">
                VinFast Miền Nam
              </span>
            </motion.div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center"
          >
            <span className="sr-only">Mở menu chính</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={scrollToTop}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                isActivePath(item.href)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          {/* <ThemeToggle /> */}
          <Link to="/dat-coc" onClick={scrollToTop}>
            <Button>Đăng ký tư vấn</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-2 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => {
                  scrollToTop()
                  setMobileMenuOpen(false)
                }}
                className={cn(
                  "block px-3 py-2 text-base font-semibold leading-7 rounded-md transition-colors",
                  isActivePath(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              {/* <ThemeToggle /> */}
              <Link
                to="/dat-coc"
                onClick={() => {
                  scrollToTop()
                  setMobileMenuOpen(false)
                }}
              >
                <Button size="sm" className="hero-button">
                  Đăng ký tư vấn
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
