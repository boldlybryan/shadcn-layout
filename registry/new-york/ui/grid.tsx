import * as React from "react"

import { cn } from "@/lib/utils"

import { type Spacing, toSpace } from "./layout"

import "./layouts.css"

export function Grid({
  className,
  space = "4",
  min = "16rem",
  as: Comp = "div",
  style,
  ...props
}: React.ComponentProps<"div"> & {
  space?: Spacing
  min?: string
  as?: React.ElementType
}) {
  return (
    <Comp
      data-slot="grid"
      className={cn("layout-grid", className)}
      style={
        {
          "--space": toSpace(space),
          "--min": min,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  )
}
