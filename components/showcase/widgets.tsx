import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/registry/new-york/ui/card"
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Grid } from "@/registry/new-york/ui/grid"
import { Stack } from "@/registry/new-york/ui/stack"

export function Avatar({
  initials,
  className,
}: {
  initials: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium",
        className
      )}
    >
      {initials}
    </span>
  )
}

export function Pill({
  children,
  tone = "muted",
}: {
  children: ReactNode
  tone?: "muted" | "ok" | "warn"
}) {
  const toneClass =
    tone === "ok"
      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
      : tone === "warn"
        ? "bg-amber-500/10 text-amber-800 dark:text-amber-400"
        : "bg-muted text-muted-foreground"

  return (
    <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", toneClass)}>
      {children}
    </span>
  )
}

export function Metric({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint: string
}) {
  return (
    <Card className="py-0 shadow-none">
      <CardContent className="p-4">
        <Stack space="2">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-semibold tracking-tight">{value}</p>
          <p className="text-xs text-muted-foreground">{hint}</p>
        </Stack>
      </CardContent>
    </Card>
  )
}

export function SparkBars({ values }: { values: number[] }) {
  return (
    <div className="h-36 rounded-lg bg-muted/50 p-3">
      <Grid min="0.55rem" space="1" className="h-full">
        {values.map((value, index) => (
          <span
            key={index}
            className="self-end rounded-sm bg-primary/80"
            style={{ height: `${value}%` }}
          />
        ))}
      </Grid>
    </div>
  )
}

export function LogoMark({ name }: { name: string }) {
  return (
    <Cluster space="2" align="center">
      <span className="size-5 rounded-sm bg-primary" />
      <span className="text-sm font-semibold tracking-tight">{name}</span>
    </Cluster>
  )
}
