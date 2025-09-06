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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {cars.map((car, index) => {
        const IconComponent = categoryIcons[car.category]
        return (
          <motion.div 
            key={car.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="group will-change-transform"
          >
            <Card className="relative h-full overflow-hidden bg-gradient-to-br from-card to-card/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 ring-1 ring-white/10 hover:ring-primary/30 group-hover:translate-y-[-12px] group-hover:rotate-1">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image section with enhanced overlay */}
              <div className="relative overflow-hidden h-56 lg:h-64">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover will-change-transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Enhanced badges */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-white/95 backdrop-blur-sm text-primary border-0 px-4 py-2 text-sm font-bold shadow-lg">
                    <IconComponent className="w-4 h-4 mr-2" />
                    {car.variant}
                  </Badge>
                </div>
                
                {car.priceFrom && car.priceFrom !== "Liên hệ" && (
                  <div className="absolute bottom-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white border-0 px-4 py-2 text-sm font-bold shadow-xl backdrop-blur-sm">
                      Từ {car.priceFrom}
                    </Badge>
                  </div>
                )}
              </div>
              
              {/* Enhanced content section */}
              <div className="relative p-6 lg:p-8 space-y-6 bg-gradient-to-b from-transparent to-card/50">
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent leading-tight">
                    {car.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base line-clamp-2 font-medium">
                    {car.description}
                  </p>
                </div>

                {/* Enhanced specs grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="block text-xs text-muted-foreground uppercase font-bold mb-1">Chỗ ngồi</span>
                    <p className="font-bold text-lg text-foreground">{car.specs.seating}</p>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="block text-xs text-muted-foreground uppercase font-bold mb-1">Động cơ</span>
                    <p className="font-bold text-lg text-foreground">{car.specs.engineType}</p>
                  </div>
                  {car.specs.range && (
                    <div className="text-center p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                      <span className="block text-xs text-muted-foreground uppercase font-bold mb-1">Phạm vi</span>
                      <p className="font-bold text-lg text-primary">{car.specs.range}</p>
                    </div>
                  )}
                </div>
                
                {/* Enhanced feature badges */}
                <div className="flex flex-wrap gap-2">
                  {car.keyFeatures.slice(0, 3).map((feature, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs bg-white/5 border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 px-3 py-2 backdrop-blur-sm"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                {/* Enhanced CTA button */}
                <div className="pt-4">
                  <Link to="/chi-tiet-xe">
                    <Button 
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 text-base font-bold py-4 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Khám phá chi tiết →
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