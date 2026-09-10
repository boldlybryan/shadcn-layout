import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"

import { DemoBox } from "@/components/docs/demo-box"
import { DocsCode } from "@/components/docs/code-block"
import { DocsArticle, DocsSection, PageHeader } from "@/components/docs/page-header"
import { Grid } from "@/registry/new-york/ui/grid"
import { Stack } from "@/registry/new-york/ui/stack"
import { Switcher } from "@/registry/new-york/ui/switcher"

export const metadata: Metadata = { title: "Why not Tailwind?" }

function Resizable({
  caption,
  children,
}: {
  caption: string
  children: ReactNode
}) {
  return (
    <Stack space="2">
      <div className="h-auto w-[20rem] min-w-[10rem] max-w-full resize-x overflow-auto rounded-lg border bg-background p-3">
        {children}
      </div>
      <p className="text-xs text-muted-foreground">{caption}</p>
    </Stack>
  )
}

export default function TailwindLayoutPage() {
  return (
    <DocsArticle>
      <PageHeader title="Why not Tailwind?">
        <p>
          Tailwind is a way to write CSS one property at a time. Layout is not
          a property. It is an algorithm: given this box, and these children,
          how do they share the space — and what happens when they no longer
          fit?
        </p>
        <p>
          Using utilities for that job does not fail because Tailwind is poorly
          made. It fails because the two questions are different.
        </p>
      </PageHeader>

      <DocsSection title="A class string is a snapshot">
        <p className="text-sm text-muted-foreground">
          <code>flex flex-col gap-4 md:flex-row</code> says: this node is a
          flex container, a column, with this gap, and a row if the{" "}
          <em>viewport</em> is at least medium. That is a snapshot of computed
          style. It is a good way to set color, type, and spacing. It is a poor
          way to record a layout, because a layout has to keep working when the
          same block is dropped into a card, a dialog, or a split pane.
        </p>
        <p className="text-sm text-muted-foreground">
          The window did not change. The box did.
        </p>
      </DocsSection>

      <DocsSection title="Breakpoints belong to the window">
        <p className="text-sm text-muted-foreground">
          <code>sm:</code>, <code>md:</code>, and <code>lg:</code> are media
          queries on the viewport. Nested UI almost never has the viewport as
          its parent. A settings form beside a nav, a picker in a dialog, a
          toolbar in a card — each of those is a container with its own width.
        </p>
        <p className="text-sm text-muted-foreground">
          On a wide laptop, <code>md:flex-row</code> keeps two panes in a row
          even after you stuff them into a 20rem panel. They do not wrap. They
          squash. Widen the window past <code>md</code> if you need to, then
          drag the box; leave the browser window alone.
        </p>
        <Resizable caption="Same container. The first layout listens to the window. The second listens to this box.">
          <Stack space="4">
            <p className="text-xs font-medium text-muted-foreground">
              flex flex-col md:flex-row
            </p>
            <div className="flex flex-col gap-2 md:flex-row">
              <DemoBox className="min-w-0 flex-1">Primary</DemoBox>
              <DemoBox className="min-w-0 flex-1">Secondary</DemoBox>
            </div>
            <p className="text-xs font-medium text-muted-foreground">
              Switcher, threshold 24rem
            </p>
            <Switcher threshold="24rem" space="2">
              <DemoBox>Primary</DemoBox>
              <DemoBox>Secondary</DemoBox>
            </Switcher>
          </Stack>
        </Resizable>
        <p className="text-sm text-muted-foreground">
          Container-query utilities (<code>@container</code>,{" "}
          <code>@md:</code>) ask a better question — <em>this</em> box, not the
          window — but they still switch at a discrete step. They do not say
          “stay a row until a child would be thinner than this, then wrap.”
          That condition is a relationship between several CSS properties
          (flex-wrap, flex-basis, a minimum width). It is not a breakpoint, so
          it is not a Tailwind variant.
        </p>
      </DocsSection>

      <DocsSection title="Column count is a result">
        <p className="text-sm text-muted-foreground">
          <code>grid-cols-3 lg:grid-cols-4</code> picks how many columns the
          window is allowed to have. You then maintain that table as the UI
          grows: dialogs, side panes, split views. An intrinsic grid asks a
          smaller question: each cell at least this wide; however many fit.
          The count falls out of the container.
        </p>
        <Resizable caption="Six cells. The first layout promised three columns. The second only promised a minimum width.">
          <Stack space="4">
            <p className="text-xs font-medium text-muted-foreground">
              grid grid-cols-3
            </p>
            <div className="grid grid-cols-3 gap-2">
              {["A", "B", "C", "D", "E", "F"].map((label) => (
                <DemoBox key={label} className="py-3 text-center">
                  {label}
                </DemoBox>
              ))}
            </div>
            <p className="text-xs font-medium text-muted-foreground">
              Grid, min 8rem
            </p>
            <Grid min="8rem" space="2">
              {["A", "B", "C", "D", "E", "F"].map((label) => (
                <DemoBox key={label} className="py-3 text-center">
                  {label}
                </DemoBox>
              ))}
            </Grid>
          </Stack>
        </Resizable>
      </DocsSection>

      <DocsSection title="The layout has no name">
        <p className="text-sm text-muted-foreground">
          A toolbar, a tag list, and a label sitting beside a control can all
          look like this:
        </p>
        <DocsCode>{`flex flex-wrap items-center gap-2`}</DocsCode>
        <p className="text-sm text-muted-foreground">
          When something wraps too early, or not at all, there is no name to
          search for — only a string that has been copied and slightly changed in
          a dozen files. You cannot tell, from the classes, which behavior was
          intended.
        </p>
        <p className="text-sm text-muted-foreground">
          Named primitives are that contract.{" "}
          <Link href="/cluster" className="underline-offset-4 hover:underline">
            Cluster
          </Link>{" "}
          always wraps.{" "}
          <Link href="/switcher" className="underline-offset-4 hover:underline">
            Switcher
          </Link>{" "}
          wraps every child at once when this box is under a threshold.{" "}
          <Link href="/grid" className="underline-offset-4 hover:underline">
            Grid
          </Link>{" "}
          peels off columns one by one. Those are different algorithms. The
          class string hides which one you meant.
        </p>
      </DocsSection>

      <DocsSection title="Utilities overwrite each other">
        <p className="text-sm text-muted-foreground">
          Tailwind is built so the last <code>gap-*</code> or{" "}
          <code>flex-col</code> wins. That is the right rule for “I meant this
          color.” A layout algorithm needs several properties to stay in a
          relationship. One extra class from a later edit, a <code>cn()</code>,
          or a parent is enough to break the wrap. There is no type error.
        </p>
      </DocsSection>

      <DocsSection title="Tailwind still belongs here">
        <p className="text-sm text-muted-foreground">
          Spacing, type, color, radius, and the look of Card and Button are
          Tailwind’s job. These components use the same spacing scale on
          purpose: <code>space=&quot;4&quot;</code> is <code>gap-4</code>.
          Width-like props take the same keys as <code>w-72</code>.
        </p>
        <p className="text-sm text-muted-foreground">
          Use Tailwind for how things look. Use a named primitive for how they
          share space. The idea those primitives implement is{" "}
          <Link href="/intrinsic" className="underline-offset-4 hover:underline">
            intrinsic design
          </Link>
          .
        </p>
      </DocsSection>
    </DocsArticle>
  )
}
