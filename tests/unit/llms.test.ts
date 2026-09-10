import { describe, expect, it } from "vitest"

import { decisionTree, importLine, installCmd, primitives } from "@/lib/docs"
import { agentsMd, fewShots, llmsFullTxt, llmsTxt } from "@/lib/llms"

describe("installCmd", () => {
  it("covers the common package managers", () => {
    expect(installCmd("layouts", "pnpm")).toBe(
      "pnpm dlx shadcn@latest add boldlybryan/shadcn-layout/layouts"
    )
    expect(installCmd("stack", "npm")).toBe(
      "npx shadcn@latest add boldlybryan/shadcn-layout/stack"
    )
    expect(installCmd("stack", "bun")).toBe(
      "bunx shadcn@latest add boldlybryan/shadcn-layout/stack"
    )
  })
})

describe("importLine", () => {
  it("points at the kit barrel or a single primitive", () => {
    expect(importLine("layouts")).toContain('@/components/ui/layouts')
    expect(importLine("stack")).toBe(
      'import { Stack } from "@/components/ui/stack"'
    )
  })
})

describe("agent dumps", () => {
  it("llms.txt names every primitive, the install, and the decision tree", () => {
    const txt = llmsTxt()
    for (const item of primitives) {
      expect(txt).toContain(item.name)
    }
    expect(txt).toContain("boldlybryan/shadcn-layout/layouts")
    expect(txt).toContain('@/components/ui/layouts')
    expect(txt).toContain("components.json")
    for (const row of decisionTree) {
      expect(txt).toContain(row.then)
    }
  })

  it("llms-full.txt includes few-shot code", () => {
    const full = llmsFullTxt()
    expect(full).toContain("Few-shots")
    expect(full).toContain('Stack as="form"')
    expect(full).toContain("Cover.Child")
    expect(fewShots.length).toBeGreaterThanOrEqual(8)
  })

  it("agents.md is a drop-in contract with imports and do-nots", () => {
    const md = agentsMd()
    expect(md).toContain("Drop this file into the consuming app")
    expect(md).toContain("Do not invent")
    expect(md).toContain("flex flex-col gap-4")
    expect(md).toContain("Do not invent Row, VStack, SidebarLayout")
  })
})
