import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import emailjs from "emailjs-com"

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Gửi email qua EmailJS
    try {
      await emailjs.send(
        "service_06llyup",      // Thay bằng service ID của bạn
        "template_rqoj8cj",     // Thay bằng template ID của bạn
        {
          from_name: name,
          phone: phone,
          message: message,
        },
        "VY8SLpepauLuTGjVF"          // Thay bằng user ID của bạn
      )
      toast({
        title: "Gửi thành công!",
        description: "Thông tin đã được gửi đến chủ page.",
      })
      setIsOpen(false)
      setName("")
      setPhone("")
      setMessage("")
    } catch (error) {
      toast({
        title: "Gửi thất bại!",
        description: "Vui lòng thử lại sau.",
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-gradient-primary hover:shadow-xl transition-all duration-300 bg-blue-500"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span>Hỗ trợ nhanh</span>
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="chat-name">Họ và tên</Label>
              <Input
                id="chat-name"
                placeholder="Nhập họ và tên của bạn"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="chat-phone">Số điện thoại</Label>
              <Input
                id="chat-phone"
                type="tel"
                placeholder="Nhập số điện thoại"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="chat-message">Tin nhắn</Label>
              <Textarea
                id="chat-message"
                placeholder="Bạn cần hỗ trợ gì?"
                rows={3}
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>

            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Hủy
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="eco-button"
              >
                {isSubmitting ? "Đang gửi..." : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Gửi
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}