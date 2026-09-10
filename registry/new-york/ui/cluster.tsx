import * as React from "react"

import { cn } from "@/lib/utils"

import {
  type Align,
  type Justify,
  type PolyProps,
  type Spacing,
  alignMap,
  justifyMap,
  layoutRoot,
  toSpace,
} from "./layout"

import "./cluster.css"

export function Cluster<T extends React.ElementType = "div">({
  className,
  space = "4",
  justify = "start",
  align = "center",
  as,
  asChild,
  children,
  style,
  ...props
}: PolyProps<
  T,
  {
    space?: Spacing
    justify?: Justify
    align?: Align
  }
>) {
  return layoutRoot(
    as,
    asChild,
    {
      ...props,
      "data-slot": "cluster",
      className: cn("layout-cluster", className),
      style: {
        "--space": toSpace(space),
        "--justify": justifyMap[justify],
        "--align": alignMap[align],
        ...style,
      },
    },
    children
  )
}
