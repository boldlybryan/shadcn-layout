import * as React from "react"

import { cn } from "@/lib/utils"

import { type Spacing, toSpace } from "./layout"

import "./layouts.css"

function CoverRoot({
  className,
  space = "4",
  minHeight = "100dvh",
  as: Comp = "div",
  style,
  ...props
}: React.ComponentProps<"div"> & {
  space?: Spacing
  minHeight?: string
  as?: React.ElementType
}) {
  return (
    <Comp
      data-slot="cover"
      className={cn("layout-cover", className)}
      style={
        {
          "--space": toSpace(space),
          "--min-height": minHeight,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

function CoverChild({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="cover-child" className={cn(className)} {...props} />
}

const Cover = Object.assign(CoverRoot, {
  Child: CoverChild,
})

export { Cover, CoverChild }
