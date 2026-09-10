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
          shadcn-layout is a small set of layout ingredients for apps that already
          use shadcn/ui. It does not replace Button, Dialog, Card, or the app{" "}
          <code>Sidebar</code>. It names the spatial patterns those components sit
          inside.
        </p>
        <p>
          The job is to stop repeating <code>flex flex-col gap-4</code> and{" "}
          <code>md:flex-row</code> folklore for the same five structures. The
          primitives are{" "}
          <Link href="/intrinsic" className="underline-offset-4 hover:underline">
            intrinsic
          </Link>
          : they wrap because of their container, not because of a breakpoint.
        </p>
      </PageHeader>

      <DocsSection id="install" title="Install">
        <Install item="layouts" full />
      </DocsSection>

      <DocsSection id="usage" title="Usage">
        <Usage item="layouts" />
        <Example
          label="Named structure instead of utility soup. Resize until the side wraps."
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

      <DocsSection id="primitives" title="Primitives">
        <p className="text-sm text-muted-foreground">
          If a layout is not in this table, it is not a primitive. Do not invent a
          new name. Compose these.
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
          Pick from this list instead of writing flex. Algorithms live in CSS.
          Props only set custom properties. <code>className</code> on a layout
          root is for exceptions (width, background), not for gap, direction, or
          wrap. Primitive CSS is unlayered, so those utilities will not override the
          algorithm.
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

      <DocsSection id="agents" title="For your agent">
        <p className="text-sm text-muted-foreground">
          After install, copy{" "}
          <a href="/agents.md" className="underline-offset-4 hover:underline">
            /agents.md
          </a>{" "}
          into the consuming app’s <code>AGENTS.md</code> or{" "}
          <code>.cursor/rules/layout-primitives.mdc</code>. Machine dumps:{" "}
          <a href="/llms.txt" className="underline-offset-4 hover:underline">
            /llms.txt
          </a>{" "}
          (contract) and{" "}
          <a href="/llms-full.txt" className="underline-offset-4 hover:underline">
            /llms-full.txt
          </a>{" "}
          (few-shots). Human guide:{" "}
          <Link href="/agents" className="underline-offset-4 hover:underline">
            For agents
          </Link>
          .
        </p>
      </DocsSection>

      <DocsSection id="not" title="What this is not">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Not a second button/input library. Use shadcn for those.</li>
          <li>
            Not the shadcn <code>Sidebar</code>. That is app chrome. In-page
            complementary columns use <Link href="/aside" className="underline-offset-4 hover:underline">Aside</Link>.
          </li>
          <li>
            Not a Box/Card. Visual surfaces stay with shadcn <code>Card</code>.
          </li>
          <li>
            Do not add <code>wrap</code>, <code>direction</code>, or{" "}
            <code>grow</code> to every primitive. Each one has a short control
            surface on purpose.
          </li>
        </ul>
      </DocsSection>
    </DocsArticle>
  )
}
