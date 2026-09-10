import type { Metadata } from "next"
import Link from "next/link"

import { DocsCode } from "@/components/docs/code-block"
import {
  DocsArticle,
  DocsSection,
  Install,
  PageHeader,
} from "@/components/docs/page-header"
import { decisionTree, primitives } from "@/lib/docs"
import { agentsMd } from "@/lib/llms"
import { Stack } from "@/registry/new-york/ui/stack"

export const metadata: Metadata = { title: "For agents" }

export default function AgentsPage() {
  return (
    <DocsArticle>
      <PageHeader title="For agents">
        <p>
          Contract for generating UI that uses this library. Prefer{" "}
          <a href="/llms.txt">/llms.txt</a>,{" "}
          <a href="/llms-full.txt">/llms-full.txt</a>, and{" "}
          <a href="/agents.md">/agents.md</a> over inventing layout names.
        </p>
      </PageHeader>

      <DocsSection title="After install">
        <p className="text-sm text-muted-foreground">
          Copy{" "}
          <a href="/agents.md" className="underline-offset-4 hover:underline">
            /agents.md
          </a>{" "}
          into the consuming app: <code>AGENTS.md</code> or{" "}
          <code>.cursor/rules/layout-primitives.mdc</code> with{" "}
          <code>alwaysApply</code>. This repo’s own <code>AGENTS.md</code> is for
          working on the library, not for host apps.
        </p>
        <Install item="layouts" full />
      </DocsSection>

      <DocsSection title="Decision tree">
        <p className="text-sm text-muted-foreground">
          Only these names. If a layout is not in the list, compose existing ones.
          Do not create Row, VStack, SidebarLayout, or Flex.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm">
          {decisionTree.map((row) => (
            <li key={row.if}>
              {row.if} → <span className="font-medium">{row.then}</span>
            </li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection title="Allowed primitives">
        <ul className="list-disc space-y-2 pl-5 text-sm">
          {primitives.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="font-medium underline-offset-4 hover:underline">
                {item.name}
              </Link>
              <span className="text-muted-foreground"> — {item.role}</span>
            </li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection title="Rules">
        <Stack space="3">
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              Import from the host <code>ui</code> folder after install, e.g.{" "}
              <code>@/components/ui/layouts</code> or{" "}
              <code>@/components/ui/stack</code>.
            </li>
            <li>
              <code>space</code> takes Tailwind spacing keys.{" "}
              <code>space=&quot;4&quot;</code> equals <code>gap-4</code>. Do not
              pass rem values to <code>space</code>.
            </li>
            <li>
              Length props (<code>sideWidth</code>, <code>min</code>,{" "}
              <code>threshold</code>, <code>minHeight</code>,{" "}
              <code>contentMin</code>) take a spacing key (<code>&quot;72&quot;</code>{" "}
              = <code>w-72</code>) or a CSS length.
            </li>
            <li>
              Do not set gap, flex-direction, wrap, or justify via{" "}
              <code>className</code> on a layout root. Use the props. Primitive CSS
              is unlayered and will win over those utilities.
            </li>
            <li>
              <code>as</code> changes the element. <code>asChild</code> merges
              onto a single child. Slots accept both. Do not <code>asChild</code>{" "}
              Aside or Cover roots.
            </li>
            <li>
              Center <code>gutters</code> default to <code>&quot;0&quot;</code>.
              Set them at the page edge.
            </li>
            <li>
              Stack <code>splitAfter</code> pins following children to the end of
              a tall stack.
            </li>
            <li>
              Aside is not shadcn <code>Sidebar</code>. App chrome stays Sidebar.
              In-page complementary columns use Aside with{" "}
              <code>Aside.Side</code> and{" "}
              <code>Aside.Content</code>.
            </li>
            <li>
              Cover&apos;s centered node must be <code>Cover.Child</code>.
            </li>
            <li>
              Grid uses class <code>layout-grid</code>. Never add Tailwind{" "}
              <code>grid</code> to that node.
            </li>
            <li>
              shadcn owns Button, Input, Dialog, Card, and Sidebar. Layouts
              wrap regions between those components.
            </li>
          </ul>
        </Stack>
      </DocsSection>

      <DocsSection title="Drop-in file">
        <p className="text-sm text-muted-foreground">
          Same text as <a href="/agents.md">/agents.md</a>. Paste it into the
          host app so the next session keeps the contract.
        </p>
        <DocsCode>{agentsMd()}</DocsCode>
      </DocsSection>
    </DocsArticle>
  )
}
