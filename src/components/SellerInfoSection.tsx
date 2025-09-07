import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Star, Shield, Award, Calendar, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface ConsultantProfile {
  id: string;
  name: string;
  title: string;
  experience: string;
  rating: number;
  reviews: number;
  phone: string;
  email: string;
  location: string;
  avatar: string;
  bio: string;
  specialties: string[];
  languages: string[];
}

const consultants: ConsultantProfile[] = [
  {
    id: "1",
    name: "Nguyễn Minh Châu",
    title: "Cố vấn Ô tô Cấp cao",
    experience: "12+ năm kinh nghiệm",
    rating: 4.9,
    reviews: 347,
    phone: "0988 123 456",
    email: "minh.chau@vinfast.vn", 
    location: "Showroom VinFast Hai Bà Trưng, Hà Nội",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Chuyên gia hàng đầu về xe điện cao cấp với kinh nghiệm quốc tế tại Mercedes-Benz và BMW. Tận tâm phục vụ khách hàng VIP với dịch vụ cá nhân hóa hoàn hảo.",
    specialties: ["Xe điện cao cấp", "Tư vấn tài chính", "Dịch vụ VIP"],
    languages: ["Tiếng Việt", "English", "日本語"]
  },
  {
    id: "2", 
    name: "Trần Thùy Linh",
    title: "Chuyên gia Tư vấn Luxury",
    experience: "8+ năm kinh nghiệm",
    rating: 4.8,
    reviews: 289,
    phone: "0977 234 567",
    email: "thuy.linh@vinfast.vn",
    location: "Showroom VinFast Đống Đa, Hà Nội", 
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
    bio: "Chuyên gia tư vấn xe sang trọng với background tại Audi và Lexus. Hiểu sâu nhu cầu khách hàng doanh nhân và gia đình thượng lưu, mang đến trải nghiệm mua sắm đẳng cấp.",
    specialties: ["Xe gia đình cao cấp", "Customization", "After-sales Service"],
    languages: ["Tiếng Việt", "English", "Français"]
  },
  {
    id: "3",
    name: "Lê Hoàng Nam",
    title: "Senior Automotive Consultant", 
    experience: "10+ năm kinh nghiệm",
    rating: 4.9,
    reviews: 412,
    phone: "0966 345 678",
    email: "hoang.nam@vinfast.vn",
    location: "Showroom VinFast Cầu Giấy, Hà Nội",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", 
    bio: "Cựu chuyên gia của Tesla và Porsche, chuyên sâu về công nghệ xe điện thông minh. Cam kết mang đến giải pháp di chuyển bền vững và hiệu quả nhất cho khách hàng.",
    specialties: ["Công nghệ EV", "Smart Features", "Performance"],
    languages: ["Tiếng Việt", "English", "Deutsch"]
  }
];

