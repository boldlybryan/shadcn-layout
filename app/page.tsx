import * as React from "react"

import { OpenInV0Button } from "@/components/open-in-v0-button"
import { Aside } from "@/registry/new-york/ui/aside"
import { Center } from "@/registry/new-york/ui/center"
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Cover } from "@/registry/new-york/ui/cover"
import { Grid } from "@/registry/new-york/ui/grid"
import { Stack } from "@/registry/new-york/ui/stack"
import { Switcher } from "@/registry/new-york/ui/switcher"

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border bg-card px-3 py-4 text-sm">{children}</div>
  )
}

function Demo({
  name,
  title,
  hint,
  children,
}: {
  name: string
  title: string
  hint: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-lg border p-4">
      <Stack space="3">
        <Cluster justify="between" align="start" space="3">
          <div>
            <h2 className="text-sm font-medium">{title}</h2>
            <p className="text-sm text-muted-foreground">{hint}</p>
          </div>
          <OpenInV0Button name={name} className="w-fit shrink-0" />
        </Cluster>
        {children}
      </Stack>
    </section>
  )
}

export default function Home() {
  return (
    <Stack space="8" className="mx-auto min-h-svh max-w-5xl px-4 py-8">
      <header>
        <Stack space="1">
          <h1 className="text-3xl font-bold tracking-tight">shadcn-layout</h1>
          <p className="text-muted-foreground">
            Intrinsic layout primitives for shadcn. Resize the window to see Aside
            and Switcher wrap.
          </p>
        </Stack>
      </header>

      <main>
        <Stack space="8">
        <Demo name="stack" title="Stack" hint="Vertical flex. space maps to the Tailwind spacing scale (space=&quot;4&quot; = gap-4).">
          <Stack space="4">
            <Box>One</Box>
            <Box>Two</Box>
            <Box>Three</Box>
          </Stack>
        </Demo>

        <Demo name="cluster" title="Cluster" hint="Horizontal wrap. justify and align are props, not extra classes.">
          <Cluster justify="between" space="2">
            <span className="text-sm font-medium">Logo</span>
            <Cluster space="2">
              <Box>Home</Box>
              <Box>Docs</Box>
              <Box>About</Box>
            </Cluster>
          </Cluster>
        </Demo>

        <Demo name="aside" title="Aside" hint="Complementary column + fluid pane. Not the app Sidebar. Shrink the page until the pane would be under 50% wide.">
          <Aside sideWidth="12rem" space="4">
            <Aside.Side>
              <Stack space="2">
                <Box>General</Box>
                <Box>Team</Box>
                <Box>Billing</Box>
              </Stack>
            </Aside.Side>
            <Aside.Content>
              <Stack space="3">
                <Box>Settings content</Box>
                <Box>More content</Box>
              </Stack>
            </Aside.Content>
          </Aside>
        </Demo>

        <Demo name="switcher" title="Switcher" hint="Equal columns until the container is narrower than threshold (24rem here).">
          <Switcher threshold="24rem" space="4">
            <Box>Primary</Box>
            <Box>Secondary</Box>
            <Box>Tertiary</Box>
          </Switcher>
        </Demo>

        <Demo name="grid" title="Grid" hint="auto-fit columns, each at least min wide.">
          <Grid min="10rem" space="4">
            <Box>A</Box>
            <Box>B</Box>
            <Box>C</Box>
            <Box>D</Box>
            <Box>E</Box>
            <Box>F</Box>
          </Grid>
        </Demo>

        <Demo name="center" title="Center" hint="Measure-constrained column. gutters sit outside the measure (content-box).">
          <Center measure="prose" gutters="4">
            <Stack space="3">
              <p className="text-sm">
                Center limits line length. Named measures (prose, lg, 3xl, 7xl)
                map to the Tailwind max-width scale; any CSS length also works.
              </p>
              <Box>Inside the measure</Box>
            </Stack>
          </Center>
        </Demo>

        <Demo name="cover" title="Cover" hint="minHeight is 20rem here so it fits the docs page. Default is 100dvh.">
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
        </Demo>
        </Stack>
      </main>
    </Stack>
  )
}
