import * as React from "react"

import { cn } from "@/lib/utils"

import { type Spacing, toSpace } from "./layout"

import "./layouts.css"

export function Stack({
  className,
  space = "4",
  as: Comp = "div",
  style,
  ...props
}: React.ComponentProps<"div"> & {
  space?: Spacing
  as?: React.ElementType
}) {
  return (
    <Comp
      data-slot="stack"
      className={cn("layout-stack", className)}
      style={{ "--space": toSpace(space), ...style } as React.CSSProperties}
      {...props}
    />
  )
}
