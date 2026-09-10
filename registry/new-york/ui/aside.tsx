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

import "./aside.css"

function AsideSide<T extends React.ElementType = "div">({
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
      "data-slot": "aside-side",
      className: cn(className),
    },
    children
  )
}

function AsideContent<T extends React.ElementType = "div">({
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
      "data-slot": "aside-content",
      className: cn(className),
    },
    children
  )
}

function AsideRoot<T extends React.ElementType = "div">({
  className,
  space = "4",
  sideWidth = "20rem",
  contentMin = "50%",
  side = "start",
  as,
  asChild,
  children,
  style,
  ...props
}: PolyProps<
  T,
  {
    space?: Spacing
    sideWidth?: Length
    contentMin?: Length
    side?: "start" | "end"
  }
>) {
  warnMissingSlots("Aside", children, [
    { label: "Aside.Side", type: AsideSide },
    { label: "Aside.Content", type: AsideContent },
  ])

  return layoutRoot(
    as,
    asChild,
    {
      ...props,
      "data-slot": "aside",
      "data-side": side,
      className: cn("layout-aside", className),
      style: {
        "--space": toSpace(space),
        "--side-width": toLength(sideWidth),
        "--content-min": toLength(contentMin),
        ...style,
      },
    },
    children
  )
}

const Aside = Object.assign(AsideRoot, {
  Side: AsideSide,
  Content: AsideContent,
})

export { Aside, AsideContent, AsideSide }
