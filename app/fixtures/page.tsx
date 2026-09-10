import type { ReactNode } from "react"

import { Aside } from "@/registry/new-york/ui/aside"
import { Cover } from "@/registry/new-york/ui/cover"
import { Grid } from "@/registry/new-york/ui/grid"
import { Stack } from "@/registry/new-york/ui/stack"
import { Switcher } from "@/registry/new-york/ui/switcher"

export const metadata = { robots: { index: false, follow: false } }

function Box({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md border bg-card px-3 py-3 text-sm">{children}</div>
  )
}

export default function FixturesPage() {
  return (
    <Stack space="8" className="p-6">
      <section>
        <h1 className="text-sm font-medium">Aside wrap</h1>
        <div data-testid="aside-wide" style={{ width: 800 }}>
          <Aside space="4" sideWidth="12rem" contentMin="50%">
            <Aside.Side data-testid="aside-wide-side">
              <Box>Side</Box>
            </Aside.Side>
            <Aside.Content data-testid="aside-wide-content">
              <Box>Content</Box>
            </Aside.Content>
          </Aside>
        </div>
        <div data-testid="aside-narrow" style={{ width: 360 }}>
          <Aside space="4" sideWidth="12rem" contentMin="50%">
            <Aside.Side data-testid="aside-narrow-side">
              <Box>Side</Box>
            </Aside.Side>
            <Aside.Content data-testid="aside-narrow-content">
              <Box>Content</Box>
            </Aside.Content>
          </Aside>
        </div>
      </section>

      <section>
        <h1 className="text-sm font-medium">Switcher threshold</h1>
        <div data-testid="switcher-wide" style={{ width: 700 }}>
          <Switcher space="4" threshold="20rem">
            <Box>A</Box>
            <Box>B</Box>
            <Box>C</Box>
          </Switcher>
        </div>
        <div data-testid="switcher-narrow" style={{ width: 280 }}>
          <Switcher space="4" threshold="20rem">
            <Box>A</Box>
            <Box>B</Box>
            <Box>C</Box>
          </Switcher>
        </div>
      </section>

      <section>
        <h1 className="text-sm font-medium">Grid overflow</h1>
        <div data-testid="grid-narrow" style={{ width: 200 }}>
          <Grid min="16rem" space="4">
            <Box>One</Box>
            <Box>Two</Box>
          </Grid>
        </div>
      </section>

      <section>
        <h1 className="text-sm font-medium">Cover minimum gap</h1>
        <Cover minHeight="0" space="4" data-testid="cover-tight" className="border">
          <div data-testid="cover-header">Header</div>
          <Cover.Child data-testid="cover-child">Child</Cover.Child>
          <div data-testid="cover-footer">Footer</div>
        </Cover>
      </section>
    </Stack>
  )
}
