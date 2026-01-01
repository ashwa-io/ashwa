"use client"
import { useEffect, useRef } from "react"

type Grid = { alive: boolean; opacity: number }[][]

const GameOfLife = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas size to match window
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()

    let animationFrameId: number
    const cellSize = 6
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height
    
    const cols = Math.floor(canvasWidth / cellSize)
    const rows = Math.floor(canvasHeight / cellSize)
    const transitionSpeed = 0.2 // Controls fade speed
    
    // Use perfect center for symmetrical distribution
    const centerX = canvasWidth / 2
    const centerY = canvasHeight / 2
    // Calculate max distance from center to corner of the canvas
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY)
    
    // Calculate radial distance and fade factor for a cell
    const getRadialFade = (col: number, row: number): number => {
      // Calculate the actual center position of the cell in canvas coordinates
      const cellCenterX = col * cellSize + cellSize / 2
      const cellCenterY = row * cellSize + cellSize / 2
      // Calculate distance from cell center to canvas center
      const dx = cellCenterX - centerX
      const dy = cellCenterY - centerY
      const distance = Math.sqrt(dx * dx + dy * dy)
      // Normalize distance (0 at center, 1 at corners)
      const normalizedDistance = distance / maxDistance
      // Create smooth fade: 1 at center, 0 at edges (tighter for denser center)
      return Math.max(0, 1 - Math.pow(normalizedDistance / 0.6, 2))
    }

    let grid: Grid = Array(rows)
      .fill(null)
      .map((_, i) =>
        Array(cols)
          .fill(null)
          .map((_, j) => {
            const radialFade = getRadialFade(j, i)
            // Higher probability of being alive in center (directly proportional to radial fade)
            // At center (radialFade=1): probability = 0.85 (15% chance of being alive)
            // At edges (radialFade=0): probability = 1.0 (0% chance of being alive)
            const weightedProbability = 0.85 + 0.15 * (1 - radialFade)
            const isAlive = Math.random() > weightedProbability
            return {
              alive: isAlive,
              opacity: isAlive && Math.random() > 0.5 ? 0.5 * radialFade : 0,
            }
          }),
      )

    const countNeighbors = (grid: Grid, x: number, y: number): number => {
      let sum = 0
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          const row = x + i
          const col = y + j
          // Check bounds instead of wrapping to prevent asymmetry
          if (row >= 0 && row < rows && col >= 0 && col < cols) {
            sum += grid[row][col].alive ? 1 : 0
          }
        }
      }
      sum -= grid[x][y].alive ? 1 : 0
      return sum
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update opacities
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const cell = grid[i][j]
          const radialFade = getRadialFade(j, i)
          
          if (cell.alive && cell.opacity < 1) {
            cell.opacity = Math.min(cell.opacity + transitionSpeed, 0.5)
          } else if (!cell.alive && cell.opacity > 0) {
            cell.opacity = Math.max(cell.opacity - transitionSpeed, 0)
          }

          if (cell.opacity > 0 && radialFade > 0) {
            // Apply radial fade to opacity (fade out at edges)
            const finalOpacity = cell.opacity * radialFade
            ctx.fillStyle = `rgba(0, 0, 0, ${finalOpacity})`
            ctx.beginPath()
            ctx.arc(
              j * cellSize + cellSize / 2,
              i * cellSize + cellSize / 2,
              1,
              0,
              Math.PI * 2,
            )
            ctx.fill()
          }
        }
      }

      const next = grid.map((row, i) =>
        row.map((cell, j) => {
          const radialFade = getRadialFade(j, i)
          const neighbors = countNeighbors(grid, i, j)
          let willBeAlive = cell.alive
            ? neighbors >= 2 && neighbors <= 3
            : neighbors === 3
          
          // Prevent cells from being alive if radial fade is too low (edges)
          // This ensures symmetric distribution and prevents edge spawning
          if (radialFade < 0.05) {
            willBeAlive = false
          }
          
          return {
            alive: willBeAlive,
            opacity: cell.opacity,
          }
        }),
      )

      grid = next
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(draw)
      }, 125)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="mask pointer-events-none overflow-hidden select-none w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

export default GameOfLife
