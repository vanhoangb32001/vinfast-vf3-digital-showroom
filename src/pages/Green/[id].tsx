import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Car, 
  Battery, 
  Shield, 
  Zap, 
  Settings, 
  RotateCw,
  ChevronRight,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { vinFastGreenData, VinFastGreenModel } from "@/data/specificationsGreen";

export default function ChiTietXeGreenDetail() {
  const { id } = useParams<{ id: string }>();
  const [is360Open, setIs360Open] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Find the model based on the id from the URL
  const model = vinFastGreenData.find(model => model.id === id && model.type === "green");

  // Fallback if no model is found
  if (!model) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Lỗi</CardTitle>
            <CardDescription>Xe với ID {id} không được tìm thấy.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/">
              <Button>Quay lại trang chính</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Extract safety features from the comparison data
  const safetyFeatures = model.comparisons
    .find(comp => comp.parameter === 'Điểm an toàn')
    ?.values[0]
    .split('; ')[1]
    ?.replace(/.*?\((.*?)\)/, '$1')
    .split(', ') || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {model.model}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl mx-auto">
              Khám phá mọi chi tiết của chiếc xe điện {model.model} từ VinFast
            </p>
            
            <div className="mt-8 flex justify-center">
              <Dialog open={is360Open} onOpenChange={setIs360Open}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <RotateCw className="mr-2 h-5 w-5" />
                    Xem 360°
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{model.model} - Góc nhìn 360°</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Demo xem 360° (sẽ tích hợp thực tế)</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        {/* Technical Specifications */}
        <motion.section variants={itemVariants} className="mb-16">
          <div dangerouslySetInnerHTML={{ __html: model.content.ct1 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct2 }} />
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Thông số kỹ thuật
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chi tiết đầy đủ về hiệu suất và tính năng của {model.model}
            </p>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px] font-semibold">Danh mục</TableHead>
                    <TableHead className="font-semibold">Chi tiết</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(model.specs).map(([category, detail], index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{category}</TableCell>
                      <TableCell>{detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.section>

        {/* Safety Features */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Tính năng an toàn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tính năng an toàn tiên tiến đảm bảo an toàn cho mọi hành trình
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                Hệ thống an toàn toàn diện
              </CardTitle>
              <CardDescription>
                {model.model} được trang bị đầy đủ các tính năng an toàn hiện đại
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Battery & Performance */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Pin & Hiệu suất
            </h2>
          </div>
          
          <Tabs defaultValue="battery" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="battery" className="flex items-center">
                <Battery className="mr-2 h-4 w-4" />
                Pin
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                Hiệu suất
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="battery" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hệ thống pin tiên tiến</CardTitle>
                  <CardDescription>
                    Pin Lithium-ion hiệu suất cao với công nghệ quản lý nhiệt thông minh
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Dung lượng pin</h4>
                      <div className="flex items-center space-x-2">
                        <Progress value={85} className="flex-1" />
                        <span className="text-sm font-medium">{model.specs['Dung lượng pin']}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Bảo hành</h4>
                      <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                        8 năm không giới hạn km
                      </Badge>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        {model.specs['Thời gian sạc nhanh'].split(' ')[0]}
                      </div>
                      <div className="text-sm text-muted-foreground">phút sạc nhanh</div>
                      <div className="text-xs text-muted-foreground">(10%-70%)</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        {model.specs['Quãng đường'].split(' ')[0]}
                      </div>
                      <div className="text-sm text-muted-foreground">km phạm vi</div>
                      <div className="text-xs text-muted-foreground">(NEDC/WLTP)</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">1₫</div>
                      <div className="text-sm text-muted-foreground">ly cà phê/km</div>
                      <div className="text-xs text-muted-foreground">chi phí vận hành</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="performance" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hiệu suất vượt trội</CardTitle>
                  <CardDescription>
                    3 chế độ lái linh hoạt, {model.specs['Dẫn động'].toLowerCase()} mạnh mẽ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                      <Settings className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Eco Mode</h4>
                      <p className="text-sm text-muted-foreground">Tối ưu hóa phạm vi hoạt động</p>
                    </div>
                    <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                      <Car className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Comfort Mode</h4>
                      <p className="text-sm text-muted-foreground">Cân bằng hiệu suất & tiết kiệm</p>
                    </div>
                    <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                      <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">Sport Mode</h4>
                      <p className="text-sm text-muted-foreground">Hiệu suất tối đa, tăng tốc nhanh</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Comparison */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              So sánh với đối thủ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {model.model} vượt trội so với các đối thủ trong phân khúc
            </p>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px] font-semibold">Tính năng</TableHead>
                      <TableHead className="font-semibold text-primary">{model.vfNameInComp}</TableHead>
                      {model.competitors.map((competitor, index) => (
                        <TableHead key={index} className="font-semibold">{competitor}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {model.comparisons.map((row, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{row.parameter}</TableCell>
                        {row.values.map((value, idx) => (
                          <TableCell key={idx} className={idx === 0 ? "font-semibold text-primary" : ""}>{value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          variants={itemVariants} 
          className="text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Sẵn sàng trải nghiệm {model.model}?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Đặt cọc ngay hôm nay để nhận ưu đãi đặc biệt và là người đầu tiên sở hữu {model.model}
          </p>
          <Link to="/dat-coc">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
              Đặt cọc ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.section>
      </motion.div>
    </div>
  );
}
