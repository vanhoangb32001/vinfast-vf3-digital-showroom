export interface CarColor {
  name: string
  code: string
  hex: string
  image: string
}

export interface CarSpec {
  label: string
  value: string
  icon?: string
}

export interface FeaturedCar {
  id: string
  name: string
  tagline: string
  description: string
  basePrice: string
  isNew?: boolean
  colors: CarColor[]
  specs: CarSpec[]
}

export const featuredCars: FeaturedCar[] = [
  {
    id: "vf3",
    name: "VinFast VF3",
    tagline: "Xe điện nhỏ gọn thông minh",
    description: "Thiết kế tối giản, phù hợp đô thị, công nghệ hiện đại với chi phí vận hành tiết kiệm.",
    basePrice: "299.000.000",
    isNew: true,
    colors: [
      {
        name: "Summer Yellow",
        code: "yellow",
        hex: "#FFD700",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&h=600&fit=crop"
      },
      {
        name: "Zenith Grey",
        code: "grey",
        hex: "#708090",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=600&fit=crop"
      },
      {
        name: "Sky Blue",
        code: "blue",
        hex: "#87CEEB",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&h=600&fit=crop"
      },
      {
        name: "Crimson Red",
        code: "red",
        hex: "#DC143C",
        image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200&h=600&fit=crop"
      },
      {
        name: "Infinity Blanc",
        code: "white",
        hex: "#FFFFFF",
        image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1200&h=600&fit=crop"
      }
    ],
    specs: [
      { label: "Phạm vi", value: "215 km" },
      { label: "Tăng tốc", value: "0-50km/h: 5.3s" },
      { label: "Sạc nhanh", value: "36 phút (10-70%)" },
      { label: "Động cơ", value: "32 kW / 43.5 PS" }
    ]
  },
  {
    id: "vf5",
    name: "VinFast VF5",
    tagline: "SUV điện đa năng",
    description: "Không gian rộng rãi, khả năng vận hành mạnh mẽ, phù hợp cho gia đình và du lịch.",
    basePrice: "468.000.000",
    colors: [
      {
        name: "Pearl White",
        code: "white",
        hex: "#F8F8FF",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=600&fit=crop"
      },
      {
        name: "Midnight Black",
        code: "black",
        hex: "#2F2F2F",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&h=600&fit=crop"
      },
      {
        name: "Ocean Blue",
        code: "blue",
        hex: "#4682B4",
        image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=1200&h=600&fit=crop"
      }
    ],
    specs: [
      { label: "Phạm vi", value: "326 km" },
      { label: "Tăng tốc", value: "0-100km/h: 9.9s" },
      { label: "Sạc nhanh", value: "31 phút (10-70%)" },
      { label: "Động cơ", value: "100 kW / 134 PS" }
    ]
  },
  {
    id: "vf7",
    name: "VinFast VF7",
    tagline: "SUV cao cấp thông minh",
    description: "Thiết kế sang trọng, công nghệ ADAS tiên tiến, trải nghiệm lái xe đẳng cấp.",
    basePrice: "850.000.000",
    colors: [
      {
        name: "Platinum Silver",
        code: "silver",
        hex: "#C0C0C0",
        image: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200&h=600&fit=crop"
      },
      {
        name: "Deep Black",
        code: "black",
        hex: "#1C1C1C",
        image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1200&h=600&fit=crop"
      },
      {
        name: "Royal Blue",
        code: "blue",
        hex: "#4169E1",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=600&fit=crop"
      }
    ],
    specs: [
      { label: "Phạm vi", value: "450 km" },
      { label: "Tăng tốc", value: "0-100km/h: 6.8s" },
      { label: "Sạc nhanh", value: "31 phút (10-70%)" },
      { label: "Động cơ", value: "150 kW / 201 PS" }
    ]
  }
]