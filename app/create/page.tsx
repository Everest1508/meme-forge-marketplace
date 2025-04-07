"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eraser, Undo } from "lucide-react"
import dynamic from "next/dynamic"
import { useRef, useState } from "react"

const CanvasDraw = dynamic(() => import('react-canvas-draw'), {
  ssr: false
})

export default function CreatePage() {
  const canvasRef = useRef(null)
  const [brushRadius, setBrushRadius] = useState(12)
  const [brushColor, setBrushColor] = useState("#000000")

  const handleClear = () => {
    canvasRef.current?.clear()
  }

  const handleUndo = () => {
    canvasRef.current?.undo()
  }

  const handleSave = () => {
    const data = canvasRef.current?.getSaveData()
    // TODO: Implement saving logic
  }

  return (
    <div className="container mx-auto py-4 px-4 sm:px-6 sm:py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Create NFT</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleUndo}>
              <Undo className="mr-2 h-4 w-4" />
              Undo
            </Button>
            <Button variant="outline" onClick={handleClear}>
              <Eraser className="mr-2 h-4 w-4" />
              Clear
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
                <CanvasDraw
                  ref={canvasRef}
                  brushRadius={brushRadius}
                  brushColor={brushColor}
                  canvasWidth="100%"
                  canvasHeight="100%"
                  className="w-full h-full"
                  hideGrid
                  lazyRadius={0}
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