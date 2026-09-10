import * as React from "react"

import { cn } from "@/lib/utils"

import { type Spacing, toSpace } from "./layout"

import "./layouts.css"

export function Switcher({
  className,
  space = "4",
  threshold = "30rem",
  limit,
  as: Comp = "div",
  style,
  ...props
}: React.ComponentProps<"div"> & {
  space?: Spacing
  threshold?: string
  limit?: 2 | 3 | 4 | 5 | 6
  as?: React.ElementType
}) {
  return (
    <Comp
      data-slot="switcher"
      data-limit={limit}
      className={cn("layout-switcher", className)}
      style={
        {
          "--space": toSpace(space),
          "--threshold": threshold,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  )
}
