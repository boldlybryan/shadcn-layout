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
import { Center } from "@/registry/new-york/ui/center"
import { Stack } from "@/registry/new-york/ui/stack"

export const metadata: Metadata = { title: "Center" }

export default function CenterPage() {
  return (
    <DocsArticle>
      <PageHeader title="Center">
        <p>
          A measure-constrained column, centered on the inline axis. It uses{" "}
          <code>box-sizing: content-box</code> so <code>gutters</code> sit
          outside the measure instead of eating into it.
        </p>
      </PageHeader>

      <DocsSection title="Install">
        <Install item="center" />
      </DocsSection>

      <DocsSection title="When to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Reading width for article or settings copy.</li>
          <li>
            Page content columns. Named measures (<code>prose</code>,{" "}
            <code>lg</code>, <code>3xl</code>, <code>5xl</code>, <code>7xl</code>)
            match the Tailwind max-width scale.
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="When not to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Centering a single icon or button on both axes — Cover, or a one-off.</li>
          <li>Full-bleed dashboards. Omit Center and let the pane fill.</li>
        </ul>
      </DocsSection>

      <DocsSection title="Props">
        <PropsTable
          rows={[
            {
              prop: "measure",
              type: '"sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "prose" | CSS length',
              default: '"prose"',
              description: 'Max inline size. Named keys map to Tailwind max-width. "prose" is 65ch. Any CSS length also works.',
            },
            {
              prop: "gutters",
              type: spacingType,
              default: '"4"',
              description: "Inline padding added outside the measure.",
            },
            {
              prop: "intrinsic",
              type: "boolean",
              default: "false",
              description: "Also center children on the block axis (flex column, align center).",
            },
          ]}
        />
      </DocsSection>

      <DocsSection title="Examples">
        <Example
          label="Default measure is prose (65ch)."
          code={`<Center measure="prose" gutters="4">
  <p>Center limits line length. Gutters sit outside that measure.</p>
</Center>`}
        >
          <Center measure="prose" gutters="4">
            <Stack space="3">
              <p className="text-sm">
                Center limits line length. Named measures (prose, lg, 3xl, 7xl)
                map to the Tailwind max-width scale; any CSS length also works.
              </p>
              <DemoBox>Inside the measure</DemoBox>
            </Stack>
          </Center>
        </Example>
      </DocsSection>

      <DocsSection title="Do not">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`// NO — mx-auto inside a flex column often fails to center
<div className="flex flex-col">
  <div className="max-w-3xl mx-auto">…</div>
</div>

// YES
<Center measure="3xl" gutters="8">…</Center>`}</code>
        </pre>
      </DocsSection>
    </DocsArticle>
  )
}
