// Used to showcase featured cars on the homepage
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
        name: "Vàng",
        code: "vang",
        hex: "#FFD700",
        image: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwece0922b/reserves/VF3/vf3section-5-mb.jpg"
      },
      {
        name: "Xanh rêu",
        code: "xanh-reu",
        hex: "#4B6F3F",
        image: "https://vinfast-vn.vn/wp-content/uploads/2024/05/VinFast-VF3-mau-xanh-reu.jpg"
      },
      {
        name: "Xanh lơ Cyan",
        code: "xanh-lo-cyan",
        hex: "#57AEC6",
        image: "https://vinfast-vn.vn/wp-content/uploads/2024/05/VinFast-VF3-mau-xanh-lo-Cyan.jpg"
      },
      {
        name: "Xanh dương",
        code: "xanh-duong",
        hex: "#3659B7",
        image: "https://vinfast-vn.vn/wp-content/uploads/2024/05/VinFast-VF3-mau-xanh-duong.jpg"
      },
      {
        name: "Xanh bộ đội",
        code: "xanh-bo-doi",
        hex: "#4F554A",
        image: "https://vinfast-vn.vn/wp-content/uploads/2024/05/VinFast-VF3-mau-xanh-bo-doi.jpg"
      },
      {
        name: "Xám",
        code: "xam",
        hex: "#8E8E8E",
        image: "https://vinfast-vn.vn/wp-content/uploads/2024/05/VinFast-VF3-mau-xam.jpg"
      }
    ],
    specs: [
      { label: "Phạm vi", value: "215 km" },
      { label: "Tăng tốc", value: "0-50km/h: 5.3s" },
      { label: "Sạc nhanh", value: "36 phút (10-70%)" },
      { label: "Động cơ", value: "32 kW / 43.5 HP" }
    ]
  },
  {
    id: "vf5",
    name: "VinFast VF5",
    tagline: "SUV điện đa năng",
    description: "Không gian rộng rãi, khả năng vận hành mạnh mẽ, phù hợp cho gia đình và du lịch.",
    basePrice: "529.000.000",
    colors: [
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vinfast-vf5-white.png"
      },
      {
        name: "Cam",
        code: "cam",
        hex: "#A46322",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vinfast-vf5-orange.png"
      },
      {
        name: "Cam trắng",
        code: "cam-trang",
        hex: "#A46322",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vinfast-vf5-orange-white.png"
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#67100C",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vinfast-vf5-red.png"
      },
      {
        name: "Đỏ trắng",
        code: "do-trang",
        hex: "#67100C",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vinfast-vf5-red-white.png"
      },
      {
        name: "Xanh",
        code: "xanh",
        hex: "#19244A",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vinfast-vf5-blue.png"
      },
      {
        name: "Xanh trắng",
        code: "xanh-trang",
        hex: "#19244A",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vinfast-vf5-blue-white.png"
      },
      {
        name: "Xám",
        code: "xam",
        hex: "#292929",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vinfast-vf5-grey.png"
      },
      {
        name: "Xám trắng",
        code: "xam-trang",
        hex: "#292929",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vinfast-vf5-grey-white.png"
      },
    ],
    specs: [
      { label: "Phạm vi", value: "326 km" },
      { label: "Tăng tốc", value: "0-100km/h: 9.9s" },
      { label: "Sạc nhanh", value: "31 phút (10-70%)" },
      { label: "Động cơ", value: "100 kW / 134 HP" }
    ]
  },
  {
    id: "vf7",
    name: "VinFast VF7",
    tagline: "SUV cao cấp thông minh",
    description: "Thiết kế sang trọng, công nghệ ADAS tiên tiến, trải nghiệm lái xe đẳng cấp.",
    basePrice: "799.000.000",
    colors: [
      {
        name: "Xanh lá",
        code: "xanh-la",
        hex: "#4E6E5D",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vinfast-vf7-6.png"
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#C23234",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vf7-red.png"
      },
      {
        name: "Xanh dương",
        code: "xanh-duong",
        hex: "#3467CA",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vf7-blue.png"
      },
      {
        name: "Trắng",
        code: "trang",
        hex: "#EEEFF3",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vf7-white.png"
      },
      {
        name: "Xám",
        code: "xam",
        hex: "#A7A7B0",
        image: "https://vinfast-vn.vn/wp-content/uploads/2023/10/vf7-silver.png"
      },
    ],
    specs: [
      { label: "Phạm vi", value: "450 km" },
      { label: "Tăng tốc", value: "0-100km/h: 6.8s" },
      { label: "Sạc nhanh", value: "31 phút (10-70%)" },
      { label: "Động cơ", value: "150 kW / 201 HP" }
    ]
  }
]