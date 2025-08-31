export interface CarData {
  id: string
  name: string
  variant: "Eco" | "Plus"
  price: string
  image: string
  colorName: string
}

export const cars: CarData[] = [
  {
    id: "vf3-eco-yellow",
    name: "VinFast VF3",
    variant: "Eco",
    price: "299.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=450&fit=crop",
    colorName: "Summer Yellow",
  },
  {
    id: "vf3-plus-grey",
    name: "VinFast VF3",
    variant: "Plus",
    price: "319.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=450&fit=crop",
    colorName: "Zenith Grey",
  },
  {
    id: "vf3-eco-blue",
    name: "VinFast VF3",
    variant: "Eco",
    price: "299.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=450&fit=crop",
    colorName: "Sky Blue",
  },
  {
    id: "vf3-plus-red",
    name: "VinFast VF3",
    variant: "Plus",
    price: "319.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&h=450&fit=crop",
    colorName: "Crimson Red",
  },
  {
    id: "vf3-eco-mint",
    name: "VinFast VF3",
    variant: "Eco",
    price: "299.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&h=450&fit=crop",
    colorName: "Urban Mint",
  },
  {
    id: "vf3-plus-white",
    name: "VinFast VF3",
    variant: "Plus",
    price: "319.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=450&fit=crop",
    colorName: "Infinity Blanc",
  },
]
