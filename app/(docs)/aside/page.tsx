import type { Metadata } from "next"
import Link from "next/link"

import { DemoBox } from "@/components/docs/demo-box"
import { Example } from "@/components/docs/example"
import {
  DocsArticle,
  DocsSection,
  Install,
  PageHeader,
  Usage,
} from "@/components/docs/page-header"
import { PropsTable } from "@/components/docs/props-table"
import { lengthType, spacingType } from "@/lib/docs"
import { Aside } from "@/registry/new-york/ui/aside"
import { Stack } from "@/registry/new-york/ui/stack"

export const metadata: Metadata = { title: "Aside" }

export default function AsidePage() {
  return (
    <DocsArticle>
      <PageHeader title="Aside">
        <p>
          A column with a declared width next to a pane that grows. When the
          growing pane would drop below <code>contentMin</code>, the side
          wraps onto its own row. No media query.
        </p>
        <p>
          shadcn’s <code>Sidebar</code> is the app shell (icon rail, collapse,
          mobile sheet). Aside is a split <em>inside</em> a page: settings
          links beside a form, filters beside results.{" "}
          <Link href="/#aside-sidebar" className="underline-offset-4 hover:underline">
            More on that distinction
          </Link>
          .
        </p>
      </PageHeader>

      <DocsSection title="Install">
        <Install item="aside" />
      </DocsSection>

      <DocsSection title="Usage">
        <Usage item="aside" />
      </DocsSection>

      <DocsSection title="When to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Settings with a list of sections beside the form.</li>
          <li>Filters beside results, a summary rail beside a builder.</li>
          <li>Any complementary column inside page content, not around it.</li>
        </ul>
      </DocsSection>

      <DocsSection title="When not to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            Product navigation around the whole app. That is shadcn{" "}
            <code>Sidebar</code> + <code>SidebarProvider</code>.
          </li>
          <li>A split the user can drag — <code>ResizablePanelGroup</code>.</li>
        </ul>
      </DocsSection>

      <DocsSection title="Structure">
        <p className="text-sm text-muted-foreground">
          Pass <code>Aside.Side</code> and <code>Aside.Content</code>. The wrap
          math is attached to those slots, so two plain children will not wrap
          correctly. Use <code>as=&quot;nav&quot;</code> on Side when it is a
          subnav. If a table or other wide child overflows, put{" "}
          <code>min-w-0</code> on that child — not on Content, whose min width
          is what triggers the wrap.
        </p>
      </DocsSection>

      <DocsSection title="Props">
        <PropsTable
          rows={[
            {
              prop: "sideWidth",
              type: lengthType,
              default: '"20rem"',
              description:
                'Ideal width of the complementary column. "80" is w-80; "20rem" also works.',
            },
            {
              prop: "contentMin",
              type: lengthType,
              default: '"50%"',
              description:
                "Minimum width of the content pane before the side wraps. The gap counts: wrap happens when side + gap + this minimum no longer fit.",
            },
            {
              prop: "space",
              type: spacingType,
              default: '"4"',
              description: "Gap between side and content.",
            },
            {
              prop: "side",
              type: '"start" | "end"',
              default: '"start"',
              description: "Which edge the complementary column sits on.",
            },
          ]}
        />
      </DocsSection>

      <DocsSection title="Examples">
        <Example
          label="Settings-style subnav. Narrow the pane until the content would be under 50%."
          code={`<Aside sideWidth="12rem" space="4">
  <Aside.Side as="nav">
    <Stack space="2">
      <div>General</div>
      <div>Team</div>
      <div>Billing</div>
    </Stack>
  </Aside.Side>
  <Aside.Content>
    <p>Settings content</p>
  </Aside.Content>
</Aside>`}
        >
          <Aside sideWidth="12rem" space="4">
            <Aside.Side as="nav">
              <Stack space="2">
                <DemoBox>General</DemoBox>
                <DemoBox>Team</DemoBox>
                <DemoBox>Billing</DemoBox>
              </Stack>
            </Aside.Side>
            <Aside.Content>
              <Stack space="3">
                <DemoBox>Settings content</DemoBox>
                <DemoBox>More content</DemoBox>
              </Stack>
            </Aside.Content>
          </Aside>
        </Example>
      </DocsSection>

      <DocsSection title="Instead of">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`// A column that never wraps
<aside className="w-72 shrink-0">…</aside>
<div className="flex-1">…</div>

// App chrome (wrong tool for an in-page split)
<Sidebar>…</Sidebar>

// Aside
<Aside sideWidth="18rem">
  <Aside.Side>…</Aside.Side>
  <Aside.Content>…</Aside.Content>
</Aside>`}</code>
        </pre>
      </DocsSection>
    </DocsArticle>
  )
}
