"use client"

import { useEffect, useImperativeHandle, useRef, forwardRef } from "react"
import { Canvas } from "fabric"

export interface FabricCanvasProps {
  brushColor: string
  brushSize: number
}

const FabricCanvas = forwardRef<Canvas | null, FabricCanvasProps>(
  ({ brushColor, brushSize }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const fabricInstance = useRef<Canvas | null>(null)

    // Safely expose the canvas instance to parent via ref
    useImperativeHandle(ref, () => fabricInstance.current!, [])

    useEffect(() => {
      if (!canvasRef.current) return

      const canvas = new Canvas(canvasRef.current, {
        isDrawingMode: true,
        backgroundColor: "#ffffff",
      })

      canvas.setHeight(600)
      canvas.setWidth(600)
      fabricInstance.current = canvas

      return () => {
        canvas.dispose()
      }
    }, [])

    useEffect(() => {
      if (fabricInstance.current?.freeDrawingBrush) {
        fabricInstance.current.freeDrawingBrush.width = brushSize
        fabricInstance.current.freeDrawingBrush.color = brushColor
      }
    }, [brushColor, brushSize])

    return <canvas ref={canvasRef} className="w-full h-full rounded-lg" />
  }
)

FabricCanvas.displayName = "FabricCanvas"
export default FabricCanvas
