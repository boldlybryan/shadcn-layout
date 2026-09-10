import * as React from "react"

import { cn } from "@/lib/utils"

import {
  type Length,
  type PolyProps,
  type Spacing,
  layoutRoot,
  toLength,
  toSpace,
} from "./layout"

import "./grid.css"

export function Grid<T extends React.ElementType = "div">({
  className,
  space = "4",
  min = "16rem",
  as,
  asChild,
  children,
  style,
  ...props
}: PolyProps<
  T,
  {
    space?: Spacing
    min?: Length
  }
>) {
  return layoutRoot(
    as,
    asChild,
    {
      ...props,
      "data-slot": "grid",
      className: cn("layout-grid", className),
      style: {
        "--space": toSpace(space),
        "--min": toLength(min),
        ...style,
      },
    },
    children
  )
}
