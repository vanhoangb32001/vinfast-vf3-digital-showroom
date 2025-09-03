import { motion } from "framer-motion"
import { Zap, Leaf, Truck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cars } from "@/data/cars"
import { Link } from "react-router-dom"

const categoryIcons = {
  electric: Zap,
  green: Leaf,
  commercial: Truck,
}

const categoryLabels = {
  electric: "Xe Điện",
  green: "Xe Xanh",
  commercial: "Xe Thương Mại",
}

const categoryDescriptions = {
  electric: "Dòng xe điện 100% thân thiện môi trường với công nghệ tiên tiến",
  green: "Xe xăng tiết kiệm nhiên liệu với hiệu suất vận hành tối ưu",
  commercial: "Giải pháp vận tải thương mại điện hóa cho doanh nghiệp",
}

export function CarCategorySection() {

  const electricCars = cars.filter(car => car.category === "electric")
  const greenCars = cars.filter(car => car.category === "green")  
  const commercialCars = cars.filter(car => car.category === "commercial")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }


  const LuxuryCarousel = ({ cars }: { cars: typeof electricCars }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {cars.map((car) => {
            const IconComponent = categoryIcons[car.category]
            return (
              <CarouselItem key={car.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <motion.div 
                  className="group relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="h-full overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:shadow-primary/20">
                    {/* Luxury gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Floating badges with glass effect */}
                      <div className="absolute top-4 left-4 z-20">
                        <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-md">
                          <IconComponent className="w-3 h-3 mr-1" />
                          {car.variant}
                        </Badge>
                      </div>
                      
                      {car.priceFrom && car.priceFrom !== "Liên hệ" && (
                        <div className="absolute bottom-4 right-4 z-20">
                          <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg">
                            Từ {car.priceFrom}
                          </Badge>
                        </div>
                      )}

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3 relative z-20">
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {car.name}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {car.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0 space-y-4 relative z-20">
                      {/* Premium specs grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">Chỗ ngồi</span>
                          <p className="font-semibold text-sm">{car.specs.seating}</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">Động cơ</span>
                          <p className="font-semibold text-sm">{car.specs.engineType}</p>
                        </div>
                        {car.specs.range && (
                          <div className="col-span-2 space-y-1">
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">Phạm vi</span>
                            <p className="font-semibold text-sm">{car.specs.range}</p>
                          </div>
                        )}
                      </div>
                      
                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {car.keyFeatures.slice(0, 2).map((feature, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="text-xs bg-muted/50 hover:bg-primary/10 transition-colors duration-300"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Premium CTA button */}
                      <div className="pt-2">
                        <Link to="/chi-tiet-xe">
                          <Button 
                            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 shadow-lg hover:shadow-primary/25 transition-all duration-300" 
                            size="sm"
                          >
                            <span className="font-medium">Khám phá ngay</span>
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        
        {/* Custom navigation with luxury styling */}
        <div className="flex justify-center mt-8 gap-4">
          <CarouselPrevious className="relative inset-auto translate-y-0 bg-white/10 backdrop-blur-md border-white/20 hover:bg-primary/20 hover:border-primary/30 text-primary shadow-xl" />
          <CarouselNext className="relative inset-auto translate-y-0 bg-white/10 backdrop-blur-md border-white/20 hover:bg-primary/20 hover:border-primary/30 text-primary shadow-xl" />
        </div>
      </Carousel>
    </motion.div>
  )

  return (
    <section 
      className="relative py-20 overflow-hidden"
    >
      {/* Premium background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-primary/5" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0] 
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -80, 0],
          y: [0, 30, 0] 
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Danh Mục Xe VinFast
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Khám phá dòng xe điện và xe xanh hiện đại với công nghệ tiên tiến, 
            thiết kế sang trọng và hiệu suất vượt trội cho mọi nhu cầu di chuyển
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Tabs defaultValue="electric" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
              {Object.entries(categoryLabels).map(([key, label]) => {
                const IconComponent = categoryIcons[key as keyof typeof categoryIcons]
                return (
                  <TabsTrigger 
                    key={key} 
                    value={key} 
                    className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{label}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {Object.entries(categoryLabels).map(([key, label]) => (
              <TabsContent key={key} value={key} className="space-y-8">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{label}</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {categoryDescriptions[key as keyof typeof categoryDescriptions]}
                  </p>
                </motion.div>
                
                {key === "electric" && <LuxuryCarousel cars={electricCars} />}
                {key === "green" && <LuxuryCarousel cars={greenCars} />}
                {key === "commercial" && <LuxuryCarousel cars={commercialCars} />}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}