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
          This page is for code generators. If you are installing the kit by
          hand, start at the{" "}
          <Link href="/" className="underline-offset-4 hover:underline">
            Introduction
          </Link>
          .
        </p>
        <p>
          Put{" "}
          <a href="/agents.md" className="underline-offset-4 hover:underline">
            /agents.md
          </a>{" "}
          in the app you are generating into, then follow the tree below.
          Machine-readable copies:{" "}
          <a href="/llms.txt">/llms.txt</a> and{" "}
          <a href="/llms-full.txt">/llms-full.txt</a>. Composed product surfaces
          live on{" "}
          <Link href="/showcase" className="underline-offset-4 hover:underline">
            Showcase
          </Link>
          .
        </p>
      </PageHeader>

      <DocsSection title="After install">
        <p className="text-sm text-muted-foreground">
          Copy{" "}
          <a href="/agents.md" className="underline-offset-4 hover:underline">
            /agents.md
          </a>{" "}
          into the app as <code>AGENTS.md</code> or{" "}
          <code>.cursor/rules/layout-primitives.mdc</code> with{" "}
          <code>alwaysApply</code>. The <code>AGENTS.md</code> in this repo is
          for working on the library itself.
        </p>
        <Install item="layouts" full />
      </DocsSection>

      <DocsSection title="Which primitive">
        <p className="text-sm text-muted-foreground">
          Use only these names. If the layout is not on the list, compose
          existing ones (a settings page is Cluster + Aside, not a new
          component).
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
              Import from the app <code>ui</code> folder after install, e.g.{" "}
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
              <code>className</code> on a layout root. Use the props. Extra{" "}
              <code>flex</code> / <code>gap-*</code> classes will not override the
              component.
            </li>
            <li>
              <code>as</code> changes the element. <code>asChild</code> merges
              onto a single child. Slots accept both. Do not{" "}
              <code>asChild</code> Aside or Cover roots (they need their slots).
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
              <code>Aside.Side</code> and <code>Aside.Content</code>.
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
          app so the next session keeps using these names.
        </p>
        <DocsCode>{agentsMd()}</DocsCode>
      </DocsSection>
    </DocsArticle>
  )
}
