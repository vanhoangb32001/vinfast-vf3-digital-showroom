import { motion } from "framer-motion"
import { useState } from "react"
import {
  Car,
  Palette,
  CreditCard,
  CheckCircle,
  Loader2,
  Battery,
  Shield,
  Zap,
  HandCoins,
  Landmark
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

const colorOptions = [
  { value: "summer-yellow", label: "Summer Yellow", color: "#FFD700" },
  { value: "rose-pink", label: "Rose Pink", color: "#FFB6C1" },
  { value: "zenith-grey", label: "Zenith Grey", color: "#708090" },
  { value: "crimson-red", label: "Crimson Red", color: "#DC143C" },
  { value: "sky-blue", label: "Sky Blue", color: "#87CEEB" },
  { value: "urban-mint", label: "Urban Mint", color: "#98FB98" },
  { value: "infinity-blanc", label: "Infinity Blanc", color: "#FFFFFF" },
  { value: "iris-berry", label: "Iris Berry", color: "#8A2BE2" },
  { value: "electric-blue", label: "Electric Blue", color: "#0080FF" }
]

const faqData = [
  {
    question: "Quãng đường thực tế của VF3 là bao nhiêu?",
    answer: "VinFast VF3 có quãng đường hoạt động lên đến 215km theo tiêu chuẩn NEDC/WLTP. Quãng đường thực tế có thể thay đổi tùy thuộc vào điều kiện lái xe, địa hình, thời tiết và thói quen sử dụng."
  },
  {
    question: "Chính sách bảo hành pin như thế nào?",
    answer: "Pin của VF3 được bảo hành 8 năm không giới hạn số kilomet khi mua pin. Đối với tùy chọn thuê pin, khách hàng sẽ có chính sách bảo trì và thay thế pin theo hợp đồng thuê."
  },
  {
    question: "VF3 có tính năng ADAS nào?",
    answer: "VF3 được trang bị các tính năng an toàn cơ bản như ABS, TCS, HSA, EBD, cảm biến lùi và camera sau. Tuy nhiên, các tính năng ADAS nâng cao như giữ làn đường hay phanh khẩn cấp tự động chưa có sẵn."
  },
  {
    question: "Thời gian giao xe dự kiến?",
    answer: "Thời gian giao xe dự kiến khoảng 2 tuần sau khi đặt cọc, tùy thuộc vào màu sắc và cấu hình được chọn. VinFast sẽ thông báo chính xác thời gian giao xe sau khi xác nhận đơn hàng."
  }
]

interface FormData {
  fullName: string
  email: string
  phone: string
  variant: string
  color: string
  batteryOption: string
  message: string
  agreeTerms: boolean
}

export default function DatCoc() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    variant: "",
    color: "",
    batteryOption: "",
    message: "",
    agreeTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculatePrice = () => {
    const basePrice = 299000000 // 299 triệu
    const variantPrice = formData.variant === "plus" ? 20000000 : 0 // Plus thêm 20 triệu
    const batteryPrice = formData.batteryOption === "buy" ? 0 : -50000000 // Thuê pin giảm 50 triệu
    return basePrice + variantPrice + batteryPrice
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)

    toast({
      title: "Đặt cọc thành công!",
      description: "Cảm ơn bạn đã đặt cọc VinFast VF3. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
    })

    setIsSubmitting(false)
  }

  const selectedColor = colorOptions.find(color => color.value === formData.color)

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Đặt cọc VinFast VF3/VF5
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl mx-auto">
              Đặt cọc ngay hôm nay để nhận ưu đãi đặc biệt và là người đầu tiên sở hữu VF3/VF5
            </p>
            <div className="mt-8">
              <Badge className="bg-white/20 border-white/30 text-white text-lg px-4 py-2">
                🎉 Ưu đãi: Tặng 2 năm bảo hiểm vật chất đến 30/09/2025
              </Badge>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Car className="mr-2 h-6 w-6 text-primary" />
                  Thông tin đặt cọc
                </CardTitle>
                <CardDescription>
                  Vui lòng điền đầy đủ thông tin để hoàn tất việc đặt cọc VF3/VF5
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Họ và tên</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Nhập họ và tên đầy đủ"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Nhập số điện thoại"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Nhập địa chỉ email"
                      required
                    />
                  </div>

                  {/* Vehicle Configuration */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="variant">Loại xe</Label>
                      <Select value={formData.variant} onValueChange={(value) => handleInputChange("variant", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn loại xe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eco">VF3</SelectItem>
                          <SelectItem value="plus">VF5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="color">Màu sắc</Label>
                      <Select value={formData.color} onValueChange={(value) => handleInputChange("color", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn màu sắc" />
                        </SelectTrigger>
                        <SelectContent>
                          {colorOptions.map((color) => (
                            <SelectItem key={color.value} value={color.value}>
                              <div className="flex items-center space-x-2">
                                <div
                                  className="w-4 h-4 rounded-full border"
                                  style={{ backgroundColor: color.color }}
                                ></div>
                                <span>{color.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Tin nhắn</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Để lại lời nhắn hoặc yêu cầu đặc biệt (tùy chọn)"
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full hero-button"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Đang xử lý...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Xác nhận đặt cọc
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Summary Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Price Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="mr-2 h-6 w-6 text-primary" />
                  Tóm tắt đơn hàng
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.variant && (
                  <div className="flex justify-between">
                    <span>Loại xe:</span>
                    <span className="font-medium">
                      {formData.variant === "vf3" ? "VF3" : "VF5"}
                    </span>
                  </div>
                )}

                {selectedColor && (
                  <div className="flex justify-between items-center">
                    <span>Màu sắc:</span>
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: selectedColor.color }}
                      ></div>
                      <span className="font-medium">{selectedColor.label}</span>
                    </div>
                  </div>
                )}

                {formData.variant && formData.batteryOption && (
                  <>
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Giá ước tính:</span>
                      <span className="text-primary">
                        {calculatePrice().toLocaleString('vi-VN')} VNĐ
                      </span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Quyền lợi khi đặt cọc</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">Bảo hành chính hãng toàn diện lên đến 8 năm</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm">Hỗ trợ sạc miễn phí 2 năm (30/06/2027)</span>
                </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-primary" />
                    <span className="text-sm">Sẵn xe - Đủ màu - Giao ngay</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HandCoins className="h-5 w-5 text-primary" />
                    <span className="text-sm">Hỗ trợ lãi suất 3% trong 3 năm đầu</span>
                  </div>
                <div className="flex items-center space-x-2">
                  <Landmark className="h-5 w-5 text-primary" />
                  <span className="text-sm">Hỗ trợ vay ngân hàng lên đến 90%</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section variants={itemVariants} className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Câu hỏi thường gặp
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tìm hiểu thêm về VinFast VF3 và quy trình đặt cọc
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="px-6">
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  )
}