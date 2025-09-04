import { motion } from "framer-motion"
import { Zap, Leaf, Truck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  electric: "Dòng xe điện 100% thân thiện môi trường với công nghệ tiên tiến nhất",
  green: "Xe xăng tiết kiệm nhiên liệu với hiệu suất vận hành tối ưu và bền vững",
  commercial: "Giải pháp vận tải thương mại điện hóa hoàn toàn cho doanh nghiệp hiện đại",
}

export function CarCategorySection() {
  const electricCars = cars.filter(car => car.category === "electric")
  const greenCars = cars.filter(car => car.category === "green")  
  const commercialCars = cars.filter(car => car.category === "commercial")

  const ProfessionalCarGrid = ({ cars }: { cars: typeof electricCars }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
      {cars.map((car, index) => {
        const IconComponent = categoryIcons[car.category]
        return (
          <motion.div 
            key={car.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className="group will-change-transform"
          >
            <Card className="h-full overflow-hidden bg-card shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 group-hover:translate-y-[-8px]">
              {/* Simple overlay */}
              <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Optimized image container */}
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover will-change-transform transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Simple badges */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-white/90 text-primary border-primary/20 px-3 py-1.5 text-xs font-medium">
                    <IconComponent className="w-3 h-3 mr-1.5" />
                    {car.variant}
                  </Badge>
                </div>
                
                {car.priceFrom && car.priceFrom !== "Liên hệ" && (
                  <div className="absolute bottom-4 right-4 z-10">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold">
                      Từ {car.priceFrom}
                    </Badge>
                  </div>
                )}
              </div>
              
              {/* Optimized content section */}
              <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary leading-tight">
                    {car.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base line-clamp-2">
                    {car.description}
                  </p>
                </div>

                {/* Simple specs layout */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground uppercase font-medium">Chỗ ngồi</span>
                      <p className="font-semibold text-base text-foreground">{car.specs.seating}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground uppercase font-medium">Động cơ</span>
                      <p className="font-semibold text-base text-foreground">{car.specs.engineType}</p>
                    </div>
                  </div>
                  
                  {car.specs.range && (
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground uppercase font-medium">Phạm vi hoạt động</span>
                      <p className="font-bold text-lg text-primary">{car.specs.range}</p>
                    </div>
                  )}
                </div>
                
                {/* Simple feature tags */}
                <div className="flex flex-wrap gap-2">
                  {car.keyFeatures.slice(0, 3).map((feature, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs bg-secondary/20 border-primary/20 text-primary hover:bg-primary/10 transition-colors duration-200 px-2 py-1"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                {/* Simple CTA button */}
                <div className="pt-4">
                  <Link to="/chi-tiet-xe">
                    <Button 
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 transition-colors duration-200 text-base font-semibold py-4"
                    >
                      Khám phá chi tiết
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )

  return (
    <section className="min-h-screen relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background to-secondary/10">
      {/* Simple background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.01] via-transparent to-transparent" />
      
      {/* Simple background decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Simple header section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-primary">
            Danh Mục Xe VinFast
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Khám phá dòng xe điện và xe xanh hiện đại với công nghệ tiên tiến, 
            thiết kế sang trọng và hiệu suất vượt trội cho mọi nhu cầu di chuyển
          </p>
        </div>

        {/* Simple tabs section */}
        <div className="w-full">
          <Tabs defaultValue="electric" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 sm:mb-12 lg:mb-16 bg-secondary/30 border border-primary/20 h-auto p-2">
              {Object.entries(categoryLabels).map(([key, label]) => {
                const IconComponent = categoryIcons[key as keyof typeof categoryIcons]
                return (
                  <TabsTrigger 
                    key={key} 
                    value={key} 
                    className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 data-[state=active]:bg-primary data-[state=active]:text-white transition-colors duration-200 py-3 sm:py-4 px-2 sm:px-4 rounded-lg text-xs sm:text-sm lg:text-base"
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">{label}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {Object.entries(categoryLabels).map(([key, label]) => (
              <TabsContent key={key} value={key} className="space-y-8 sm:space-y-12">
                <div className="text-center mb-8 sm:mb-12">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-primary">{label}</h3>
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                    {categoryDescriptions[key as keyof typeof categoryDescriptions]}
                  </p>
                </div>
                
                {key === "electric" && <ProfessionalCarGrid cars={electricCars} />}
                {key === "green" && <ProfessionalCarGrid cars={greenCars} />}
                {key === "commercial" && <ProfessionalCarGrid cars={commercialCars} />}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}