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
import { lengthType, spacingType } from "@/lib/docs"
import { Grid } from "@/registry/new-york/ui/grid"

export const metadata: Metadata = { title: "Grid" }

export default function GridPage() {
  return (
    <DocsArticle>
      <PageHeader title="Grid">
        <p>
          As many columns as fit, each at least <code>min</code> wide. Use it
          when you do not know the column count in advance. The class on the
          element is <code>layout-grid</code>, so it does not fight Tailwind’s{" "}
          <code>grid</code> utility.
        </p>
      </PageHeader>

      <DocsSection title="Install">
        <Install item="grid" />
      </DocsSection>

      <DocsSection title="Usage">
        <Usage item="grid" />
      </DocsSection>

      <DocsSection title="When to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>A collection of cards or tiles with a minimum width.</li>
          <li>When the number of columns should follow the container, not a breakpoint.</li>
        </ul>
      </DocsSection>

      <DocsSection title="When not to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>A fixed 12-column or 3-column layout — Tailwind <code>grid-cols-*</code> is fine.</li>
          <li>Two panes with a declared side width — Aside.</li>
        </ul>
      </DocsSection>

      <DocsSection title="Props">
        <PropsTable
          rows={[
            {
              prop: "min",
              type: lengthType,
              default: '"16rem"',
              description:
                'Minimum column width. "64" is w-64; "16rem" also works.',
            },
            {
              prop: "space",
              type: spacingType,
              default: '"4"',
              description: "Gap between cells.",
            },
          ]}
        />
      </DocsSection>

      <DocsSection title="Examples">
        <Example
          label="min=10rem so extra columns show up on a wide pane."
          code={`<Grid min="10rem" space="4">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
</Grid>`}
        >
          <Grid min="10rem" space="4">
            {["A", "B", "C", "D", "E", "F"].map((item) => (
              <DemoBox key={item}>{item}</DemoBox>
            ))}
          </Grid>
        </Example>
      </DocsSection>

      <DocsSection title="Instead of">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`// Tailwind grid — fixed columns, viewport breakpoints
<div className="grid grid-cols-1 gap-4 md:grid-cols-3">…</div>

// Grid — as many min-wide columns as fit
<Grid min="16rem">…</Grid>`}</code>
        </pre>
      </DocsSection>
    </DocsArticle>
  )
}
