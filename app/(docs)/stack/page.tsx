import type { Metadata } from "next"

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
import { spacingType } from "@/lib/docs"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Stack } from "@/registry/new-york/ui/stack"
import { Textarea } from "@/registry/new-york/ui/textarea"

export const metadata: Metadata = { title: "Stack" }

export default function StackPage() {
  return (
    <DocsArticle>
      <PageHeader title="Stack">
        <p>
          A vertical list whose children share one gap. Forms, page sections,
          and the body of a card or dialog.
        </p>
      </PageHeader>

      <DocsSection title="Install">
        <Install item="stack" />
      </DocsSection>

      <DocsSection title="Usage">
        <Usage item="stack" />
      </DocsSection>

      <DocsSection title="When to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Label above input, then the next field, then actions.</li>
          <li>A page that is a column of sections.</li>
          <li>The body of a card or dialog.</li>
        </ul>
      </DocsSection>

      <DocsSection title="When not to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>A horizontal group — Cluster.</li>
          <li>Equal columns that should become a stack at a width — Switcher.</li>
        </ul>
      </DocsSection>

      <DocsSection title="Props">
        <PropsTable
          rows={[
            {
              prop: "space",
              type: spacingType,
              default: '"4"',
              description: "Gap. Same scale as Tailwind gap-4 / p-4.",
            },
            {
              prop: "align",
              type: '"start" | "center" | "end" | "baseline" | "stretch"',
              default: '"stretch"',
              description: "How children align on the cross axis.",
            },
            {
              prop: "splitAfter",
              type: "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8",
              description:
                "After this child, push the rest to the bottom. Give the Stack a min-height (for example className=\"min-h-48\").",
            },
            {
              prop: "as",
              type: "ElementType",
              default: '"div"',
              description: 'Render a different element. as="form" for stacked fields.',
            },
            {
              prop: "asChild",
              type: "boolean",
              default: "false",
              description: "Apply the layout to a single child instead of wrapping it.",
            },
          ]}
        />
      </DocsSection>

      <DocsSection title="Examples">
        <Example
          label="Default gap is space=4."
          code={`<Stack space="4">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</Stack>`}
        >
          <Stack space="4">
            <DemoBox>One</DemoBox>
            <DemoBox>Two</DemoBox>
            <DemoBox>Three</DemoBox>
          </Stack>
        </Example>
        <Example
          label="A larger space between sections, a tighter Stack inside each field."
          code={`<Stack as="form" space="6">
  <Stack space="2">
    <Label htmlFor="name">Name</Label>
    <Input id="name" />
  </Stack>
  <Stack space="2">
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" />
  </Stack>
  <Button type="submit">Submit</Button>
</Stack>`}
        >
          <Stack as="form" space="6" className="max-w-sm">
            <Stack space="2">
              <Label htmlFor="docs-name">Name</Label>
              <Input id="docs-name" />
            </Stack>
            <Stack space="2">
              <Label htmlFor="docs-message">Message</Label>
              <Textarea id="docs-message" />
            </Stack>
            <Button type="submit">Submit</Button>
          </Stack>
        </Example>
        <Example
          label="splitAfter={1} on a tall stack keeps later children at the end."
          code={`<Stack space="3" splitAfter={1} className="min-h-48">
  <div>Nav</div>
  <div>Sign out</div>
</Stack>`}
        >
          <Stack space="3" splitAfter={1} className="min-h-48 rounded-md border p-3">
            <DemoBox>Nav</DemoBox>
            <DemoBox>Sign out</DemoBox>
          </Stack>
        </Example>
      </DocsSection>

      <DocsSection title="Instead of">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`// Tailwind column
<div className="flex flex-col gap-4">…</div>

// Stack
<Stack space="4">…</Stack>`}</code>
        </pre>
      </DocsSection>
    </DocsArticle>
  )
}
