import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Shield, Award, Calendar, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface ConsultantProfile {
  id: string;
  name: string;
  title: string;
  experience: string;
  phone: string;
  zalo: string;
  fanpage: string;
  location: string;
  avatar: string;
  bio: string;
  specialties: string[];
  languages: string[];
}

const consultant: ConsultantProfile = {
  id: "1",
  name: "Hoàng Phúc Vinfast",
  title: "Chuyên gia Tư vấn VinFast",
  experience: "10+ năm kinh nghiệm",
  phone: "0862 797 714",
  zalo: "https://zalo.me/0862797714",
  fanpage: "https://facebook.com/share/1BGZDhc3fb/?mibextid=wwXIfr",
  location: "VinFast Đồng Nai, 270 – 369 QL51, P. Long Hưng, Đồng Nai",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  bio: "Phong cách - An Toàn - Sáng Tạo - Tiên Phong",
  specialties: ["Xe điện cao cấp", "Dịch vụ VIP", "Tư vấn tài chính"],
  languages: ["Tiếng Việt", "English"]
};

export function SellerInfoSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            Chuyên Gia Tư Vấn
            <span className="block bg-clip-text bg-gradient-to-r text-blue-600">
              Hàng Đầu Của Chúng Tôi
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Đội ngũ chuyên gia của chúng tôi mang đến trải nghiệm mua sắm xe đẳng cấp với sự tận tâm và chuyên nghiệp.
          </p>
        </motion.div>

        {/* Consultant Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-[#F6F7F7] border-none shadow-xl rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <Avatar className="w-24 h-24 ring-4 ring-blue-600/40 hover:ring-blue-600/50 transition-all duration-300">
                    <AvatarImage src={consultant.avatar} alt={consultant.name} />
                    <AvatarFallback className="bg-gray-700 text-white text-2xl font-bold">
                      {consultant.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Name + Title */}
                <h3 className="text-2xl font-bold text-black mb-2">{consultant.name}</h3>
                <p className="text-blue-500 text-lg mb-4 italic">{consultant.title}</p>

                {/* Bio */}
                <p className="text-gray-600 max-w-xl mb-6">{consultant.bio}</p>

                <Separator className="my-6 bg-gray-600 w-1/2" />

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 w-full">
                  <div className="flex flex-col items-center">
                    <Award className="w-8 h-8 text-blue-400 mb-2" />
                    <span className="text-black font-semibold">{consultant.experience}</span>
                    <span className="text-gray-600 text-sm">Kinh nghiệm</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Shield className="w-8 h-8 text-blue-400 mb-2" />
                    <span className="text-black font-semibold">Uy tín hàng đầu</span>
                    <span className="text-gray-600 text-sm">Đảm bảo chất lượng</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Calendar className="w-8 h-8 text-blue-400 mb-2" />
                    <span className="text-black font-semibold">Hỗ trợ 24/7</span>
                    <span className="text-gray-600 text-sm">Luôn sẵn sàng</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-8 w-full">
                  <h4 className="text-lg font-semibold text-black mb-3">Chuyên môn</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {consultant.specialties.map((spec, idx) => (
                      <Badge key={idx} className="bg-blue-500 text-white px-3 py-1">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-8 w-full">
                  <h4 className="text-lg font-semibold text-black mb-3">Ngôn ngữ</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {consultant.languages.map((lang, idx) => (
                      <Badge key={idx} className="bg-blue-500 text-white px-3 py-1">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-center space-x-3 text-gray-600">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>{consultant.phone}</span>
                    <a href={consultant.zalo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                      Zalo
                    </a>
                    <a href={consultant.fanpage} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                      Fanpage
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>{consultant.location}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-[#F6F7F7] border-none shadow-xl rounded-xl">
            <CardContent className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-black font-semibold">Hỗ trợ 24/7</h4>
                  <p className="text-gray-500 text-sm">Tận tâm mọi lúc</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-black font-semibold">Dịch vụ cao cấp</h4>
                  <p className="text-gray-500 text-sm">Trải nghiệm độc quyền</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-black font-semibold">Chất lượng vượt trội</h4>
                  <p className="text-gray-500 text-sm">Đẳng cấp quốc tế</p>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Liên Hệ Ngay
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}