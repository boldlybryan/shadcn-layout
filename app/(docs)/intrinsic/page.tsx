import type { Metadata } from "next"
import Link from "next/link"

import { DemoBox } from "@/components/docs/demo-box"
import { Example } from "@/components/docs/example"
import { DocsArticle, DocsSection, PageHeader } from "@/components/docs/page-header"
import { Switcher } from "@/registry/new-york/ui/switcher"

export const metadata: Metadata = { title: "Intrinsic design" }

export default function IntrinsicPage() {
  return (
    <DocsArticle>
      <PageHeader title="Intrinsic design">
        <p>
          A layout is intrinsic when it takes its shape from the space it sits
          in, and from the size of its children — not from the width of the
          browser window. The same Switcher in a wide settings pane and a
          narrow dialog should wrap at the same container width, even if the
          window has not changed.
        </p>
      </PageHeader>

      <DocsSection title="Why not a breakpoint?">
        <p className="text-sm text-muted-foreground">
          <code>md:flex-row</code> means “row when the <em>window</em> is at
          least medium.” That fails as soon as the same block lives in a card,
          a dialog, or a split pane: the window is wide, the box is not, and
          the row still forces itself.
        </p>
        <p className="text-sm text-muted-foreground">
          These components ask a smaller question: how wide is <em>this</em>{" "}
          box, and how wide do these children need to be? The wrap is CSS
          (flex-basis, <code>minmax</code>, a minimum width on a pane). There is
          no media query.
        </p>
      </DocsSection>

      <DocsSection title="Watch the container, not the window">
        <p className="text-sm text-muted-foreground">
          Narrow this docs column. The three panes stack when <em>their
          parent</em> is under <code>24rem</code>, whether or not you resized
          the browser.
        </p>
        <Example
          label="Switcher wraps at a container threshold. There is no md: breakpoint."
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

      <DocsSection title="Why they have names">
        <p className="text-sm text-muted-foreground">
          Stack is always a column. Cluster always wraps. Aside wraps when the
          growing pane would get too thin. Switcher wraps all children at once.
          Grid peels off columns one by one. Those are different behaviors.
          Writing <code>flex</code> and <code>md:</code> by hand hides which one
          you meant.
        </p>
        <p className="text-sm text-muted-foreground">
          Props only set custom properties (<code>space</code>,{" "}
          <code>threshold</code>, <code>sideWidth</code>). The wrap still
          happens in CSS. The seven names are on the{" "}
          <Link href="/" className="underline-offset-4 hover:underline">
            Introduction
          </Link>
          .
        </p>
      </DocsSection>

      <DocsSection title="Every Layout">
        <p className="text-sm text-muted-foreground">
          The idea, the names, and the CSS that makes them work come from{" "}
          <a
            href="https://every-layout.dev/"
            className="underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Every Layout
          </a>
          , by Heydon Pickering and Andy Bell. They showed that a few
          composition primitives — not more breakpoints — are how you layout
          for containers you do not control.
        </p>
        <p className="text-sm text-muted-foreground">
          This kit is that work as React components you install next to Button
          and Card. Their complementary column is called Sidebar; shadcn already
          uses that name for app chrome, so the in-page split here is{" "}
          <Link href="/aside" className="underline-offset-4 hover:underline">
            Aside
          </Link>
          . The algorithms are theirs; the React and Tailwind token wiring is
          this project.
        </p>
      </DocsSection>
    </DocsArticle>
  )
}
