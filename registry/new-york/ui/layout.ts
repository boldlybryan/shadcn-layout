import * as React from "react"

import { cn } from "@/lib/utils"

declare module "react" {
  interface CSSProperties {
    "--space"?: string
    "--align"?: string
    "--justify"?: string
    "--side-width"?: string
    "--content-min"?: string
    "--threshold"?: string
    "--min"?: string
    "--measure"?: string
    "--gutters"?: string
    "--min-height"?: string
  }
}

/** Tailwind default spacing keys. `space="4"` is the same length as `gap-4`. */
export const spacingKeys = [
  "0",
  "0.5",
  "1",
  "1.5",
  "2",
  "2.5",
  "3",
  "3.5",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "14",
  "16",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "52",
  "56",
  "60",
  "64",
  "72",
  "80",
  "96",
] as const

export type Spacing = (typeof spacingKeys)[number]

const spacingSet = new Set<string>(spacingKeys)

export function isSpacing(value: string): value is Spacing {
  return spacingSet.has(value)
}

/** Maps a Tailwind spacing key to the same value as `gap-4`, `p-4`, `w-4`. */
export function toSpace(space: Spacing): string {
  return `calc(var(--spacing, 0.25rem) * ${space})`
}

/**
 * Token or CSS length. `"72"` is `w-72`; `"20rem"` / `"50%"` / `"100dvh"` pass through.
 */
export type Length = Spacing | (string & {})

export function toLength(value: Length): string {
  return isSpacing(value) ? toSpace(value) : value
}

export const measures = {
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  prose: "65ch",
} as const

export type Measure = keyof typeof measures | (string & {})

export function toMeasure(measure: Measure): string {
  return measure in measures ? measures[measure as keyof typeof measures] : measure
}

export type Justify = "start" | "center" | "end" | "between"
export type Align = "start" | "center" | "end" | "baseline" | "stretch"
export type SplitAfter = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export const justifyMap: Record<Justify, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
}

export const alignMap: Record<Align, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  baseline: "baseline",
  stretch: "stretch",
}

type Merge<A, B> = Omit<A, keyof B> & B

export type PolyProps<T extends React.ElementType, Own> = Merge<
  React.ComponentPropsWithoutRef<T>,
  Own & {
    as?: T
    asChild?: boolean
  }
>

export function mergeAsChild(
  children: React.ReactNode,
  props: { className?: string; style?: React.CSSProperties } & Record<string, unknown>
) {
  const child = React.Children.only(children) as React.ReactElement<{
    className?: string
    style?: React.CSSProperties
  }>
  return React.cloneElement(child, {
    ...props,
    className: cn(props.className, child.props.className),
    style: { ...props.style, ...child.props.style },
  })
}

export function layoutRoot(
  as: React.ElementType | undefined,
  asChild: boolean | undefined,
  props: { className?: string; style?: React.CSSProperties } & Record<string, unknown>,
  children: React.ReactNode
) {
  if (asChild) return mergeAsChild(children, props)
  return React.createElement(as ?? "div", props, children)
}

export function warnMissingSlots(
  parent: string,
  children: React.ReactNode,
  required: Array<{ label: string; type: unknown }>
) {
  if (process.env.NODE_ENV === "production") return
  const types = new Set<unknown>()
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) types.add(child.type)
  })
  for (const req of required) {
    if (!types.has(req.type)) {
      console.warn(`[shadcn-layout] <${parent}> is missing ${req.label}.`)
    }
  }
}
