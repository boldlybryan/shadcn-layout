export type Spacing =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "8"
  | "10"
  | "12"
  | "16"

/** Maps a Tailwind spacing key to the same value as `gap-4`, `p-4`, etc. */
export function toSpace(space: Spacing): string {
  return `calc(var(--spacing, 0.25rem) * ${space})`
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
