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
          A layout is intrinsic when it takes its shape from the space it is
          in, and from the size of its own children — not from the width of the
          viewport. The same Switcher in a wide settings pane and a narrow
          dialog should wrap at the same <em>container</em> threshold, even if
          the window has not changed.
        </p>
      </PageHeader>

      <DocsSection title="Against the breakpoint">
        <p className="text-sm text-muted-foreground">
          Most product CSS still says “row on medium screens, column on small
          ones.” That is a guess about the browser window. It fails as soon as
          the same block sits in a sidebar, a card, or a split pane: the
          viewport is wide, the container is not, and <code>md:flex-row</code>{" "}
          still forces a row.
        </p>
        <p className="text-sm text-muted-foreground">
          Intrinsic CSS asks a different question. How wide is <em>this</em>{" "}
          box? How wide do these children need to be? Flex-basis math,{" "}
          <code>minmax</code>, and <code>min-inline-size</code> already know. A
          media query is not required.
        </p>
      </DocsSection>

      <DocsSection title="Watch the container, not the window">
        <p className="text-sm text-muted-foreground">
          Narrow this column. The three panes below switch to a stack when{" "}
          <em>their parent</em> is under <code>24rem</code>, whether or not you
          resized the browser.
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

      <DocsSection title="Named algorithms">
        <p className="text-sm text-muted-foreground">
          Intrinsic behavior is easier to reuse when it has a name. Stack is
          always a column. Cluster always wraps. Aside wraps when the growing
          pane would drop below a minimum. Switcher wraps all children at once.
          Grid peels off columns one by one. Those are different algorithms.{" "}
          <code>flex</code> and <code>md:</code> collapse them into one folklore
          string.
        </p>
        <p className="text-sm text-muted-foreground">
          This kit copies those algorithms into React for shadcn apps. Props
          only set custom properties. The wrap still happens in CSS. See the{" "}
          <Link href="/" className="underline-offset-4 hover:underline">
            Introduction
          </Link>{" "}
          for the closed set of names.
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
          , by Heydon Pickering and Andy Bell. They showed that composition
          primitives — not more breakpoints — are how you layout for unknown
          containers.
        </p>
        <p className="text-sm text-muted-foreground">
          shadcn-layout is a translation of that work into components you can
          install next to Button and Card. The complementary column is called
          Aside here so it does not collide with shadcn’s app{" "}
          <code>Sidebar</code>. The algorithms are theirs; the React and token
          wiring is this project.
        </p>
      </DocsSection>
    </DocsArticle>
  )
}
