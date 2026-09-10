import type { Metadata } from "next"
import type { ReactNode } from "react"

import { DocsShell } from "@/components/docs/docs-shell"

export const metadata: Metadata = {
  title: {
    default: "shadcn-layout",
    template: "%s — shadcn-layout",
  },
  description: "Intrinsic layout primitives for shadcn/ui",
}

export default function DocsLayout({ children }: { children: ReactNode }) {
  return <DocsShell>{children}</DocsShell>
}
