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
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ 
              y: -16,
              scale: 1.02,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="group"
          >
            <Card className="h-full overflow-hidden border-0 bg-gradient-to-br from-card via-card/98 to-card/95 backdrop-blur-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:shadow-primary/25 relative">
              {/* Premium glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Enhanced image container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-muted/10 to-muted/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                {/* Enhanced floating badges */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-xl shadow-2xl px-3 py-1.5 text-xs sm:text-sm font-medium">
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    {car.variant}
                  </Badge>
                </div>
                
                {car.priceFrom && car.priceFrom !== "Liên hệ" && (
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20">
                    <Badge className="bg-primary/95 text-primary-foreground backdrop-blur-sm shadow-2xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold">
                      Từ {car.priceFrom}
                    </Badge>
                  </div>
                )}

                {/* Enhanced shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500 ease-out" />
                </div>
              </div>
              
              {/* Enhanced content section */}
              <div className="p-6 sm:p-8 relative z-20 space-y-4 sm:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
                    {car.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base line-clamp-2">
                    {car.description}
                  </p>
                </div>

                {/* Professional specs layout */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Chỗ ngồi</span>
                      <p className="font-bold text-base sm:text-lg text-foreground">{car.specs.seating}</p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Động cơ</span>
                      <p className="font-bold text-base sm:text-lg text-foreground">{car.specs.engineType}</p>
                    </div>
                  </div>
                  
                  {car.specs.range && (
                    <div className="space-y-1 sm:space-y-2">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Phạm vi hoạt động</span>
                      <p className="font-bold text-lg sm:text-xl text-primary">{car.specs.range}</p>
                    </div>
                  )}
                </div>
                
                {/* Enhanced feature tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {car.keyFeatures.slice(0, 3).map((feature, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs sm:text-sm bg-muted/30 hover:bg-primary/10 border-muted-foreground/20 hover:border-primary/30 transition-all duration-300 px-2 sm:px-3 py-1"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                {/* Premium CTA button */}
                <div className="pt-2 sm:pt-4">
                  <Link to="/chi-tiet-xe">
                    <Button 
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary via-primary/90 to-accent hover:from-primary/90 hover:via-primary/80 hover:to-accent/90 shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 text-sm sm:text-base font-semibold py-4 sm:py-6"
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
    <section className="min-h-screen relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] via-transparent to-primary/[0.02]" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -80, 0],
          y: [0, 30, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Enhanced header section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Danh Mục Xe VinFast
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Khám phá dòng xe điện và xe xanh hiện đại với công nghệ tiên tiến, 
            thiết kế sang trọng và hiệu suất vượt trội cho mọi nhu cầu di chuyển
          </motion.p>
        </motion.div>

        {/* Enhanced tabs section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Tabs defaultValue="electric" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 sm:mb-12 lg:mb-16 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl h-auto p-2">
              {Object.entries(categoryLabels).map(([key, label]) => {
                const IconComponent = categoryIcons[key as keyof typeof categoryIcons]
                return (
                  <TabsTrigger 
                    key={key} 
                    value={key} 
                    className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white transition-all duration-300 py-3 sm:py-4 px-2 sm:px-4 rounded-lg text-xs sm:text-sm lg:text-base"
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">{label}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {Object.entries(categoryLabels).map(([key, label]) => (
              <TabsContent key={key} value={key} className="space-y-8 sm:space-y-12">
                <motion.div 
                  className="text-center mb-8 sm:mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">{label}</h3>
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                    {categoryDescriptions[key as keyof typeof categoryDescriptions]}
                  </p>
                </motion.div>
                
                {key === "electric" && <ProfessionalCarGrid cars={electricCars} />}
                {key === "green" && <ProfessionalCarGrid cars={greenCars} />}
                {key === "commercial" && <ProfessionalCarGrid cars={commercialCars} />}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}