import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  MessageCircleMore,
  CircleChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function isValidPhone(phone: string) {
  // Số Việt Nam: bắt đầu bằng 0, 10 số, chỉ số
  return /^0\d{9}$/.test(phone);
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  // List danh sách
  const [formData, setFormData] = useState({ type: "" });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Nút ScrollToTop
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!isValidPhone(phone)) {
      toast({
        title: "Số điện thoại không hợp lệ!",
        description:
          "Vui lòng nhập đúng số điện thoại Việt Nam (10 số, bắt đầu bằng 0).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Gửi email qua EmailJS
    try {
      await emailjs.send(
        "service_06llyup", // Thay bằng service ID của bạn
        "template_rqoj8cj", // Thay bằng template ID của bạn
        {
          from_name: name,
          phone: phone,
          message: message,
        },
        "VY8SLpepauLuTGjVF" // Thay bằng user ID của bạn
      );
      toast({
        title: "Gửi thành công!",
        description:
          "Thông tin đã được gửi thành công. Em Phúc Vinfast sẽ liên hệ anh/chị trong thời gian sớm nhất ạ.",
      });
      setIsOpen(false);
      setName("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Gửi thất bại!",
        description: "Vui lòng thử lại sau.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-20 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="h-14 w-14 p-1 rounded-full shadow-lg bg-gradient-primary  bg-blue-500"
        >
          <MessageCircleMore className="h-7 w-7" />
        </Button>
      </motion.div>

      {/* Chat Dialog */}
      <div className="">
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="lg:max-w-5xl md:max-w-xl sm:max-w-xs bg-white p-6 rounded-lg relative flex justify-center items-center">
            <div className="grid lg:grid-cols-3 lg:gap-6 md:gap-2">
              <div className="col-span-2 lg:col-span-2 sm:col-span-1">
                <img
                  src="Vf3_Dia.jpg" // Thay bằng đường dẫn đầy đủ nếu cần
                  alt="Tư vấn hình ảnh"
                  className="w-full lg:h-full md:h-40 object-contain rounded-md hidden md:block"
                />
              </div>
              <div className="col-span-1">
                <div className="flex items-center justify-center space-x-2 mb-4 ">
                  {/* <MessageCircle className="h-5 w-5 text-primary" /> */}
                  <div className="flex flex-col text-center content-center items-center text-xl text-blue-700 font-black md:flex-row md:block">
                    <span className="block">Yêu cầu</span>
                    <span className="block">Báo giá và lái xe thử</span>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="lg:flex-col md:flex flex-row gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="chat-name">Họ và tên</Label>
                      <Input
                        id="chat-name"
                        placeholder="Nhập họ và tên của bạn"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Loại xe</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) =>
                          handleInputChange("type", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn loại xe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vf3">VINFAST VF3</SelectItem>
                          <SelectItem value="vf5">VINFAST VF5</SelectItem>
                          <SelectItem value="vf6">VINFAST VF6</SelectItem>
                          <SelectItem value="vf7">VINFAST VF7</SelectItem>
                          <SelectItem value="vf8">VINFAST VF8</SelectItem>
                          <SelectItem value="vf9">VINFAST VF9</SelectItem>
                          <SelectItem value="minio-green">
                            VINFAST MINIO GREEN
                          </SelectItem>
                          <SelectItem value="herio-green">
                            VINFAST HERIO GREEN
                          </SelectItem>
                          <SelectItem value="nerio-green">
                            VINFAST NERIO GREEN
                          </SelectItem>
                          <SelectItem value="limo-green">
                            VINFAST LIMO GREEN
                          </SelectItem>
                          <SelectItem value="ec-van">VINFAST EC VAN</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="chat-message">Tin nhắn</Label>
                      <Textarea
                        id="chat-message"
                        placeholder="Bạn cần hỗ trợ gì?"
                        rows={3}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="eco-button px-8 py-6 text-lg md:px-5 md:py-4"
                    >
                      {isSubmitting ? (
                        "Đang gửi..."
                      ) : (
                        <>
                          <Send className="h-8 w-8" />
                          Gửi
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 sm:top-1 sm:right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
