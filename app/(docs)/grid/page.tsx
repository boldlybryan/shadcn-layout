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
import { lengthType, spacingType } from "@/lib/docs"
import { Grid } from "@/registry/new-york/ui/grid"

export const metadata: Metadata = { title: "Grid" }

export default function GridPage() {
  return (
    <DocsArticle>
      <PageHeader title="Grid">
        <p>
          An auto-fit grid. Each column is at least <code>min</code> wide, and
          as many columns fit as the container allows. The CSS class is{" "}
          <code>layout-grid</code>, not Tailwind&apos;s <code>grid</code>.
        </p>
      </PageHeader>

      <DocsSection title="Install">
        <Install item="grid" />
      </DocsSection>

      <DocsSection title="When to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>A collection of cards or tiles with a minimum width.</li>
          <li>When you do not know the column count in advance.</li>
        </ul>
      </DocsSection>

      <DocsSection title="When not to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>A fixed 12-column or 3-column marketing grid — Tailwind grid-cols-* is fine.</li>
          <li>Two panes with a declared sidebar width — Aside.</li>
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
                'Minimum track size before a column wraps. "64" is w-64; "16rem" also works.',
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
          label="min=10rem so you can see extra columns on a wide pane."
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

      <DocsSection title="Do not">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`// NO — class "grid" collides with Tailwind
<div className="grid">…</div>

// YES — the component applies layout-grid
<Grid min="16rem">…</Grid>`}</code>
        </pre>
      </DocsSection>
    </DocsArticle>
  )
}
