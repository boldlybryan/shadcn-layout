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
          A vertical flex container. Use it for forms, page sections, and any
          column of blocks that share one gap.
        </p>
      </PageHeader>

      <DocsSection title="Install">
        <Install item="stack" />
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
          <li>Horizontal groups — that is Cluster.</li>
          <li>Equal columns that should stack on a threshold — Switcher.</li>
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
              prop: "as",
              type: "ElementType",
              default: '"div"',
              description: 'Polymorphic root. Use as="form" for stacked fields.',
            },
            {
              prop: "className",
              type: "string",
              description: "Exceptions only (max-width, background). Not gap.",
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
          label="Looser sections use a larger space. Nest a tighter Stack for a label + field."
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
      </DocsSection>

      <DocsSection title="Do not">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`// NO — this is a Stack written from memory
<div className="flex flex-col gap-4">…</div>

// YES
<Stack space="4">…</Stack>`}</code>
        </pre>
      </DocsSection>
    </DocsArticle>
  )
}
