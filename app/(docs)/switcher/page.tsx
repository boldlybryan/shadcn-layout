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
import { Switcher } from "@/registry/new-york/ui/switcher"

export const metadata: Metadata = { title: "Switcher" }

export default function SwitcherPage() {
  return (
    <DocsArticle>
      <PageHeader title="Switcher">
        <p>
          Equal-width columns that become a stack when <em>this container</em>{" "}
          (not the viewport) is narrower than <code>threshold</code>. Prefer
          this over <code>md:flex-row</code>. The switch is flex-basis math, not
          a media query.
        </p>
      </PageHeader>

      <DocsSection title="Install">
        <Install item="switcher" />
      </DocsSection>

      <DocsSection title="Usage">
        <Usage item="switcher" />
      </DocsSection>

      <DocsSection title="When to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Two or three equal panes that should stack when they cannot sit in a row.</li>
          <li>Form rows that are side-by-side on wide containers, stacked on narrow ones.</li>
        </ul>
      </DocsSection>

      <DocsSection title="When not to use">
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground text-sm">
          <li>A fixed sidebar plus a growing pane — Aside.</li>
          <li>Cards with a minimum width in a wrapping grid — Grid.</li>
        </ul>
      </DocsSection>

      <DocsSection title="Props">
        <PropsTable
          rows={[
            {
              prop: "threshold",
              type: lengthType,
              default: '"30rem"',
              description:
                'Container width at which children stack. Spacing key or CSS length.',
            },
            {
              prop: "space",
              type: spacingType,
              default: '"4"',
              description: "Gap between children.",
            },
            {
              prop: "limit",
              type: "2 | 3 | 4 | 5 | 6",
              description:
                "If there are more than this many children, force them to wrap (all go full width).",
            },
          ]}
        />
      </DocsSection>

      <DocsSection title="Examples">
        <Example
          label="threshold=24rem. Narrow this column until the three panes stack."
          code={`<Switcher threshold="24rem" space="4">
  <div>Primary</div>
  <div>Secondary</div>
  <div>Tertiary</div>
</Switcher>`}
        >
          <Switcher threshold="24rem" space="4">
            <DemoBox>Primary</DemoBox>
            <DemoBox>Secondary</DemoBox>
            <DemoBox>Tertiary</DemoBox>
          </Switcher>
        </Example>
      </DocsSection>

      <DocsSection title="Do not">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`// NO — viewport folklore
<div className="flex flex-col gap-4 md:flex-row">…</div>

// YES
<Switcher threshold="30rem" space="4">…</Switcher>`}</code>
        </pre>
      </DocsSection>
    </DocsArticle>
  )
}
