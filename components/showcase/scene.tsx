import type { ReactNode } from "react"
import Link from "next/link"

import { Cluster } from "@/registry/new-york/ui/cluster"
import { Stack } from "@/registry/new-york/ui/stack"

const hrefs = {
  Stack: "/stack",
  Cluster: "/cluster",
  Aside: "/aside",
  Switcher: "/switcher",
  Grid: "/grid",
  Center: "/center",
  Cover: "/cover",
} as const

export type PrimitiveName = keyof typeof hrefs

export function Scene({
  id,
  title,
  description,
  primitives,
  url = "lumen.app",
  children,
}: {
  id: string
  title: string
  description: string
  primitives: PrimitiveName[]
  url?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <Stack space="4">
        <Stack space="3">
          <Stack space="2">
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </Stack>
          <Cluster space="2">
            {primitives.map((name) => (
              <Link
                key={name}
                href={hrefs[name]}
                className="rounded-full border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {name}
              </Link>
            ))}
          </Cluster>
        </Stack>
        <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
          <Cluster align="center" space="3" className="border-b bg-muted/40 px-3 py-2">
            <Cluster space="2">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </Cluster>
            <span className="truncate text-xs text-muted-foreground">{url}</span>
          </Cluster>
          {children}
        </div>
      </Stack>
    </section>
  )
}
