import Link from "next/link"

import { DemoBox } from "@/components/docs/demo-box"
import { Example } from "@/components/docs/example"
import {
  DocsArticle,
  DocsSection,
  Install,
  PageHeader,
  Usage,
} from "@/components/docs/page-header"
import { decisionTree, primitives } from "@/lib/docs"
import { Aside } from "@/registry/new-york/ui/aside"
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Stack } from "@/registry/new-york/ui/stack"

export default function IntroductionPage() {
  return (
    <DocsArticle>
      <PageHeader title="Introduction">
        <p>
          shadcn-layout is seven layout components for apps that already use
          shadcn/ui. They sit around Button, Dialog, Card, and the app{" "}
          <code>Sidebar</code> — they do not replace them.
        </p>
        <p>
          Use them instead of repeating <code>flex flex-col gap-4</code> and{" "}
          <code>md:flex-row</code> for the same structures. They wrap because of
          their own container, not because of a breakpoint. That idea is{" "}
          <Link href="/intrinsic" className="underline-offset-4 hover:underline">
            intrinsic design
          </Link>
          . For why a class string is a poor way to write the layout itself, see{" "}
          <Link href="/tailwind" className="underline-offset-4 hover:underline">
            Why not Tailwind?
          </Link>
          . For those structures as landing pages, dashboards, and settings, see the{" "}
          <Link href="/showcase" className="underline-offset-4 hover:underline">
            showcase
          </Link>
          .
        </p>
      </PageHeader>

      <DocsSection id="install" title="Install">
        <Install item="layouts" full />
      </DocsSection>

      <DocsSection id="usage" title="Usage">
        <Usage item="layouts" />
        <Example
          label="A settings header and an in-page split. Narrow the pane to see the side wrap."
          code={`import { Aside, Cluster, Stack } from "@/components/ui/layouts"

<Stack space="8">
  <Cluster justify="between">
    <h1>Settings</h1>
    <button>Save</button>
  </Cluster>
  <Aside sideWidth="72">
    <Aside.Side as="nav">{/* subnav */}</Aside.Side>
    <Aside.Content>{/* page */}</Aside.Content>
  </Aside>
</Stack>`}
        >
          <Stack space="6">
            <Cluster justify="between">
              <span className="text-sm font-medium">Settings</span>
              <span className="rounded-md border px-2 py-1 text-xs">Save</span>
            </Cluster>
            <Aside sideWidth="48" space="4">
              <Aside.Side as="nav">
                <Stack space="2">
                  <DemoBox>General</DemoBox>
                  <DemoBox>Team</DemoBox>
                </Stack>
              </Aside.Side>
              <Aside.Content>
                <DemoBox>Page body</DemoBox>
              </Aside.Content>
            </Aside>
          </Stack>
        </Example>
      </DocsSection>

      <DocsSection id="how" title="How these work">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            <code>space=&quot;4&quot;</code> is the same length as Tailwind{" "}
            <code>gap-4</code>. Width-like props (<code>sideWidth</code>,{" "}
            <code>min</code>, <code>threshold</code>) take the same keys (
            <code>&quot;72&quot;</code> is <code>w-72</code>) or a CSS length.
          </li>
          <li>
            Wrapping is based on the component’s container, not{" "}
            <code>md:</code> breakpoints. See{" "}
            <Link href="/intrinsic" className="underline-offset-4 hover:underline">
              Intrinsic design
            </Link>
            .
          </li>
          <li>
            <code>className</code> is for color, radius, and min-height. Gap and
            direction are already the component’s job — extra{" "}
            <code>flex</code> / <code>gap-*</code> classes will not change them.
          </li>
        </ul>
      </DocsSection>

      <DocsSection id="primitives" title="Primitives">
        <p className="text-sm text-muted-foreground">
          A page header is Cluster. A settings split is Aside. You do not need
          a new component for those — compose these seven.
        </p>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-3 py-2 font-medium">Name</th>
                <th className="px-3 py-2 font-medium">Role</th>
              </tr>
            </thead>
            <tbody>
              {primitives.map((item) => (
                <tr key={item.name} className="border-b last:border-0">
                  <td className="px-3 py-2">
                    <Link href={item.href} className="font-medium underline-offset-4 hover:underline">
                      {item.name}
                    </Link>
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">{item.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection id="which" title="Which primitive?">
        <p className="text-sm text-muted-foreground">
          Start here instead of reaching for flex utilities.
        </p>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-3 py-2 font-medium">If you need</th>
                <th className="px-3 py-2 font-medium">Use</th>
              </tr>
            </thead>
            <tbody>
              {decisionTree.map((row) => (
                <tr key={row.if} className="border-b last:border-0">
                  <td className="px-3 py-2">{row.if}</td>
                  <td className="px-3 py-2 font-medium">{row.then}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>

      <DocsSection id="aside-sidebar" title="Aside and Sidebar">
        <p className="text-sm text-muted-foreground">
          shadcn already ships <code>Sidebar</code> for the app shell: icon rail,
          collapse, mobile sheet. <Link href="/aside" className="underline-offset-4 hover:underline">Aside</Link>{" "}
          is a split <em>inside</em> a page — settings links beside a form, filters
          beside results. Use both in the same app. They are not interchangeable.
        </p>
      </DocsSection>

      <DocsSection id="agents" title="For your agent">
        <p className="text-sm text-muted-foreground">
          After install, copy{" "}
          <a href="/agents.md" className="underline-offset-4 hover:underline">
            /agents.md
          </a>{" "}
          into your app’s <code>AGENTS.md</code> or{" "}
          <code>.cursor/rules/layout-primitives.mdc</code> so generated UI keeps
          using these names. Short reference:{" "}
          <a href="/llms.txt" className="underline-offset-4 hover:underline">
            /llms.txt
          </a>
          . Examples:{" "}
          <a href="/llms-full.txt" className="underline-offset-4 hover:underline">
            /llms-full.txt
          </a>
          . Walkthrough:{" "}
          <Link href="/agents" className="underline-offset-4 hover:underline">
            For agents
          </Link>
          .
        </p>
      </DocsSection>
    </DocsArticle>
  )
}
