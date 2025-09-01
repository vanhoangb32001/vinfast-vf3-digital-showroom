import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface HistoryMilestone {
  id: string
  date: string
  title: string
  description: string
  image: string
  category: "launch" | "achievement" | "expansion" | "technology"
}

const historyData: Record<number, HistoryMilestone[]> = {
  2017: [
    {
      id: "2017-1",
      date: "15.09.2017",
      title: "VinFast được thành lập",
      description: "Công ty VinFast chính thức được thành lập, đánh dấu bước đầu tiên vào ngành công nghiệp ô tô của VinGroup.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      category: "launch"
    }
  ],
  2018: [
    {
      id: "2018-1", 
      date: "20.11.2018",
      title: "Ra mắt LUX A2.0 và LUX SA2.0",
      description: "VinFast giới thiệu hai mẫu xe đầu tiên LUX A2.0 (sedan) và LUX SA2.0 (SUV) tại Paris Motor Show.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=250&fit=crop",
      category: "launch"
    },
    {
      id: "2018-2",
      date: "14.12.2018", 
      title: "Khởi công nhà máy sản xuất",
      description: "Khởi công xây dựng nhà máy sản xuất ô tô tại Hải Phòng với tổng vốn đầu tư 3,5 tỷ USD.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
      category: "expansion"
    }
  ],
  2019: [
    {
      id: "2019-1",
      date: "17.06.2019",
      title: "Bàn giao xe LUX đầu tiên",
      description: "VinFast chính thức bàn giao những chiếc xe LUX A2.0 và LUX SA2.0 đầu tiên cho khách hàng Việt Nam.",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop",
      category: "achievement"
    },
    {
      id: "2019-2",
      date: "23.11.2019",
      title: "Ra mắt xe máy điện",
      description: "Giới thiệu dòng xe máy điện thông minh VinFast với 3 phiên bản: Impes, Ludo và Feliz.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
      category: "technology"
    }
  ],
  2020: [
    {
      id: "2020-1",
      date: "12.08.2020",
      title: "Mở rộng hệ thống Showroom",
      description: "VinFast mở rộng hệ thống showroom trên toàn quốc với hơn 50 điểm bán hàng và dịch vụ.",
      image: "https://images.unsplash.com/photo-1562141961-831d416a37d9?w=400&h=250&fit=crop",
      category: "expansion"
    }
  ],
  2021: [
    {
      id: "2021-1",
      date: "15.03.2021",
      title: "Công bố chuyển đổi sang xe điện",
      description: "VinFast chính thức công bố chiến lược chuyển đổi hoàn toàn sang sản xuất xe điện từ năm 2022.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=250&fit=crop",
      category: "technology"
    },
    {
      id: "2021-2",
      date: "28.11.2021",
      title: "Ra mắt dòng xe điện VF e34",
      description: "Giới thiệu xe điện VF e34 - mẫu xe điện đầu tiên trong dòng sản phẩm mới của VinFast.",
      image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=250&fit=crop",
      category: "launch"
    }
  ],
  2022: [
    {
      id: "2022-1",
      date: "26.04.2022",
      title: "Ra mắt 5 mẫu xe máy điện thế hệ mới",
      description: "VinFast ra mắt 5 mẫu xe máy điện thế hệ mới sử dụng pin LFP, bứt phá công nghệ - khơi mở tương lai.",
      image: "https://images.unsplash.com/photo-1558618020-bf0c44de4af2?w=400&h=250&fit=crop",
      category: "technology"
    },
    {
      id: "2022-2", 
      date: "07.04.2022",
      title: "Hành trình 111 xe VF e34 chinh phục Sơn La",
      description: "Hành trình 111 xe VF e34 chính phục Sơn La - điểm cực Đông Bắc của Tổ quốc được vinh danh kỷ lục 'Đoàn caravan xe điện nhiều nhất Việt Nam'.",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=250&fit=crop",
      category: "achievement"
    },
    {
      id: "2022-3",
      date: "30.03.2022", 
      title: "Xe của năm 2022",
      description: "VinFast tiếp tục được vinh danh 'Xe được yêu thích nhất phân khúc' cho cả 4 dòng xe gồm Fadil, Lux A2.0, Lux SA2.0, VF e34 tại bình chọn 'Xe của năm 2022'.",
      image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=400&h=250&fit=crop",
      category: "achievement"
    }
  ],
  2023: [
    {
      id: "2023-1",
      date: "10.01.2023",
      title: "Ra mắt VF 8 và VF 9 tại CES",
      description: "VinFast chính thức ra mắt hai mẫu xe điện VF 8 và VF 9 tại Consumer Electronics Show (CES) 2023 ở Las Vegas.",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&h=250&fit=crop",
      category: "launch"
    },
    {
      id: "2023-2",
      date: "15.08.2023",
      title: "IPO thành công tại NASDAQ",
      description: "VinFast hoàn thành IPO và niêm yết thành công tại sàn giao dịch NASDAQ với mã cổ phiếu VFS.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop",
      category: "achievement"
    }
  ]
}

const categoryColors = {
  launch: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  achievement: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", 
  expansion: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  technology: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
}

const categoryLabels = {
  launch: "Ra mắt",
  achievement: "Thành tựu", 
  expansion: "Mở rộng",
  technology: "Công nghệ"
}

export function BrandHistorySection() {
  const [selectedYear, setSelectedYear] = useState(2022)
  const years = Object.keys(historyData).map(Number).sort((a, b) => b - a)
  
  const currentMilestones = historyData[selectedYear] || []

  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Lịch sử thương hiệu
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hành trình phát triển và những cột mốc quan trọng của VinFast 
            trong việc kiến tạo tương lai di chuyển bền vững
          </p>
        </motion.div>

        {/* Milestones Grid */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, staggerChildren: 0.1 }}
            >
              {currentMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden hover-scale">
                    <div className="relative overflow-hidden">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className={categoryColors[milestone.category]}>
                          {categoryLabels[milestone.category]}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                          {milestone.date}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Year Timeline */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            {/* Year buttons */}
            <div className="relative flex items-center gap-8 px-4">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`
                    relative z-10 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
                    ${selectedYear === year 
                      ? 'bg-primary text-primary-foreground shadow-lg scale-110' 
                      : 'bg-background text-muted-foreground hover:text-foreground hover:bg-muted border border-border hover:border-primary/50'
                    }
                  `}
                >
                  <motion.span
                    initial={false}
                    animate={{
                      scale: selectedYear === year ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {year}
                  </motion.span>
                  
                  {selectedYear === year && (
                    <motion.div
                      layoutId="selected-year"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}