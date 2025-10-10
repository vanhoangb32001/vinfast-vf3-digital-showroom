import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { vinFastData, VinFastModel } from "@/data/specifications";
import {
  vinFastGreenData,
  VinFastGreenModel,
} from "@/data/specificationsGreen";
import { featuredVanCar, featuredVanCars } from "@/data/featuredVanCar";
import { VanModel, VanData } from "@/data/specificationsVan";

const navigation = [
  { name: "Trang chủ", href: "/" },
  {
    name: "Sản phẩm",
    href: "/danh-sach-xe",
    isDropdown: true,
    type: ["vf", "green", "ec-van"],
  },
  // {
  //   name: "Sản phẩm VinFast",
  //   href: "/danh-sach-xe-vf",
  //   isDropdown: true,
  //   type: "vf",
  // },
  // {
  //   name: "Sản phẩm Green",
  //   href: "/danh-sach-xe-green",
  //   isDropdown: true,
  //   type: "green",
  // },
  {
    name: "Chương trình",
    href: "/chuong-trinh",
  },
  { name: "Đặt cọc", href: "/dat-coc" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedid, setSelectedid] = useState("");
  const [dropdownOpens, setDropdownOpens] = useState<{
    [key: string]: boolean;
  }>({});
  const location = useLocation();
  const isActivePath = (path: string) => {
    if (path === "/danh-sach-xe-green") {
      return (
        location.pathname === path ||
        location.pathname.startsWith("/danh-sach-xe-green/")
      );
    } else if (path === "/danh-sach-xe-vf") {
      return (
        location.pathname === path ||
        location.pathname.startsWith("/danh-sach-xe-vf/")
      );
    } else if (path === "/danh-sach-xe-van") {
      return (
        location.pathname === path ||
        location.pathname.startsWith("/danh-sach-xe-van/")
      );
    }
    return location.pathname === path;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTriggerClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault(); // Ngăn dropdown mở khi click
    scrollToTop();
    window.location.href = href; // Chuyển hướng thủ công đến /danh-sach-xe
  };

  const setDropdownOpen = (name: string, open: boolean) => {
    setDropdownOpens((prev) => ({ ...prev, [name]: open }));
  };

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
              <img src="/Logo.png" alt="VinFast Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-foreground w-2xs:text-lg lg:text-xl sm:text-xl">
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
          {navigation.map((item) =>
            item.isDropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.name, true)}
                onMouseLeave={() => setDropdownOpen(item.name, false)}
              >
                <DropdownMenu
                  open={dropdownOpens[item.name]}
                  onOpenChange={(open) => setDropdownOpen(item.name, open)}
                >
                  <DropdownMenuTrigger asChild>
                    <Link
                      to={item.href}
                      onClick={(e) => handleTriggerClick(e, item.href)}
                      className={cn(
                        "text-sm font-semibold leading-6 flex items-center gap-1 px-3 rounded-md",
                        isActivePath(item.href)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                  </DropdownMenuTrigger>

                  {/* Dropdown chứa 2 nhóm: VinFast + Green */}
                  <DropdownMenuContent align="start" className="w-56">
                    {/* --- Nhóm VinFast --- */}
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger
                        className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase mx-0"
                        onMouseEnter={() => setSelectedid("vf")}
                      >
                        VinFast →
                      </DropdownMenuSubTrigger>

                      <DropdownMenuSubContent>
                        {vinFastData.map((model: VinFastModel) => (
                          <DropdownMenuItem key={model.id} asChild>
                            <Link
                              to={`/danh-sach-xe-vf/${model.id}`}
                              onClick={scrollToTop}
                              className="block w-full text-sm"
                            >
                              {model.model}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>

                    {/* --- Ngăn cách --- */}
                    <div className="border-t border-border my-1" />

                    {/* --- Nhóm Green --- */}
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger
                        className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase"
                        onMouseEnter={() => setSelectedid("green")}
                      >
                        Green →
                      </DropdownMenuSubTrigger>

                      <DropdownMenuSubContent>
                        {vinFastGreenData.map((model: VinFastGreenModel) => (
                          <DropdownMenuItem key={model.id} asChild>
                            <Link
                              to={`/danh-sach-xe-green/${model.id}`}
                              onClick={scrollToTop}
                              className="block w-full text-sm"
                            >
                              {model.model}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>

                        <div className="border-t border-border my-1" />
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger
                        className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase mx-0"
                        onMouseEnter={() => setSelectedid("ec-van")}
                      >
                        EC Van →
                      </DropdownMenuSubTrigger>

                      <DropdownMenuSubContent>
                        {VanData.map((model: VanModel) => (
                          <DropdownMenuItem key={model.id} asChild>
                            <Link
                              to={`/danh-sach-xe-van/${model.id}`}
                              onClick={scrollToTop}
                              className="block w-full text-sm"
                            >
                              {model.model}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
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
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
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
            {navigation.map((item) =>
              item.isDropdown ? (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => {
                      scrollToTop();
                      setMobileMenuOpen(false);
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
                  <div className="pl-6 space-y-1">
                    {vinFastData
                      .filter((model) => model.type.includes(model.type))
                      .map((model: VinFastModel) => (
                        <Link
                          key={model.id}
                          to={`/danh-sach-xe/${model.id}`}
                          onClick={() => {
                            scrollToTop();
                            setMobileMenuOpen(false);
                          }}
                          className={cn(
                            "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                            isActivePath(`/danh-sach-xe/${model.id}`)
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          )}
                        >
                          {model.model}
                        </Link>
                      ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    scrollToTop();
                    setMobileMenuOpen(false);
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
              )
            )}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <Link
                to="/dat-coc"
                onClick={() => {
                  scrollToTop();
                  setMobileMenuOpen(false);
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
  );
}
