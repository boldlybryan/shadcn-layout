import type { Metadata } from "next"

import { DemoBox } from "@/components/docs/demo-box"
import { Example } from "@/components/docs/example"
import {
  DocsArticle,
  DocsSection,
  Install,
  PageHeader,
} from "@/components/docs/page-header"
import { PropsTable } from "@/components/docs/props-table"
import { spacingType } from "@/lib/docs"
import { Aside } from "@/registry/new-york/ui/aside"
import { Stack } from "@/registry/new-york/ui/stack"

export const metadata: Metadata = { title: "Aside" }

export default function AsidePage() {
  return (
    <DocsArticle>
      <PageHeader title="Aside">
        <p>
          A declared-width complementary column beside a fluid pane. When the
          content pane would drop below <code>contentMin</code>, the side
          wraps above (or below) the pane. No media query.
        </p>
        <p>
          This is not the shadcn <code>Sidebar</code>. That component is app
          chrome (icon rail, collapse, mobile sheet). Aside is an in-page
          split: settings subnav, filter rail, table of contents.
        </p>
      </PageHeader>

      <DocsSection title="Install">
        <Install item="aside" />
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
            Product navigation. Use shadcn <code>Sidebar</code> +{" "}
            <code>SidebarProvider</code>.
          </li>
          <li>User-dragged splits — that is <code>ResizablePanelGroup</code>.</li>
        </ul>
      </DocsSection>

      <DocsSection title="Structure">
        <p className="text-sm text-muted-foreground">
          Children must be <code>Aside.Side</code> and <code>Aside.Content</code>.
          Raw first/last child is not enough.
        </p>
      </DocsSection>

      <DocsSection title="Props">
        <PropsTable
          rows={[
            {
              prop: "sideWidth",
              type: "string",
              default: '"20rem"',
              description: "Ideal width of the complementary column (CSS length).",
            },
            {
              prop: "contentMin",
              type: "string",
              default: '"50%"',
              description:
                "Minimum inline size of the content pane before the side wraps.",
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
          label="Settings-style subnav. Resize the window until the content pane would be under 50%."
          code={`<Aside sideWidth="12rem" space="4">
  <Aside.Side>
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
            <Aside.Side>
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

      <DocsSection title="Do not">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`// NO — fake sidebar that never wraps
<aside className="w-72 shrink-0">…</aside>
<div className="flex-1">…</div>

// NO — shadcn Sidebar names for an in-page split
<Sidebar>…</Sidebar>

// YES
<Aside sideWidth="18rem">
  <Aside.Side>…</Aside.Side>
  <Aside.Content>…</Aside.Content>
</Aside>`}</code>
        </pre>
      </DocsSection>
    </DocsArticle>
  )
}
