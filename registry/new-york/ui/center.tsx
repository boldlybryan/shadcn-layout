import * as React from "react"

import { cn } from "@/lib/utils"

import { type Measure, type Spacing, toMeasure, toSpace } from "./layout"

import "./layouts.css"

export function Center({
  className,
  measure = "prose",
  gutters = "4",
  intrinsic = false,
  as: Comp = "div",
  style,
  ...props
}: React.ComponentProps<"div"> & {
  measure?: Measure
  gutters?: Spacing
  intrinsic?: boolean
  as?: React.ElementType
}) {
  return (
    <Comp
      data-slot="center"
      data-intrinsic={intrinsic ? "" : undefined}
      className={cn("layout-center", className)}
      style={
        {
          "--measure": toMeasure(measure),
          "--gutters": toSpace(gutters),
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  )
}
