import * as React from "react"

import { cn } from "@/lib/utils"

import {
  type Measure,
  type PolyProps,
  type Spacing,
  layoutRoot,
  toMeasure,
  toSpace,
} from "./layout"

import "./center.css"

export function Center<T extends React.ElementType = "div">({
  className,
  measure = "prose",
  gutters = "0",
  intrinsic = false,
  as,
  asChild,
  children,
  style,
  ...props
}: PolyProps<
  T,
  {
    measure?: Measure
    gutters?: Spacing
    intrinsic?: boolean
  }
>) {
  return layoutRoot(
    as,
    asChild,
    {
      ...props,
      "data-slot": "center",
      "data-intrinsic": intrinsic ? "" : undefined,
      className: cn("layout-center", className),
      style: {
        "--measure": toMeasure(measure),
        "--gutters": toSpace(gutters),
        ...style,
      },
    },
    children
  )
}
