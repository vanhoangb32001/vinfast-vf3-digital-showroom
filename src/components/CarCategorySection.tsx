import { motion } from "framer-motion"
import { Car, Zap, Leaf, Truck } from "lucide-react"
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
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const CarGrid = ({ cars }: { cars: typeof electricCars }) => (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cars.map((car) => {
        const IconComponent = categoryIcons[car.category]
        return (
          <motion.div key={car.id} variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    <IconComponent className="w-3 h-3 mr-1" />
                    {car.variant}
                  </Badge>
                </div>
                {car.priceFrom && car.priceFrom !== "Liên hệ" && (
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Từ {car.priceFrom}
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{car.name}</CardTitle>
                <CardDescription className="text-sm">
                  {car.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Chỗ ngồi:</span>
                      <p className="font-medium">{car.specs.seating}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Động cơ:</span>
                      <p className="font-medium">{car.specs.engineType}</p>
                    </div>
                    {car.specs.range && (
                      <>
                        <div className="col-span-2">
                          <span className="text-muted-foreground">Phạm vi:</span>
                          <p className="font-medium">{car.specs.range}</p>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {car.keyFeatures.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="pt-2">
                    <Link to="/chi-tiet-xe">
                      <Button className="w-full" size="sm">
                        Xem chi tiết
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </motion.div>
  )

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Danh Mục Xe VinFast
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Khám phá dòng xe điện và xe xanh hiện đại với công nghệ tiên tiến, 
            thiết kế sang trọng và hiệu suất vượt trội cho mọi nhu cầu di chuyển
          </p>
        </motion.div>

        <Tabs defaultValue="electric" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {Object.entries(categoryLabels).map(([key, label]) => {
              const IconComponent = categoryIcons[key as keyof typeof categoryIcons]
              return (
                <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4" />
                  {label}
                </TabsTrigger>
              )
            })}
          </TabsList>

          {Object.entries(categoryLabels).map(([key, label]) => (
            <TabsContent key={key} value={key} className="space-y-6">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-2">{label}</h3>
                <p className="text-muted-foreground">
                  {categoryDescriptions[key as keyof typeof categoryDescriptions]}
                </p>
              </motion.div>
              
              {key === "electric" && <CarGrid cars={electricCars} />}
              {key === "green" && <CarGrid cars={greenCars} />}
              {key === "commercial" && <CarGrid cars={commercialCars} />}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}