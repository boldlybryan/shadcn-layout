import type { Metadata } from "next"

import { DemoBox } from "@/components/docs/demo-box"
import { Example } from "@/components/docs/example"
import { DocsArticle, DocsSection, PageHeader } from "@/components/docs/page-header"
import { Aside } from "@/registry/new-york/ui/aside"
import { Button } from "@/registry/new-york/ui/button"
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Stack } from "@/registry/new-york/ui/stack"
import { Textarea } from "@/registry/new-york/ui/textarea"

export const metadata: Metadata = { title: "Recipes" }

export default function RecipesPage() {
  return (
    <DocsArticle>
      <PageHeader title="Recipes">
        <p>
          Repeated product layouts, composed from primitives. Use these instead
          of inventing new names. Dialog and dropdown chrome still come from
          shadcn; only the spatial recipe is here.
        </p>
      </PageHeader>

      <DocsSection title="Form">
        <p className="text-sm text-muted-foreground">
          Outer Stack for the form. Nested Stack per field (label + control).
        </p>
        <Example
          code={`<Stack as="form" space="6">
  <Stack space="2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" />
  </Stack>
  <Button type="submit">Save</Button>
</Stack>`}
        >
          <Stack as="form" space="6" className="max-w-sm">
            <Stack space="2">
              <Label htmlFor="recipe-email">Email</Label>
              <Input id="recipe-email" type="email" />
            </Stack>
            <Stack space="2">
              <Label htmlFor="recipe-bio">Bio</Label>
              <Textarea id="recipe-bio" />
            </Stack>
            <Button type="submit">Save</Button>
          </Stack>
        </Example>
      </DocsSection>

      <DocsSection title="Page header">
        <p className="text-sm text-muted-foreground">
          Cluster between: title on the start, actions on the end.
        </p>
        <Example
          code={`<Cluster justify="between" as="header" space="4">
  <h1>Campaigns</h1>
  <Cluster space="2">
    <Button variant="outline">Export</Button>
    <Button>New</Button>
  </Cluster>
</Cluster>`}
        >
          <Cluster justify="between" as="header" space="4">
            <span className="text-sm font-medium">Campaigns</span>
            <Cluster space="2">
              <Button variant="outline" size="sm">
                Export
              </Button>
              <Button size="sm">New</Button>
            </Cluster>
          </Cluster>
        </Example>
      </DocsSection>

      <DocsSection title="Dialog actions">
        <p className="text-sm text-muted-foreground">
          Inside shadcn DialogContent: Stack for title + body, Cluster end for
          buttons. Do not restyle Dialog itself.
        </p>
        <Example
          code={`<Stack space="4">
  <h2>Edit profile</h2>
  <p>Make changes. Close with the buttons or Escape.</p>
  <Cluster justify="end" space="2">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </Cluster>
</Stack>`}
        >
          <div className="max-w-md rounded-lg border p-6">
            <Stack space="4">
              <h2 className="text-lg font-semibold">Edit profile</h2>
              <p className="text-sm text-muted-foreground">
                Make changes. Close with the buttons or Escape.
              </p>
              <Cluster justify="end" space="2">
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </Cluster>
            </Stack>
          </div>
        </Example>
      </DocsSection>

      <DocsSection title="Settings subnav">
        <p className="text-sm text-muted-foreground">
          Aside inside page content. The host app Sidebar stays around the page.
          You can reuse SidebarMenu* visuals inside Aside.Side; the layout is
          still Aside.
        </p>
        <Example
          code={`<Aside sideWidth="12rem" space="4">
  <Aside.Side>{/* section links */}</Aside.Side>
  <Aside.Content>{/* General / Team form */}</Aside.Content>
</Aside>`}
        >
          <Aside sideWidth="12rem" space="4">
            <Aside.Side>
              <Stack space="2">
                <DemoBox>General</DemoBox>
                <DemoBox>Team</DemoBox>
              </Stack>
            </Aside.Side>
            <Aside.Content>
              <DemoBox>Organization name, slug, …</DemoBox>
            </Aside.Content>
          </Aside>
        </Example>
      </DocsSection>
    </DocsArticle>
  )
}
