import * as React from "react"

import { cn } from "@/lib/utils"

import { type Align, type Justify, type Spacing, alignMap, justifyMap, toSpace } from "./layout"

import "./layouts.css"

export function Cluster({
  className,
  space = "4",
  justify = "start",
  align = "center",
  as: Comp = "div",
  style,
  ...props
}: React.ComponentProps<"div"> & {
  space?: Spacing
  justify?: Justify
  align?: Align
  as?: React.ElementType
}) {
  return (
    <Comp
      data-slot="cluster"
      className={cn("layout-cluster", className)}
      style={
        {
          "--space": toSpace(space),
          "--justify": justifyMap[justify],
          "--align": alignMap[align],
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  )
}
