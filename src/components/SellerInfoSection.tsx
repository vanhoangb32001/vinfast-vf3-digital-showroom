import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Shield, Award, Calendar, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Profile } from "@/config/globalconfig";

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
            Chuyên viên Tư Vấn
            <span className="block bg-clip-text bg-gradient-to-r text-blue-600">
              Hàng Đầu Của Chúng Tôi
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Đội ngũ chuyên viên của chúng tôi mang đến trải nghiệm mua sắm xe đẳng cấp với sự tận tâm và chuyên nghiệp.
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
                  <Avatar className="w-32 h-32 ring-4 ring-blue-600/40 hover:ring-blue-600/50 transition-all duration-300">
                    <AvatarImage src="/avatar.jpg" alt={Profile.name} />
                    <AvatarFallback className="bg-gray-700 text-white text-2xl font-bold">
                      {Profile.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Name + Title */}
                <h3 className="text-2xl font-bold text-black mb-2">{Profile.name}</h3>
                <p className="text-blue-500 text-lg mb-4 italic">{Profile.title}</p>

                <Separator className="my-6 bg-gray-600 w-1/2" />

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 w-full">
                  <div className="flex flex-col items-center">
                    <Award className="w-8 h-8 text-blue-400 mb-2" />
                    <span className="text-black font-semibold">{Profile.experience}</span>
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
                    {Profile.specialties.map((spec, idx) => (
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
                    {Profile.languages.map((lang, idx) => (
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
                    <span>{Profile.phone}</span>
                    <a href={Profile.zalo} target="_blank" rel="noopener noreferrer">
                      <img
                        src="/zaloicon.webp"
                        alt="Zalo"
                        className="w-5 h-5"
                      />
                    </a>
                    <a href={Profile.fanpage} target="_blank" rel="noopener noreferrer">
                      <img
                        src="/fb-icon.png"
                        alt="Facebook"
                        className="w-5 h-5"
                      />
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>{Profile.location}</span>
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