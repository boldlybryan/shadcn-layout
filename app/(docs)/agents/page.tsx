import type { Metadata } from "next"
import Link from "next/link"

import { DocsArticle, DocsSection, PageHeader } from "@/components/docs/page-header"
import { primitives } from "@/lib/docs"
import { Stack } from "@/registry/new-york/ui/stack"

export const metadata: Metadata = { title: "For agents" }

export default function AgentsPage() {
  return (
    <DocsArticle>
      <PageHeader title="For agents">
        <p>
          Machine-readable contract for generating UI that uses this library.
          Prefer <Link href="/llms.txt">/llms.txt</Link> and this page over
          inventing layout names.
        </p>
      </PageHeader>

      <DocsSection title="Allowed primitives">
        <p className="text-sm text-muted-foreground">
          Only these names. If a layout is not in the list, compose existing
          ones. Do not create Row, VStack, SidebarLayout, or Flex.
        </p>
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
              <code>@/components/ui/stack</code> or{" "}
              <code>@/components/ui/layouts</code>.
            </li>
            <li>
              <code>space</code> takes Tailwind spacing keys.{" "}
              <code>space=&quot;4&quot;</code> equals <code>gap-4</code>. Do not
              pass rem values to <code>space</code>.
            </li>
            <li>
              Do not set gap, flex-direction, wrap, or justify via{" "}
              <code>className</code> on a layout root. Use the props.
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
            <li>
              Recipes: form = nested Stack; page header = Cluster between;
              dialog footer = Cluster end; settings = Aside.
            </li>
          </ul>
        </Stack>
      </DocsSection>

      <DocsSection title="Install">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`pnpm dlx shadcn@latest add boldlybryan/shadcn-layout/layouts`}</code>
        </pre>
      </DocsSection>
    </DocsArticle>
  )
}
