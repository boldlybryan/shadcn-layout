import type { Metadata } from "next"

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
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Cover } from "@/registry/new-york/ui/cover"

export const metadata: Metadata = { title: "Cover" }

export default function CoverPage() {
  return (
    <DocsArticle>
      <PageHeader title="Cover">
        <p>
          A column that fills at least <code>minHeight</code> (default{" "}
          <code>100dvh</code>). Header and footer are optional siblings.{" "}
          <code>Cover.Child</code> is vertically centered in the remaining space.
        </p>
      </PageHeader>

      <DocsSection title="Install">
        <Install item="cover" />
      </DocsSection>

      <DocsSection title="Usage">
        <Usage item="cover" />
      </DocsSection>

      <DocsSection title="When to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Auth screens, empty states, error states that should fill the viewport.</li>
          <li>A hero whose middle message stays centered between chrome.</li>
        </ul>
      </DocsSection>

      <DocsSection title="When not to use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Ordinary page body — Stack + Center.</li>
        </ul>
      </DocsSection>

      <DocsSection title="Props">
        <PropsTable
          rows={[
            {
              prop: "minHeight",
              type: lengthType,
              default: '"100dvh"',
              description:
                "Minimum block size of the cover. Spacing key or CSS length.",
            },
            {
              prop: "space",
              type: spacingType,
              default: '"4"',
              description:
                "Padding, and the minimum gap between header, Cover.Child, and footer.",
            },
          ]}
        />
        <p className="text-sm text-muted-foreground">
          Mark the centered node with <code>Cover.Child</code>. Other children
          become the header (first) and footer (last).
        </p>
      </DocsSection>

      <DocsSection title="Examples">
        <Example
          label="minHeight is 20rem here so it fits the docs page. Default is 100dvh."
          code={`<Cover minHeight="20rem" space="4">
  <Cluster justify="between">
    <span>Header</span>
    <span>Action</span>
  </Cluster>
  <Cover.Child>
    <p>Centered child</p>
  </Cover.Child>
  <p>Footer</p>
</Cover>`}
        >
          <Cover minHeight="20rem" space="4" className="rounded-md border">
            <Cluster justify="between">
              <span className="text-sm text-muted-foreground">Header</span>
              <span className="text-sm text-muted-foreground">Action</span>
            </Cluster>
            <Cover.Child>
              <p className="text-center text-lg font-medium">Centered child</p>
            </Cover.Child>
            <p className="text-sm text-muted-foreground">Footer</p>
          </Cover>
        </Example>
      </DocsSection>

      <DocsSection title="Do not">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`// NO
<div className="flex min-h-screen flex-col items-center justify-center">…</div>

// YES
<Cover>
  <Cover.Child>…</Cover.Child>
</Cover>`}</code>
        </pre>
      </DocsSection>
    </DocsArticle>
  )
}
