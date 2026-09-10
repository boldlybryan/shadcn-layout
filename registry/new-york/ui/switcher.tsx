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

import "./switcher.css"

export function Switcher<T extends React.ElementType = "div">({
  className,
  space = "4",
  threshold = "30rem",
  limit,
  as,
  asChild,
  children,
  style,
  ...props
}: PolyProps<
  T,
  {
    space?: Spacing
    threshold?: Length
    limit?: 2 | 3 | 4 | 5 | 6
  }
>) {
  return layoutRoot(
    as,
    asChild,
    {
      ...props,
      "data-slot": "switcher",
      "data-limit": limit,
      className: cn("layout-switcher", className),
      style: {
        "--space": toSpace(space),
        "--threshold": toLength(threshold),
        ...style,
      },
    },
    children
  )
}
