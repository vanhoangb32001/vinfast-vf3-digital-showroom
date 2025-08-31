import { motion } from "framer-motion"
import { CarColor } from "@/data/featuredCars"
import { cn } from "@/lib/utils"

interface ColorPickerProps {
  colors: CarColor[]
  selectedColor: string
  onColorChange: (colorCode: string) => void
}

export function ColorPicker({ colors, selectedColor, onColorChange }: ColorPickerProps) {
  return (
    <div className="flex gap-3">
      {colors.map((color) => (
        <motion.button
          key={color.code}
          onClick={() => onColorChange(color.code)}
          className={cn(
            "w-8 h-8 rounded-full border-2 transition-all duration-200",
            selectedColor === color.code 
              ? "border-foreground scale-110 shadow-lg" 
              : "border-border hover:border-foreground/50 hover:scale-105"
          )}
          style={{ backgroundColor: color.hex }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Chọn màu ${color.name}`}
        >
          <span className="sr-only">{color.name}</span>
        </motion.button>
      ))}
    </div>
  )
}