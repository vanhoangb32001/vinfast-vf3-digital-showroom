import { motion } from "framer-motion"
import { useState } from "react"
import { Frame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

const greenVehicle = [
  {
    id: "minio-green",
    name: "Minio Green",
    image: "link-ảnh-minio-green.jpg",
    price: "Liên hệ",
    description: "Xe điện cỡ nhỏ đô thị",
    technicalSpecs: [
      { category: "Động cơ", detail: "01 Motor, 32 kW / 43.5 PS" },
      { category: "Mô-men xoắn", detail: "110 Nm" },
      { category: "Tăng tốc", detail: "5.3s (0-50km/h)" },
      { category: "Quãng đường", detail: "215 km (NEDC/WLTP)" },
      { category: "Thời gian sạc nhanh", detail: "36 phút (10%-70%)" },
      { category: "Dẫn động", detail: "RWD (Dẫn động cầu sau)" },
      { category: "Dung lượng pin", detail: "18.64 kWh" },
      { category: "Kích thước", detail: "3.190 x 1.679 x 1.622 mm" },
      { category: "Khoảng sáng gầm", detail: "191 mm" },
      { category: "Dung tích cốp", detail: "285 lít" }
    ]
  },
  {
    id: "herio-green",
    name: "Herio Green",
    image: "link-ảnh-herio-green.jpg",
    price: "Liên hệ",
    description: "Xe điện đa dụng cho gia đình",
    technicalSpecs: [
      { category: "Động cơ", detail: "02 Motor, 50 kW / 67 PS" },
      { category: "Mô-men xoắn", detail: "150 Nm" },
      { category: "Tăng tốc", detail: "5.0s (0-50km/h)" },
      { category: "Quãng đường", detail: "250 km (NEDC/WLTP)" },
      { category: "Thời gian sạc nhanh", detail: "30 phút (10%-80%)" },
      { category: "Dẫn động", detail: "FWD (Dẫn động cầu trước)" },
      { category: "Dung lượng pin", detail: "25 kWh" },
      { category: "Kích thước", detail: "3.400 x 1.700 x 1.630 mm" },
      { category: "Khoảng sáng gầm", detail: "195 mm" },
      { category: "Dung tích cốp", detail: "320 lít" }
    ]
  },
  {
    id: "nerio-green",
    name: "Nerio Green",
    image: "link-ảnh-nerio-green.jpg",
    price: "Liên hệ",
    description: "Xe điện thương mại nhỏ",
    technicalSpecs: [
      { category: "Động cơ", detail: "02 Motor, 60 kW / 80 PS" },
      { category: "Mô-men xoắn", detail: "180 Nm" },
      { category: "Tăng tốc", detail: "4.8s (0-50km/h)" },
      { category: "Quãng đường", detail: "280 km (NEDC/WLTP)" },
      { category: "Thời gian sạc nhanh", detail: "28 phút (10%-80%)" },
      { category: "Dẫn động", detail: "AWD (4 bánh)" },
      { category: "Dung lượng pin", detail: "30 kWh" },
      { category: "Kích thước", detail: "3.500 x 1.750 x 1.650 mm" },
      { category: "Khoảng sáng gầm", detail: "200 mm" },
      { category: "Dung tích cốp", detail: "340 lít" }
    ]
  },
  {
    id: "limo-green",
    name: "Limo Green",
    image: "link-ảnh-limo-green.jpg",
    price: "Liên hệ",
    description: "Xe điện limousine sang trọng",
    technicalSpecs: [
      { category: "Động cơ", detail: "02 Motor, 80 kW / 108 PS" },
      { category: "Mô-men xoắn", detail: "250 Nm" },
      { category: "Tăng tốc", detail: "4.5s (0-50km/h)" },
      { category: "Quãng đường", detail: "350 km (NEDC/WLTP)" },
      { category: "Thời gian sạc nhanh", detail: "25 phút (10%-80%)" },
      { category: "Dẫn động", detail: "AWD (4 bánh)" },
      { category: "Dung lượng pin", detail: "40 kWh" },
      { category: "Kích thước", detail: "4.000 x 1.900 x 1.700 mm" },
      { category: "Khoảng sáng gầm", detail: "210 mm" },
      { category: "Dung tích cốp", detail: "400 lít" }
    ]
  }
];

export default function VinfastGreen(){
    return(
        <div className="min-h-screen">
            
        </div>
    )
}