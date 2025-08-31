import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { 
  ArrowRight, 
  ArrowDown, 
  Leaf, 
  Zap, 
  Users, 
  BatteryCharging, 
  Car,
  Shield,
  Settings,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Toggle } from "@/components/ui/toggle"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

// Data for color options
const colorOptions = [
  { name: "Summer Yellow", value: "summer-yellow", color: "#FFD700", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop" },
  { name: "Rose Pink", value: "rose-pink", color: "#FFB6C1", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop" },
  { name: "Zenith Grey", value: "zenith-grey", color: "#708090", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop" },
  { name: "Crimson Red", value: "crimson-red", color: "#DC143C", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop" },
  { name: "Sky Blue", value: "sky-blue", color: "#87CEEB", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop" },
  { name: "Urban Mint", value: "urban-mint", color: "#98FB98", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop" },
  { name: "Infinity Blanc", value: "infinity-blanc", color: "#FFFFFF", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop" },
  { name: "Iris Berry", value: "iris-berry", color: "#8A2BE2", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop" },
  { name: "Electric Blue", value: "electric-blue", color: "#0080FF", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop" }
]

// Infrastructure stats
const infrastructureStats = [
  { label: "Tỉnh/Thành", value: 63, max: 63, icon: BatteryCharging },
  { label: "Quốc lộ", value: 106, max: 106, icon: Car },
  { label: "Thành phố", value: 80, max: 85, icon: Zap },
  { label: "Khoảng cách (km)", value: 3.5, max: 5, icon: BatteryCharging }
]

// Counter animation hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [end, duration])
  
  return count
}

const Index = () => {
  const [hasRimCover, setHasRimCover] = useState(false)
  const [isQuickFormOpen, setIsQuickFormOpen] = useState(false)
  const { toast } = useToast()

  const scrollToNext = () => {
    window.scrollTo({ 
      top: window.innerHeight, 
      behavior: 'smooth' 
    })
  }

  const handleQuickSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    })
    
    setIsQuickFormOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1920&h=1080&fit=crop"
            alt="VinFast VF3 - Xe điện thông minh"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl mb-6">
              VinFast VF3
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4">
              Sáng tạo chất riêng
            </div>
            <div className="text-lg sm:text-xl text-white/90 mb-2">
              Xe nhỏ, giá trị lớn
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <p className="text-lg sm:text-xl text-white/90 mb-10">
              Tự do di chuyển xanh, trải nghiệm giá trị trên mỗi hành trình, 
              thể hiện phong cách sống riêng.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/chi-tiet-xe">
                <Button size="lg" className="hero-button text-lg px-8 py-4">
                  Khám phá ngay
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary transition-colors animate-bounce"
          >
            <ArrowDown className="h-8 w-8" />
          </motion.button>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Pricing Section */}
        <section className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              <span className="text-gradient">299.000.000 VNĐ</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Tùy chọn cho ngân sách của bạn. Biến thể Eco và Plus với tùy chọn mua pin hoặc thuê pin.
            </p>
            <Badge variant="secondary" className="bg-gradient-eco text-white text-lg px-6 py-2">
              🎉 Giá ưu đãi đặc biệt
            </Badge>
          </motion.div>
        </section>

        {/* Description Section with Tabs */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Tại sao chọn VinFast VF3?
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="design" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="design" className="text-sm sm:text-base">
                  <Car className="mr-2 h-4 w-4" />
                  Thiết kế
                </TabsTrigger>
                <TabsTrigger value="performance" className="text-sm sm:text-base">
                  <Zap className="mr-2 h-4 w-4" />
                  Hiệu suất
                </TabsTrigger>
                <TabsTrigger value="urban" className="text-sm sm:text-base">
                  <Leaf className="mr-2 h-4 w-4" />
                  Đô thị
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="design" className="mt-6">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Car className="mr-2 h-6 w-6 text-primary" />
                      Thiết kế tối giản nhỏ gọn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">3.190mm</div>
                        <div className="text-sm text-muted-foreground">Chiều dài</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">1.679mm</div>
                        <div className="text-sm text-muted-foreground">Chiều rộng</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">1.622mm</div>
                        <div className="text-sm text-muted-foreground">Chiều cao</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">191mm</div>
                        <div className="text-sm text-muted-foreground">Khoảng sáng gầm</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-6">
                      Kích thước nhỏ gọn hoàn hảo cho việc di chuyển trong đô thị, dễ dàng đỗ xe và 
                      linh hoạt trong giao thông đông đúc.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="performance" className="mt-6">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-6 w-6 text-secondary" />
                      Hiệu suất linh hoạt
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="text-center p-6 bg-muted/50 rounded-lg">
                        <Settings className="h-8 w-8 text-primary mx-auto mb-3" />
                        <div className="font-semibold mb-2">Eco Mode</div>
                        <div className="text-sm text-muted-foreground">Tối ưu hóa quãng đường</div>
                      </div>
                      <div className="text-center p-6 bg-muted/50 rounded-lg">
                        <Car className="h-8 w-8 text-secondary mx-auto mb-3" />
                        <div className="font-semibold mb-2">Comfort Mode</div>
                        <div className="text-sm text-muted-foreground">Cân bằng hiệu suất</div>
                      </div>
                      <div className="text-center p-6 bg-muted/50 rounded-lg">
                        <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                        <div className="font-semibold mb-2">Sport Mode</div>
                        <div className="text-sm text-muted-foreground">Tăng tốc tối đa</div>
                      </div>
                    </div>
                    <div className="text-center mt-6">
                      <div className="text-3xl font-bold text-gradient mb-2">5.3 giây</div>
                      <div className="text-muted-foreground">Tăng tốc 0-50km/h</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="urban" className="mt-6">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="mr-2 h-6 w-6 text-secondary" />
                      Phù hợp đô thị
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center space-x-3">
                        <Leaf className="h-6 w-6 text-secondary flex-shrink-0" />
                        <span>Chi phí vận hành siêu tiết kiệm</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BatteryCharging className="h-6 w-6 text-primary flex-shrink-0" />
                        <span>Sạc điện tại nhà và trạm công cộng</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Car className="h-6 w-6 text-secondary flex-shrink-0" />
                        <span>Dễ dàng di chuyển trong phố</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                        <span>Tích hợp công nghệ thông minh</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-gradient-eco rounded-lg text-white text-center">
                      <div className="text-2xl font-bold mb-2">≈ 1₫ / km</div>
                      <div className="text-sm opacity-90">Chi phí vận hành tương đương 1 ly cà phê</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </section>

        {/* Color Options Carousel */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              9 Màu sắc ngoại thất
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thể hiện cá tính riêng với bảng màu đa dạng và hiện đại
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {colorOptions.map((color, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                          <img 
                            src={color.image}
                            alt={`VinFast VF3 màu ${color.name}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{color.name}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <div 
                                className="w-4 h-4 rounded-full border border-border"
                                style={{ backgroundColor: color.color }}
                              ></div>
                              <span className="text-sm text-muted-foreground">#{color.value}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        </section>

        {/* Wheel/Rim Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              La-zăng 16 inch
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="card-hover max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <RotateCw className="h-16 w-16 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">
                  Tùy chọn ốp la-zăng
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tăng khả năng di chuyển địa hình đô thị đa dạng, vẻ cá tính sang trọng
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <Label htmlFor="rim-toggle">Không ốp</Label>
                  <Toggle 
                    id="rim-toggle"
                    pressed={hasRimCover}
                    onPressedChange={setHasRimCover}
                    className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                  >
                    {hasRimCover ? "Có ốp" : "Không ốp"}
                  </Toggle>
                  <Label htmlFor="rim-toggle">Có ốp</Label>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Interior Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Nội thất thông minh
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto"
          >
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-6 w-6 text-primary" />
                  4 chỗ ngồi thoải mái
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Không gian nội thất được tối ưu hóa cho 4 người lớn, 
                  ghế ngồi êm ái với chất liệu cao cấp.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="mr-2 h-6 w-6 text-secondary" />
                  Chất liệu thân thiện
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sử dụng vật liệu thân thiện môi trường, màu sắc trẻ trung, 
                  tạo cảm giác thoải mái cho mọi hành trình.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Charging Infrastructure */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Hạ tầng sạc toàn quốc
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mạng lưới trạm sạc VinFast phủ khắp cả nước
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {infrastructureStats.map((stat, index) => {
              const Icon = stat.icon
              const animatedValue = useCountUp(stat.value)
              
              return (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {typeof stat.value === 'number' && stat.value < 10 ? 
                        `${animatedValue.toFixed(1)}` : 
                        animatedValue.toLocaleString()
                      }
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">{stat.label}</div>
                    <Progress value={(stat.value / stat.max) * 100} className="h-2" />
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>
        </section>

        {/* Call-to-Action Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-hero rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
            Đăng ký tư vấn ngay
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Để lại thông tin để nhận tư vấn chi tiết và ưu đãi đặc biệt từ VinFast
          </p>
          
          {!isQuickFormOpen ? (
            <Button 
              size="lg" 
              onClick={() => setIsQuickFormOpen(true)}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
            >
              Đăng ký ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          ) : (
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="quick-name" className="text-foreground">Họ và tên</Label>
                    <Input 
                      id="quick-name"
                      name="name"
                      placeholder="Nhập họ và tên"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="quick-email" className="text-foreground">Email</Label>
                    <Input 
                      id="quick-email"
                      name="email"
                      type="email"
                      placeholder="Nhập email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="quick-phone" className="text-foreground">Số điện thoại</Label>
                    <Input 
                      id="quick-phone"
                      name="phone"
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      required
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit" className="flex-1 eco-button">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Gửi
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsQuickFormOpen(false)}
                    >
                      Hủy
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default Index;