import type { Metadata } from "next"

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
import { Cluster } from "@/registry/new-york/ui/cluster"

export const metadata: Metadata = { title: "Cluster" }

export default function ClusterPage() {
  return (
    <DocsArticle>
      <PageHeader title="Cluster">
        <p>
          A horizontal flex row that always wraps. Use it for toolbars, tags,
          checkbox + label, page headers, and dialog actions.
        </p>
      </PageHeader>

      <DocsSection title="Install">
        <Install item="cluster" />
      </DocsSection>

      <DocsSection title="When to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>A row of buttons or links that should wrap instead of overflow.</li>
          <li>
            Space-between headers: title on the start edge, actions on the end.
          </li>
          <li>A control sitting beside its label (checkbox, switch).</li>
        </ul>
      </DocsSection>

      <DocsSection title="When not to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            Vertical rhythm — Stack. Cluster does not take{" "}
            <code>direction</code> or <code>wrap={"{false}"}</code>. Wrapping is
            the point.
          </li>
          <li>Equal columns that collapse at a width threshold — Switcher.</li>
        </ul>
      </DocsSection>

      <DocsSection title="Props">
        <PropsTable
          rows={[
            {
              prop: "space",
              type: spacingType,
              default: '"4"',
              description: 'Gap. Use "0" when items should sit flush (segmented controls).',
            },
            {
              prop: "justify",
              type: '"start" | "center" | "end" | "between"',
              default: '"start"',
              description: "Main-axis alignment. between is headers; end is dialog actions.",
            },
            {
              prop: "align",
              type: '"start" | "center" | "end" | "baseline" | "stretch"',
              default: '"center"',
              description:
                "Cross-axis alignment. Center is the default so toolbars of buttons line up; use baseline for text-only clusters.",
            },
            {
              prop: "as",
              type: "ElementType",
              default: '"div"',
              description: "Polymorphic root (nav, header, …).",
            },
            {
              prop: "asChild",
              type: "boolean",
              default: "false",
              description: "Merge the layout onto a single child instead of wrapping.",
            },
          ]}
        />
      </DocsSection>

      <DocsSection title="Examples">
        <Example
          label="A cluster of actions."
          code={`<Cluster space="2">
  <Button>One</Button>
  <Button variant="outline">Two</Button>
  <Button variant="outline">Three</Button>
</Cluster>`}
        >
          <Cluster space="2">
            <Button>One</Button>
            <Button variant="outline">Two</Button>
            <Button variant="outline">Three</Button>
          </Cluster>
        </Example>
        <Example
          label="justify=between for a header: identity on the start, nav on the end."
          code={`<Cluster justify="between" as="header">
  <p>Logo</p>
  <Cluster as="nav" space="4">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </Cluster>
</Cluster>`}
        >
          <Cluster justify="between" as="header">
            <p className="text-sm font-medium">Logo</p>
            <Cluster as="nav" space="4">
              <a className="text-sm" href="#cluster">
                Home
              </a>
              <a className="text-sm" href="#cluster">
                About
              </a>
              <a className="text-sm" href="#cluster">
                Contact
              </a>
            </Cluster>
          </Cluster>
        </Example>
        <Example
          label="justify=end for actions in a dialog or sheet footer."
          code={`<Cluster justify="end" space="2">
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</Cluster>`}
        >
          <Cluster justify="end" space="2">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </Cluster>
        </Example>
        <Example
          label="Checkbox beside its label. Cluster, not a one-off flex."
          code={`<Cluster space="2">
  <input id="terms" type="checkbox" />
  <label htmlFor="terms">I agree to the terms</label>
</Cluster>`}
        >
          <Cluster space="2">
            <input id="docs-terms" type="checkbox" />
            <label htmlFor="docs-terms" className="text-sm">
              I agree to the terms
            </label>
          </Cluster>
        </Example>
        <Example
          label="space=0 for flush groups (segmented inputs)."
          code={`<Cluster space="0">
  <select>…</select>
  <input />
  <input />
</Cluster>`}
        >
          <Cluster space="0">
            <select className="h-9 rounded-l-md border bg-background px-2 text-sm">
              <option>CNAME</option>
              <option>A</option>
            </select>
            <input
              className="h-9 w-16 border-y bg-background px-2 text-sm"
              placeholder="@"
            />
            <input
              className="h-9 min-w-0 flex-1 rounded-r-md border bg-background px-2 text-sm"
              placeholder="192.0.2.1"
            />
          </Cluster>
        </Example>
      </DocsSection>

      <DocsSection title="Do not">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`// NO
<div className="flex flex-wrap items-center justify-between gap-4">…</div>

// YES
<Cluster justify="between" space="4">…</Cluster>`}</code>
        </pre>
      </DocsSection>
    </DocsArticle>
  )
}