export function SellerInfoSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-luxury-obsidian via-luxury-charcoal to-luxury-navy overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-luxury-silver rounded-full blur-3xl" />
      </div>
      
      {/* Subtle Car Silhouette */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-t from-luxury-platinum/10 to-transparent" 
             style={{ clipPath: 'polygon(20% 100%, 25% 60%, 35% 40%, 65% 40%, 75% 60%, 80% 100%)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.h2 
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-luxury-platinum mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Gặp Gỡ Chuyên Gia 
            <span className="block text-transparent bg-gradient-to-r from-luxury-gold to-luxury-silver bg-clip-text">
              Tư Vấn Của Chúng Tôi
            </span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-luxury-gold to-luxury-silver mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p 
            className="text-lg lg:text-xl text-luxury-silver max-w-4xl mx-auto font-montserrat font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Đội ngũ chuyên gia tư vấn cao cấp với kinh nghiệm quốc tế, tận tâm mang đến trải nghiệm 
            mua sắm xe hạng sang đẳng cấp thế giới cho khách hàng VinFast
          </motion.p>
        </motion.div>

        {/* Consultant Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {consultants.map((consultant, index) => (
            <motion.div
              key={consultant.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-luxury-charcoal/80 to-luxury-navy/60 backdrop-blur-xl border border-luxury-silver/20 shadow-2xl hover:shadow-luxury-gold/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  {/* Profile Header with Avatar */}
                  <div className="relative p-8 pb-6">
                    <div className="flex flex-col items-center text-center">
                      {/* Premium Avatar */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-luxury-silver rounded-full p-1">
                          <div className="bg-luxury-obsidian rounded-full p-1">
                            <Avatar className="w-24 h-24 ring-4 ring-luxury-platinum/20">
                              <AvatarImage 
                                src={consultant.avatar} 
                                alt={consultant.name}
                                className="object-cover"
                              />
                              <AvatarFallback className="bg-luxury-navy text-luxury-platinum text-2xl font-bold">
                                {consultant.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                        
                        {/* Verification Badge */}
                        <Badge className="absolute -top-2 -right-2 bg-luxury-gold/90 text-luxury-obsidian border-0 px-2 py-1">
                          <Shield className="w-3 h-3 mr-1" />
                          Certified
                        </Badge>
                      </div>

                      {/* Name and Title */}
                      <h3 className="font-playfair text-2xl font-bold text-luxury-platinum mb-2">
                        {consultant.name}
                      </h3>
                      <p className="text-luxury-gold font-montserrat font-medium italic mb-3">
                        {consultant.title}
                      </p>
                      <Badge className="bg-luxury-navy/50 text-luxury-silver border border-luxury-silver/30 mb-4">
                        {consultant.experience}
                      </Badge>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-4 h-4 ${star <= Math.round(consultant.rating) ? 'text-luxury-gold fill-current' : 'text-luxury-silver/30'}`} 
                            />
                          ))}
                        </div>
                        <span className="font-bold text-luxury-platinum">{consultant.rating}</span>
                        <span className="text-luxury-silver text-sm">({consultant.reviews})</span>
                      </div>
                    </div>

                    <Separator className="bg-luxury-silver/20 my-6" />

                    {/* Bio */}
                    <p className="text-luxury-silver text-sm leading-relaxed font-montserrat font-light mb-6 text-center">
                      {consultant.bio}
                    </p>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="text-luxury-platinum font-montserrat font-semibold text-sm mb-3 flex items-center justify-center gap-2">
                        <Award className="w-4 h-4 text-luxury-gold" />
                        Chuyên môn
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {consultant.specialties.map((specialty, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline" 
                            className="bg-luxury-gold/10 border-luxury-gold/30 text-luxury-gold text-xs font-montserrat"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-8">
                      <h4 className="text-luxury-platinum font-montserrat font-semibold text-sm mb-3 text-center">
                        Ngôn ngữ
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {consultant.languages.map((language, idx) => (
                          <Badge 
                            key={idx}
                            className="bg-luxury-silver/10 text-luxury-silver border border-luxury-silver/30 text-xs font-montserrat"
                          >
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="space-y-3">
                      <a href={`tel:${consultant.phone.replace(/\s/g, '')}`}>
                        <Button 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold/80 text-luxury-obsidian font-montserrat font-bold hover:from-luxury-gold/90 hover:to-luxury-gold/70 transition-all duration-300 shadow-lg hover:shadow-luxury-gold/20 group"
                        >
                          <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                          Gọi Ngay
                          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                      
                      <a href={`mailto:${consultant.email}`}>
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full border-luxury-silver/30 text-luxury-silver hover:bg-luxury-silver/10 font-montserrat font-medium hover:border-luxury-silver/50 transition-all duration-300 group"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Đặt Lịch Tư Vấn
                          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    </div>

                    {/* Contact Details */}
                    <div className="mt-6 pt-6 border-t border-luxury-silver/20">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3 text-luxury-silver">
                          <Phone className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                          <span className="font-montserrat">{consultant.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-luxury-silver">
                          <Mail className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                          <span className="font-montserrat break-all">{consultant.email}</span>
                        </div>
                        <div className="flex items-start gap-3 text-luxury-silver">
                          <MapPin className="w-4 h-4 text-luxury-gold flex-shrink-0 mt-0.5" />
                          <span className="font-montserrat text-xs leading-relaxed">{consultant.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Luxury CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-luxury-gold/10 to-luxury-silver/10 border border-luxury-gold/30 backdrop-blur-xl">
            <CardContent className="p-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-silver flex items-center justify-center">
                  <Shield className="w-6 h-6 text-luxury-obsidian" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-luxury-platinum">
                  Cam Kết Dịch Vụ Luxury
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h4 className="font-montserrat font-semibold text-luxury-platinum mb-2">Tư vấn 24/7</h4>
                  <p className="text-luxury-silver text-sm">Hỗ trợ tận tâm mọi lúc</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h4 className="font-montserrat font-semibold text-luxury-platinum mb-2">Dịch vụ VIP</h4>
                  <p className="text-luxury-silver text-sm">Trải nghiệm cá nhân hóa</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h4 className="font-montserrat font-semibold text-luxury-platinum mb-2">Chất lượng đỉnh cao</h4>
                  <p className="text-luxury-silver text-sm">Tiêu chuẩn quốc tế</p>
                </div>
              </div>

              <p className="text-luxury-silver font-montserrat mb-8 leading-relaxed">
                Đội ngũ chuyên gia của chúng tôi không chỉ bán xe - chúng tôi tạo nên trải nghiệm mua sắm đẳng cấp, 
                từ tư vấn chuyên sâu đến dịch vụ hậu mãi hoàn hảo.
              </p>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-luxury-gold to-luxury-gold/90 text-luxury-obsidian font-montserrat font-bold px-12 py-4 hover:from-luxury-gold/90 hover:to-luxury-gold/80 transition-all duration-300 shadow-lg hover:shadow-luxury-gold/30 group"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                Kết Nối Với Chuyên Gia Ngay
                <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}