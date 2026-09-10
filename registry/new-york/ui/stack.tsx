import * as React from "react"

import { cn } from "@/lib/utils"

import {
  type Align,
  type PolyProps,
  type Spacing,
  type SplitAfter,
  alignMap,
  layoutRoot,
  toSpace,
} from "./layout"

import "./stack.css"

export function Stack<T extends React.ElementType = "div">({
  className,
  space = "4",
  align = "stretch",
  splitAfter,
  as,
  asChild,
  children,
  style,
  ...props
}: PolyProps<
  T,
  {
    space?: Spacing
    align?: Align
    splitAfter?: SplitAfter
  }
>) {
  return layoutRoot(
    as,
    asChild,
    {
      ...props,
      "data-slot": "stack",
      "data-split": splitAfter,
      className: cn("layout-stack", className),
      style: {
        "--space": toSpace(space),
        "--align": alignMap[align],
        ...style,
      },
    },
    children
  )
}
