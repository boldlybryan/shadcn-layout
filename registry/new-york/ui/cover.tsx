import * as React from "react"

import { cn } from "@/lib/utils"

import {
  type Length,
  type PolyProps,
  type Spacing,
  layoutRoot,
  toLength,
  toSpace,
  warnMissingSlots,
} from "./layout"

import "./cover.css"

function CoverChild<T extends React.ElementType = "div">({
  className,
  as,
  asChild,
  children,
  ...props
}: PolyProps<T, object>) {
  return layoutRoot(
    as,
    asChild,
    {
      ...props,
      "data-slot": "cover-child",
      className: cn(className),
    },
    children
  )
}

function CoverRoot<T extends React.ElementType = "div">({
  className,
  space = "4",
  minHeight = "100dvh",
  as,
  asChild,
  children,
  style,
  ...props
}: PolyProps<
  T,
  {
    space?: Spacing
    minHeight?: Length
  }
>) {
  warnMissingSlots("Cover", children, [{ label: "Cover.Child", type: CoverChild }])

  return layoutRoot(
    as,
    asChild,
    {
      ...props,
      "data-slot": "cover",
      className: cn("layout-cover", className),
      style: {
        "--space": toSpace(space),
        "--min-height": toLength(minHeight),
        ...style,
      },
    },
    children
  )
}

const Cover = Object.assign(CoverRoot, {
  Child: CoverChild,
})

export { Cover, CoverChild }
