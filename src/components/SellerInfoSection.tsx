import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Star, Shield, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import QRCode from "qrcode.react"

export function SellerInfoSection() {
  const sellerData = {
    name: "Nguyễn Văn Minh",
    title: "Chuyên viên tư vấn VinFast",
    experience: "5+ năm kinh nghiệm",
    rating: 4.9,
    reviews: 247,
    phone: "0988 123 456",
    email: "minh.nguyen@vinfast.vn",
    location: "Showroom VinFast Thái Hà, Hà Nội",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    achievements: ["Tư vấn viên xuất sắc 2023", "Top Sales Q4 2023", "Chứng chỉ VinFast Professional"],
    workingHours: "8:00 - 18:00 (T2-T7)"
  }

  const qrCodeData = `BEGIN:VCARD
VERSION:3.0
FN:${sellerData.name}
ORG:VinFast
TEL:${sellerData.phone}
EMAIL:${sellerData.email}
END:VCARD`

  const telHref = `tel:${sellerData.phone.replace(/\s/g, '')}`
  const mailHref = `mailto:${sellerData.email}`


  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-secondary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4"
          >
            Thông Tin Tư Vấn Viên
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Đội ngũ chuyên gia tư vấn chuyên nghiệp, sẵn sàng hỗ trợ bạn tìm hiểu và lựa chọn xe VinFast phù hợp nhất
          </motion.p>
        </div>

        {/* Seller Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden bg-gradient-to-br from-card to-card/80 backdrop-blur-xl shadow-2xl border-0 ring-1 ring-white/10">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 pb-6">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                {/* Avatar and basic info */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <Avatar className="w-24 h-24 lg:w-32 lg:h-32 ring-4 ring-white/20 shadow-xl mb-4">
                    <AvatarImage src={sellerData.avatar} alt={sellerData.name} />
                    <AvatarFallback className="bg-primary text-white text-2xl font-bold">
                      {sellerData.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-2">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-primary flex items-center gap-2">
                      {sellerData.name}
                      <Badge className="bg-primary/10 text-primary border-primary/20 flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5" /> Đã xác thực
                      </Badge>
                    </CardTitle>
                    <p className="text-lg font-medium text-muted-foreground">
                      {sellerData.title}
                    </p>
                    <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                      {sellerData.experience}
                    </Badge>
                  </div>
                </div>

                {/* Rating and achievements */}
                <div className="flex-1 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-5 h-5 ${star <= Math.round(sellerData.rating) ? 'text-primary fill-current' : 'text-muted-foreground/40'}`} 
                        />
                      ))}
                    </div>
                    <span className="font-bold text-lg">{sellerData.rating}</span>
                    <span className="text-muted-foreground">({sellerData.reviews} đánh giá)</span>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Thành tích nổi bật
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {sellerData.achievements.map((achievement, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="bg-accent/10 border-accent/30 text-accent-foreground text-xs"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="text-center p-4 bg-card/80 rounded-xl shadow-lg ring-1 ring-border">
                  <div className="inline-block rounded-lg p-2 bg-background">
                    <QRCode value={qrCodeData} size={136} level="H" includeMargin={false} />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium mt-2">Quét để lưu liên hệ</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 lg:p-8">
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-2xl font-extrabold text-primary">1.200+</p>
                  <p className="text-xs text-muted-foreground">Khách hàng phục vụ</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-2xl font-extrabold text-primary">650+</p>
                  <p className="text-xs text-muted-foreground">Xe bàn giao</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-2xl font-extrabold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground">Hài lòng</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Thông tin liên hệ
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{sellerData.phone}</p>
                        <p className="text-sm text-muted-foreground">Hotline tư vấn</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{sellerData.email}</p>
                        <p className="text-sm text-muted-foreground">Email chính thức</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{sellerData.location}</p>
                        <p className="text-sm text-muted-foreground">Địa chỉ showroom</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{sellerData.workingHours}</p>
                        <p className="text-sm text-muted-foreground">Giờ làm việc</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Hỗ trợ khách hàng
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                      <h4 className="font-semibold mb-2">Cam kết dịch vụ</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Tư vấn miễn phí và chuyên nghiệp</li>
                        <li>• Hỗ trợ lái thử tận nơi</li>
                        <li>• Báo giá tốt nhất thị trường</li>
                        <li>• Hỗ trợ thủ tục vay ngân hàng</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <a href={telHref} className="block">
                        <Button 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 font-bold py-4 shadow-lg"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Gọi ngay để tư vấn
                        </Button>
                      </a>
                      
                      <a href={mailHref} className="block">
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full border-primary/30 text-primary hover:bg-primary/10 font-semibold py-4"
                        >
                          <Mail className="w-5 h-5 mr-2" />
                          Gửi email liên hệ
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}