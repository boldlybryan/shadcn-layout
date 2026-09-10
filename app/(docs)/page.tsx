import Link from "next/link"

import { DemoBox } from "@/components/docs/demo-box"
import { Example } from "@/components/docs/example"
import { DocsArticle, DocsSection, PageHeader } from "@/components/docs/page-header"
import { installCmd, primitives } from "@/lib/docs"
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
          <code>md:flex-row</code> folklore for the same five structures.
        </p>
      </PageHeader>

      <DocsSection id="install" title="Install">
        <p className="text-sm text-muted-foreground">
          Copy into the host app with the shadcn CLI. One primitive, or the
          whole kit.
        </p>
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
          <code>{`${installCmd("stack")}\n${installCmd("layouts")}`}</code>
        </pre>
        <p className="text-sm text-muted-foreground">
          Files land next to the host <code>ui</code> alias (usually{" "}
          <code>components/ui</code>). Spacing uses the host Tailwind scale:{" "}
          <code>space=&quot;4&quot;</code> is the same length as <code>gap-4</code>.
        </p>
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

      <DocsSection id="contract" title="How to use them">
        <Stack space="3">
          <p className="text-sm text-muted-foreground">
            Algorithms live in CSS. Props only set custom properties.{" "}
            <code>className</code> on a layout root is for exceptions (width,
            background), not for gap, direction, or wrap. Primitive CSS is
            unlayered, so those utilities will not override the algorithm.
          </p>
          <Example
            label="Named structure instead of utility soup."
            code={`<Stack space="8">
  <Cluster justify="between">
    <h1>Settings</h1>
    <button>Save</button>
  </Cluster>
  <Aside sideWidth="18rem">
    <Aside.Side>{/* subnav */}</Aside.Side>
    <Aside.Content>{/* page */}</Aside.Content>
  </Aside>
</Stack>`}
          >
            <Stack space="4">
              <Cluster justify="between">
                <span className="text-sm font-medium">Settings</span>
                <span className="rounded-md border px-2 py-1 text-xs">Save</span>
              </Cluster>
              <DemoBox>Page body</DemoBox>
            </Stack>
          </Example>
        </Stack>
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
