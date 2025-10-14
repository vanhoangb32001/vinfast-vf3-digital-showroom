import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Car,
  Battery,
  Shield,
  Zap,
  Settings,
  RotateCw,
  ChevronRight,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import {
  vinFastGreenData,
  VinFastGreenModel,
} from "@/data/specificationsGreen";
import {
  carExtraExtensions,
  carExtraExtension,
} from "@/data/carExtraExtensions";
import SwiperCar from "./components/swipercar";
export default function ChiTietXeGreenDetail() {
  const { id } = useParams<{ id: string }>();
  const [is360Open, setIs360Open] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Find the model based on the id from the URL
  const model = vinFastGreenData.find(
    (model) => model.id === id && model.type === "green"
  );

  // Fallback if no model is found
  if (!model) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Lỗi</CardTitle>
            <CardDescription>
              Xe với ID {id} không được tìm thấy.
            </CardDescription>
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
  const safetyFeatures =
    model.comparisons
      .find((comp) => comp.parameter === "Điểm an toàn")
      ?.values[0].split("; ")[1]
      ?.replace(/.*?\((.*?)\)/, "$1")
      .split(", ") || [];

  return (
    <div className="min-h-screen">
      <SwiperCar />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Thông số nổi bật
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Battery className="h-8 w-8 text-primary mb-2 mx-auto" />
                <h3 className="font-bold text-lg mb-1">Quãng đường</h3>
                <p className="text-2xl font-bold">{model.distance}</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-primary mb-2 mx-auto" />
                <h3 className="font-bold text-lg mb-1">Công suất</h3>
                <p className="text-2xl font-bold">{model.operate}</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-primary mb-2 mx-auto" />
                <h3 className="font-bold text-lg mb-1">Thời gian sạc</h3>
                <p className="text-2xl font-bold">{model.charging}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        {/* Technical Specifications */}
        <motion.section variants={itemVariants} className="mb-16">
          <div dangerouslySetInnerHTML={{ __html: model.content.ct1 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct11 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct12 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct13 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct14 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct15 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct16 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct2 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct21 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct22 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct23 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct24 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct25 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct26 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct3 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct31 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct32 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct33 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct34 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct35 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct36 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct4 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct41 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct42 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct43 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct44 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct45 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct46 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct5 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct51 }} />
          <div dangerouslySetInnerHTML={{ __html: model.content.ct52 }} />

          {/* <div className="text-center mb-10 my-3 mt-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Thông số kỹ thuật
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chi tiết đầy đủ về hiệu suất và tính năng của {model.model}
            </p>
          </div> */}

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px] font-semibold">
                      Danh mục
                    </TableHead>
                    <TableHead className="font-semibold">Chi tiết</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(model.specs).map(
                    ([category, detail], index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          {category}
                        </TableCell>
                        <TableCell>{detail}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
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
            Đặt cọc ngay hôm nay để nhận ưu đãi đặc biệt và là người đầu tiên sở
            hữu {model.model}
          </p>
          <Link to="/dat-coc">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
            >
              Đặt cọc ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.section>
      </motion.div>
      <div className="flex space-x-5 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-[50%]">
          <h1 className="text-4xl font-bold">
            3,5 km – Khoảng cách nhỏ cho mục tiêu lớn
          </h1>
          <p className="my-3">
            Định hình tiên phong thúc đẩy ngành công nghiệp xe điện, hướng tới
            một tương lai Xanh và Thông Minh, VinFast đã đầu tư hàng trăm triệu
            USD phát triển hạ tầng, từng bước “phủ rộng” trạm sạc xe điện:
          </p>
          <ul className="list-disc ml-6">
            <li className="my-3">
              Hệ thống trạm sạc xe điện VinFast trải dài 63 tỉnh và thành phố.
            </li>
            <li className="my-3">
              106 tuyến quốc lộ quan trọng đều có trạm sạc.
            </li>
            <li className="my-3">
              80/85 thành phố đã được lắp đặt hệ thống trạm sạc.
            </li>
            <li className="my-3">
              Khoảng cách ngắn 3,5 km giữa 2 trạm sạc trong thành phố.
            </li>
          </ul>
          <p className="my-3">
            VinFast cam kết nỗ lực mang đến nhiều tiện ích, giúp hành trình lái
            xe điện của người Việt thật dễ dàng!
          </p>
        </div>
        <div className="w-[50%]">
          <img src="/images/chung.jpg" alt="Ảnh" />
        </div>
      </div>
    </div>
  );
}
