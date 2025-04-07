"use client"

import { useRef, useState } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eraser, Undo, Image as ImageIcon } from "lucide-react"
import FabricCanvas from "@/components/fabric-canvas"
import { Canvas, Image } from "fabric"

export default function CreatePage() {
  const [brushRadius, setBrushRadius] = useState(5)
  const [brushColor, setBrushColor] = useState("#000000")
  const canvasRef = useRef<Canvas | null>(null)

  const initCanvas = (canvas: Canvas) => {
    canvasRef.current = canvas
  }

  const handleClear = () => {
    canvasRef.current?.clear()
  }

  const handleUndo = () => {
    const objects = canvasRef.current?.getObjects()
    if (objects && objects.length > 0) {
      canvasRef.current?.remove(objects[objects.length - 1])
    }
  }

  const handleSave = () => {
    const dataURL = canvasRef.current?.toDataURL({
      format: "png",
      quality: 1,
      multiplier: 0
    })
    console.log("Exported Image URL:", dataURL)
  }

  const handleAddImage = () => {
    const imageURL = prompt("Enter image URL to add:")
    if (imageURL && canvasRef.current) {
      Image.fromURL(imageURL, {}, (img: Image | undefined) => {
        if (img) {
          img.set({ left: 50, top: 50, scaleX: 0.5, scaleY: 0.5 })
          canvasRef.current?.add(img)
        }
      })
    }
  }

  return (
    <div className="container mx-auto py-4 px-4 sm:px-6 sm:py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Create NFT</h1>
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" onClick={handleUndo}>
              <Undo className="mr-2 h-4 w-4" />
              Undo
            </Button>
            <Button variant="outline" onClick={handleClear}>
              <Eraser className="mr-2 h-4 w-4" />
              Clear
            </Button>
            <Button variant="outline" onClick={handleAddImage}>
              <ImageIcon className="mr-2 h-4 w-4" />
              Add Image
            </Button>
            <Button onClick={handleSave}>
              <Download className="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>
        </div>

        <Tabs defaultValue="draw" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="draw">Draw</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="draw">
            <Card className="p-4">
              <div className="w-full aspect-square bg-white rounded-lg overflow-hidden">
                <FabricCanvas
                  brushColor={brushColor}
                  brushSize={brushRadius}
                  ref={canvasRef}
                />
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Brush Size: {brushRadius}px
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={brushRadius}
                    onChange={(e) => setBrushRadius(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Brush Color
                  </label>
                  <input
                    type="color"
                    value={brushColor}
                    onChange={(e) => setBrushColor(e.target.value)}
                    className="w-full h-10"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
