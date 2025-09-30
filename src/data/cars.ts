// Not used in the app, but kept for reference and future use
export interface CarData {
  id: string
  name: string
  variant: "Eco" | "Plus" | "Standard" | "Premium" | "Commercial"
  price: string
  priceFrom?: string
  image: string
  colorName?: string
  category: "electric" | "green" | "commercial"
  type: "passenger" | "suv" | "commercial" | "bus"
  description: string
  keyFeatures: string[]
  specs: {
    range?: string
    seating: string
    engineType: string
  }
}

export const cars: CarData[] = [
  // Electric Vehicle Series (VF Series)
  {
    id: "vf3",
    name: "VinFast VF3",
    variant: "Eco",
    price: "299.000.000 VNĐ",
    priceFrom: "299 triệu VNĐ",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=450&fit=crop",
    colorName: "Summer Yellow",
    category: "electric",
    type: "suv",
    description: "Xe điện nhỏ gọn hoàn hảo cho di chuyển đô thị",
    keyFeatures: ["Phạm vi 215km", "Sạc nhanh 36 phút", "4 chỗ ngồi"],
    specs: { range: "215 km", seating: "4 chỗ", engineType: "Điện 100%" }
  },
  {
    id: "vf5",
    name: "VinFast VF5",
    variant: "Plus",
    price: "549.000.000 VNĐ",
    priceFrom: "549 triệu VNĐ",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=450&fit=crop",
    category: "electric",
    type: "suv",
    description: "SUV điện cỡ B thông minh và tiện nghi",
    keyFeatures: ["Phạm vi 285km", "AWD", "5 chỗ ngồi"],
    specs: { range: "285 km", seating: "5 chỗ", engineType: "Điện 100%" }
  },
  {
    id: "vf6",
    name: "VinFast VF6",
    variant: "Premium",
    price: "765.000.000 VNĐ",
    priceFrom: "765 triệu VNĐ",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=450&fit=crop",
    category: "electric",
    type: "suv",
    description: "SUV điện cỡ C với công nghệ tiên tiến",
    keyFeatures: ["Phạm vi 423km", "ADAS Level 2", "5+2 chỗ"],
    specs: { range: "423 km", seating: "5+2 chỗ", engineType: "Điện 100%" }
  },
  {
    id: "vf7",
    name: "VinFast VF7",
    variant: "Premium",
    price: "999.000.000 VNĐ",
    priceFrom: "999 triệu VNĐ",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&h=450&fit=crop",
    category: "electric",
    type: "suv",
    description: "SUV điện cỡ D sang trọng và mạnh mẽ",
    keyFeatures: ["Phạm vi 450km", "ADAS Level 2+", "7 chỗ"],
    specs: { range: "450 km", seating: "7 chỗ", engineType: "Điện 100%" }
  },
  {
    id: "vf8",
    name: "VinFast VF8",
    variant: "Premium",
    price: "1.231.000.000 VNĐ",
    priceFrom: "1,2 tỷ VNĐ",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&h=450&fit=crop",
    category: "electric",
    type: "suv",
    description: "SUV điện cỡ E cao cấp toàn cầu",
    keyFeatures: ["Phạm vi 471km", "Tự lái Level 2+", "5+2 chỗ"],
    specs: { range: "471 km", seating: "5+2 chỗ", engineType: "Điện 100%" }
  },
  {
    id: "vf9",
    name: "VinFast VF9",
    variant: "Premium",
    price: "1.491.000.000 VNĐ",
    priceFrom: "1,5 tỷ VNĐ",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=450&fit=crop",
    category: "electric",
    type: "suv",
    description: "SUV điện cỡ F đỉnh cao công nghệ",
    keyFeatures: ["Phạm vi 438km", "Tự lái Level 2+", "6+1 chỗ"],
    specs: { range: "438 km", seating: "6+1 chỗ", engineType: "Điện 100%" }
  },

  // Green Vehicle Series
  {
    id: "fadil",
    name: "VinFast Fadil",
    variant: "Standard",
    price: "382.000.000 VNĐ",
    priceFrom: "382 triệu VNĐ",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=450&fit=crop",
    category: "green",
    type: "passenger",
    description: "Sedan hạng A thông minh và tiết kiệm",
    keyFeatures: ["Động cơ 1.4L", "CVT", "5 chỗ ngồi"],
    specs: { seating: "5 chỗ", engineType: "Xăng 1.4L" }
  },

  // Commercial Vehicles
  {
    id: "ec-van",
    name: "VinFast EC Van",
    variant: "Commercial",
    price: "Liên hệ",
    priceFrom: "Liên hệ",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=450&fit=crop",
    category: "commercial",
    type: "commercial",
    description: "Xe tải điện thương mại hiệu quả",
    keyFeatures: ["Tải trọng 1,5 tấn", "Phạm vi 250km", "Sạc nhanh"],
    specs: { range: "250 km", seating: "2 chỗ", engineType: "Điện 100%" }
  },
  {
    id: "ebus",
    name: "VinFast eBus",
    variant: "Commercial",
    price: "Liên hệ",
    priceFrom: "Liên hệ",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=450&fit=crop",
    category: "commercial",
    type: "bus",
    description: "Xe buýt điện thông minh cho giao thông công cộng",
    keyFeatures: ["40 chỗ ngồi", "Phạm vi 300km", "Hệ thống giám sát"],
    specs: { range: "300 km", seating: "40 chỗ", engineType: "Điện 100%" }
  },

  //Vehicles Green
  {
    id: "minio-green",
    name: "Minio Green",
    variant: "Eco",
    price: "450.000.000 VNĐ",
    priceFrom: "Từ 450 triệu VNĐ",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=450&fit=crop",
    category: "electric",
    type: "passenger",
    description: "Xe điện đô thị nhỏ gọn, tiết kiệm",
    keyFeatures: ["Phạm vi 200km", "Sạc nhanh 30 phút 80%", "4 chỗ"],
    specs: {
      range: "200 km",
      seating: "4 chỗ",
      engineType: "Điện 100%"
    }
  },
  {
    id: "herio-green",
    name: "Herio Green",
    variant: "Standard",
    price: "650.000.000 VNĐ",
    priceFrom: "Từ 650 triệu VNĐ",
    image: "https://images.unsplash.com/photo-1616782723896-73dcd4d0bb76?w=800&h=450&fit=crop",
    category: "electric",
    type: "suv",
    description: "Sedan điện thiết kế hiện đại, mạnh mẽ",
    keyFeatures: ["Phạm vi 320km", "Trợ lái Level 2", "5 chỗ"],
    specs: {
      range: "320 km",
      seating: "5 chỗ",
      engineType: "Điện 100%"
    }
  },
  {
    id: "nerio-green",
    name: "Nerio Green",
    variant: "Premium",
    price: "820.000.000 VNĐ",
    priceFrom: "Từ 820 triệu VNĐ",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=450&fit=crop",
    category: "electric",
    type: "suv",
    description: "Xe điện crossover rộng rãi, tiện nghi",
    keyFeatures: ["Phạm vi 400km", "Hệ thống an toàn chủ động", "5+2 chỗ"],
    specs: {
      range: "400 km",
      seating: "5+2 chỗ",
      engineType: "Điện 100%"
    }
  },
  {
    id: "limo-green",
    name: "Limo Green",
    variant: "Commercial",
    price: "1.200.000.000 VNĐ",
    priceFrom: "Từ 1,2 tỷ VNĐ",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=450&fit=crop",
    category: "electric",
    type: "suv",
    description: "Limousine điện sang trọng, đẳng cấp",
    keyFeatures: ["Phạm vi 550km", "Khoang hành khách cao cấp", "6+1 chỗ"],
    specs: {
      range: "550 km",
      seating: "6+1 chỗ",
      engineType: "Điện 100%"
    }
  }
]
