import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Profile } from "@/config/globalconfig";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast"; // Thêm dòng này

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast(); // Thêm dòng này

  const handleClick = async () => {
    try {
      await emailjs.send(
        "service_06llyup",
        "template_rqoj8cj",
        { from_name: name, phone },
        "VY8SLpepauLuTGjVF"
      );
      toast({
        title: "Gửi thành công!",
        description: "Thông tin đã được gửi thành công. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      }); // Sử dụng toast thay alert
      setName("");
      setPhone("");
    } catch (error) {
      toast({
        title: "Gửi thất bại!",
        description: "Vui lòng thử lại sau.",
        variant: "destructive",
      }); // Sử dụng toast thay alert
    }
  };

  return (
    <div className="relative">
      {/* Background hình ảnh */}
      <div className="absolute inset-0">
        <img
          src="../../public/back-form.png"
          alt="VinFast background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Nội dung */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Bên trái: Tiêu đề và hotline */}
        <div className="lg:w-1/2 text-white text-center lg:text-left ml-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bạn quan tâm đến một chiếc xe VinFast?
          </h2>
          <p className="text-lg text-gray-200 mb-2 italic">
            Yêu cầu báo giá, đăng ký lái thử trải nghiệm và các dịch vụ VinFast.
          </p>
          <p className="text-lg text-gray-200 italic">
            Nếu bạn muốn ai đó trực tiếp giúp bạn, hãy gọi{" "}
            <span className="text-red-500 font-semibold">
              <a
                href={`tel:${Profile.phone}`}
                className="hover:text-red-600 rounded-full shadow-lg"
              >
                HOTLINE: {Profile.phone}</a>
            </span>
          </p>
        </div>

        {/* Bên phải: Form nhập thông tin */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3 w-full mt-8 lg:mt-0 mr-5"
        >
          <div className="flex flex-col space-y-6">
            <input
              type="text"
              placeholder="Họ và tên"
              value={name}
              onChange={e => setName(e.target.value)}
              className="bg-transparent border-b border-white text-white placeholder-white/70 focus:outline-none focus:border-blue-500 py-2"
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="bg-transparent border-b border-white text-white placeholder-white/70 focus:outline-none focus:border-blue-500 py-2"
            />
            <Button
              onClick={handleClick}
              className="self-end bg-transparent border border-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors"
            >
              Đăng ký
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
