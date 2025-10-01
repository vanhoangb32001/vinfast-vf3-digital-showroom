
// Used to showcase featured cars on the homepage
export interface CarColor {
  name: string;
  code: string;
  hex: string;
  image: string;
}

export interface CarSpec {
  label: string;
  value: string;
  icon?: string;
}

export interface FeaturedCar {
  id: string;
  name: string;
  tagline: string;
  description: string;
  basePrice: string;
  isNew?: boolean;
  colors: CarColor[];
  specs: CarSpec[];
}

export const featuredDataCars: FeaturedCar[] = [
  {
    id: "vf3",
    name: "VinFast VF3",
    tagline: "Xe điện nhỏ gọn thông minh",
    description:
      "Thiết kế tối giản, phù hợp đô thị, công nghệ hiện đại với chi phí vận hành tiết kiệm.",
    basePrice: "299.000.000",
    isNew: true,
    colors: [
      {
        name: "Vàng",
        code: "vang",
        hex: "#FFD700",
        image:"/asset/VF/VF3/vf3section.png"
      },
      {
        name: "Xanh rêu",
        code: "xanh-reu",
        hex: "#4B6F3F",
        image:
          "/asset/VF/VF3/VinFast-VF3-mau-xanh-reu.png",
      },
      {
        name: "Xanh lơ Cyan",
        code: "xanh-lo-cyan",
        hex: "#57AEC6",
        image:
          "/asset/VF/VF3/VinFast-VF3-mau-xanh-lo-Cyan.png",
      },
      {
        name: "Xanh dương",
        code: "xanh-duong",
        hex: "#3659B7",
        image:
          "/asset/VF/VF3/VinFast-VF3-mau-xanh-duong.png",
      },
      {
        name: "Xanh bộ đội",
        code: "xanh-bo-doi",
        hex: "#4F554A",
        image:
          "/asset/VF/VF3/VinFast-VF3-mau-xanh-bo-doi.png",
      },
      {
        name: "Xám",
        code: "xam",
        hex: "#8E8E8E",
        image:
          "/asset/VF/VF3/VinFast-VF3-mau-xam.png",
      },
    ],
    specs: [
      { label: "Phạm vi", value: "215 km" },
      { label: "Tăng tốc", value: "0-50km/h: 5.3s" },
      { label: "Sạc nhanh", value: "36 phút (10-70%)" },
      { label: "Động cơ", value: "32 kW / 43.5 HP" },
    ],
  },
  {
    id: "vf5",
    name: "VinFast VF5",
    tagline: "SUV điện đa năng",
    description:
      "Không gian rộng rãi, khả năng vận hành mạnh mẽ, phù hợp cho gia đình và du lịch.",
    basePrice: "529.000.000",
    colors: [
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image:
          "/asset/VF/VF5/vinfast-vf5-white.png",
      },
      {
        name: "Cam",
        code: "cam",
        hex: "#A46322",
        image:
          "/asset/VF/VF5/vinfast-vf5-orange.png",
      },
      {
        name: "Cam trắng",
        code: "cam-trang",
        hex: "#A46322",
        image:
          "/asset/VF/VF5/vinfast-vf5-orange-white.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#67100C",
        image:
          "/asset/VF/VF5/vinfast-vf5-red.png",
      },
      {
        name: "Đỏ trắng",
        code: "do-trang",
        hex: "#67100C",
        image:
          "/asset/VF/VF5/vinfast-vf5-red-white.png",
      },
      {
        name: "Xanh",
        code: "xanh",
        hex: "#19244A",
        image:
          "/asset/VF/VF5/vinfast-vf5-blue.png",
      },
    ],
    specs: [
      { label: "Phạm vi", value: "326 km" },
      { label: "Tăng tốc", value: "0-100km/h: 9.9s" },
      { label: "Sạc nhanh", value: "31 phút (10-70%)" },
      { label: "Động cơ", value: "100 kW / 134 HP" },
    ],
  },
  {
    id: "vf7",
    name: "VinFast VF7",
    tagline: "SUV cao cấp thông minh",
    description:
      "Thiết kế sang trọng, công nghệ ADAS tiên tiến, trải nghiệm lái xe đẳng cấp.",
    basePrice: "799.000.000",
    colors: [
      {
        name: "Xanh lá",
        code: "xanh-la",
        hex: "#4E6E5D",
        image:
          "/asset/VF/VF7/vinfast-vf7-xanh-la.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#C23234",
        image: "/asset/VF/VF7/vf7-red.png",
      },
      {
        name: "Xanh dương",
        code: "xanh-duong",
        hex: "#3467CA",
        image: "/asset/VF/VF7/vf7-blue.png",
      },
      {
        name: "Trắng",
        code: "trang",
        hex: "#EEEFF3",
        image: "/asset/VF/VF7/vf7-white.png",
      },
      {
        name: "Xám",
        code: "xam",
        hex: "#A7A7B0",
        image: "/asset/VF/VF7/vf7-silver.png",
      },
    ],
    specs: [
      { label: "Phạm vi", value: "450 km" },
      { label: "Tăng tốc", value: "0-100km/h: 6.8s" },
      { label: "Sạc nhanh", value: "31 phút (10-70%)" },
      { label: "Động cơ", value: "150 kW / 201 HP" },
    ],
  },
  {
    id: "vf8",
    name: "VinFast VF8",
    tagline: "SUV điện hạng D",
    description:
      "Thiết kế hiện đại, vận hành mạnh mẽ, công nghệ thông minh, phù hợp cho gia đình và doanh nhân.",
    basePrice: "1.090.000.000",
    colors: [
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/VF/VF8/vinfast-vf-8-white.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#CD0222",
        image: "/asset/VF/VF8/vinfast-vf-8-red.png",
      },
      {
        name: "Đen",
        code: "den",
        hex: "#000000",
        image: "/asset/VF/VF8/vinfast-vf-8-black.png",
      },
      {
        name: "Nâu",
        code: "nau",
        hex: "#760709",
        image: "/asset/VF/VF8/vinfast-vf-8-brown.png",
      },
      {
        name: "Xanh dương",
        code: "xanh-duong",
        hex: "#0000ff",
        image: "/asset/VF/VF8/vinfast-vf-8-blue.png",
      },
      {
        name: "Đen xanh lá",
        code: "den-xanh-la",
        hex: "#416051",
        image: "/asset/VF/VF8/vinfast-8-black-green.png",
      },

    ],
    specs: [
      { label: "Phạm vi", value: "447 km" },
      { label: "Tăng tốc", value: "0-100km/h: 5.5s" },
      { label: "Sạc nhanh", value: "31 phút (10-70%)" },
      { label: "Động cơ", value: "300 kW / 402 HP" },
    ],
  },
  {
    id: "vf9",
    name: "VinFast VF9",
    tagline: "SUV điện hạng E",
    description:
      "Không gian 7 chỗ rộng rãi, tiện nghi sang trọng, tầm hoạt động dài, phù hợp gia đình lớn hoặc doanh nghiệp.",
    basePrice: "1.491.000.000",
    colors: [
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/VF/VF9/vinfast-9-white.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#CD0222",
        image: "/asset/VF/VF9/vinfast-9-red.png",
      },
      {
        name: "Đen",
        code: "den",
        hex: "#000000",
        image: "/asset/VF/VF9/vinfast-9-black.png",
      },
      {
        name: "Xanh rêu",
        code: "xanh-reu",
        hex: "#4B6F3F",
        image:
          "/asset/VF/VF9/vinfast-9-xanh-reu.png",
      },
      {
        name: "Xanh dương",
        code: "xanh-duong",
        hex: "#0000ff",
        image: "/asset/VF/VF9/vinfast-9-blue.png",
      },
    ],
    specs: [
      { label: "Phạm vi", value: "580 km" },
      { label: "Tăng tốc", value: "0-100km/h: 6.5s" },
      { label: "Sạc nhanh", value: "35 phút (10-70%)" },
      { label: "Động cơ", value: "300 kW / 402 HP" },
    ],
  },
];
