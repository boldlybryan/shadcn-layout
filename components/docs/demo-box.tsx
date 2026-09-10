import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function DemoBox({
  className,
  children,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("rounded-md border bg-card px-3 py-4 text-sm", className)}>
      {children}
    </div>
  )
}
