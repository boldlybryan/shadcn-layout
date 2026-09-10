import * as React from "react"

import { cn } from "@/lib/utils"

import { type Spacing, toSpace } from "./layout"

import "./layouts.css"

function AsideRoot({
  className,
  space = "4",
  sideWidth = "20rem",
  contentMin = "50%",
  side = "start",
  as: Comp = "div",
  style,
  ...props
}: React.ComponentProps<"div"> & {
  space?: Spacing
  sideWidth?: string
  contentMin?: string
  side?: "start" | "end"
  as?: React.ElementType
}) {
  return (
    <Comp
      data-slot="aside"
      data-side={side}
      className={cn("layout-aside", className)}
      style={
        {
          "--space": toSpace(space),
          "--side-width": sideWidth,
          "--content-min": contentMin,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

function AsideSide({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="aside-side" className={cn(className)} {...props} />
}

function AsideContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="aside-content" className={cn(className)} {...props} />
}

const Aside = Object.assign(AsideRoot, {
  Side: AsideSide,
  Content: AsideContent,
})

export { Aside, AsideContent, AsideSide }
