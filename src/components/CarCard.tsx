import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface CarItem {
  id: string
  name: string
  variant: string
  price: string
  image: string
  colorName?: string
}

export function CarCard({ id, name, variant, price, image, colorName }: CarItem) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-muted">
        <img src={image} alt={`${name} ${variant}${colorName ? ` - màu ${colorName}` : ''}`} className="w-full h-full object-cover" />
      </div>
      <CardContent className="pt-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold leading-tight">{name}</h3>
          <Badge variant="secondary">{variant}</Badge>
        </div>
        <div className="text-sm text-muted-foreground">{colorName}</div>
        <div className="mt-2 text-lg font-bold text-primary">{price}</div>
      </CardContent>
      <CardFooter>
        <Link to="/chi-tiet-xe" className="w-full">
          <Button className="w-full" variant="default">Xem chi tiết</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
