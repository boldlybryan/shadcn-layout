"use client"

import { useState } from "react"

import { Avatar, Pill } from "@/components/showcase/widgets"
import { Aside } from "@/registry/new-york/ui/aside"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent } from "@/registry/new-york/ui/card"
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Grid } from "@/registry/new-york/ui/grid"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Stack } from "@/registry/new-york/ui/stack"
import { Textarea } from "@/registry/new-york/ui/textarea"

const settingsNav = ["General", "Team", "Billing"] as const

const threads = [
  {
    id: "1",
    from: "Maya Chen",
    initials: "MC",
    preview: "Q3 forecast is in — activation is the swing metric.",
    time: "2h",
    body: "The warehouse job finished. Activation is up 2.1 points on the Team plan cohort, and it lines up with the SSO launch. Can you pin that view to the exec board before standup?",
  },
  {
    id: "2",
    from: "Jordan Hale",
    initials: "JH",
    preview: "SSO for Fieldkit is ready to review.",
    time: "5h",
    body: "SCIM is still behind a flag. The happy path is green in staging. I left comments on the saved-view permissions ticket — that should ship in the same window.",
  },
  {
    id: "3",
    from: "Priya Shah",
    initials: "PS",
    preview: "Warehouse health looks noisy after the backfill.",
    time: "1d",
    body: "Two models ran long overnight. I added a board for freshness; if it stays red after the next run we should page. Nothing customer-facing yet.",
  },
]

const templates = [
  { name: "Activation", kind: "Analytics", uses: "2.4k" },
  { name: "Release pulse", kind: "Analytics", uses: "1.1k" },
  { name: "Warehouse health", kind: "Integrations", uses: "860" },
  { name: "Slack standup", kind: "Integrations", uses: "640" },
  { name: "Exec weekly", kind: "Templates", uses: "1.8k" },
  { name: "Experiment readout", kind: "Templates", uses: "920" },
]

const filters = ["All", "Analytics", "Integrations", "Templates"] as const

export function SettingsScene() {
  const [section, setSection] = useState<(typeof settingsNav)[number]>("General")

  return (
    <div className="p-6">
      <Stack space="6">
        <Cluster justify="between" as="header" align="center" space="4">
          <Stack space="1">
            <h3 className="text-lg font-semibold tracking-tight">Settings</h3>
            <p className="text-sm text-muted-foreground">Northwind workspace</p>
          </Stack>
          <Button size="sm">Save</Button>
        </Cluster>
        <Aside sideWidth="11rem" space="6">
          <Aside.Side>
            <Stack as="nav" space="1">
              {settingsNav.map((item) => (
                <Button
                  key={item}
                  type="button"
                  variant={section === item ? "secondary" : "ghost"}
                  size="sm"
                  className="justify-start"
                  onClick={() => setSection(item)}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Aside.Side>
          <Aside.Content>
            {section === "General" ? (
              <Stack
                as="form"
                space="6"
                className="max-w-md"
                onSubmit={(event) => event.preventDefault()}
              >
                <Stack space="2">
                  <Label htmlFor="org-name">Workspace name</Label>
                  <Input id="org-name" defaultValue="Northwind" />
                </Stack>
                <Stack space="2">
                  <Label htmlFor="org-slug">Slug</Label>
                  <Input id="org-slug" defaultValue="northwind" />
                </Stack>
                <Stack space="2">
                  <Label htmlFor="org-bio">How you use Lumen</Label>
                  <Textarea
                    id="org-bio"
                    defaultValue="Product analytics for the Northwind storefront and admin."
                  />
                </Stack>
                <Cluster justify="end" space="2">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </Cluster>
              </Stack>
            ) : null}
            {section === "Team" ? (
              <Stack space="4">
                <p className="text-sm text-muted-foreground">
                  Seats are billed on the Team plan. Invites inherit the workspace
                  SSO policy.
                </p>
                <Stack space="3">
                  {[
                    ["MC", "Maya Chen", "Owner"],
                    ["JH", "Jordan Hale", "Admin"],
                    ["PS", "Priya Shah", "Member"],
                  ].map(([initials, name, role]) => (
                    <Cluster
                      key={name}
                      justify="between"
                      className="rounded-lg border px-3 py-2"
                    >
                      <Cluster space="3">
                        <Avatar initials={initials} />
                        <p className="text-sm font-medium">{name}</p>
                      </Cluster>
                      <Pill>{role}</Pill>
                    </Cluster>
                  ))}
                </Stack>
              </Stack>
            ) : null}
            {section === "Billing" ? (
              <Stack space="4">
                <p className="text-sm text-muted-foreground">
                  Team · $49 per month · next invoice October 1, 2026.
                </p>
                <Cluster space="2">
                  <Button size="sm">Change plan</Button>
                  <Button variant="outline" size="sm">
                    Update card
                  </Button>
                </Cluster>
              </Stack>
            ) : null}
          </Aside.Content>
        </Aside>
      </Stack>
    </div>
  )
}

export function InboxScene() {
  const [activeId, setActiveId] = useState(threads[0].id)
  const active = threads.find((thread) => thread.id === activeId) ?? threads[0]

  return (
    <Aside sideWidth="18rem" space="0" contentMin="45%">
      <Aside.Side className="bg-muted/20">
        <Stack space="0">
          <div className="border-b px-4 py-3">
            <p className="text-sm font-medium">Inbox</p>
          </div>
          <Stack space="0">
            {threads.map((thread) => (
              <button
                key={thread.id}
                type="button"
                onClick={() => setActiveId(thread.id)}
                className={
                  thread.id === activeId
                    ? "bg-accent px-4 py-3 text-left"
                    : "px-4 py-3 text-left hover:bg-accent/60"
                }
              >
                <Stack space="1">
                  <Cluster justify="between">
                    <p className="text-sm font-medium">{thread.from}</p>
                    <span className="text-xs text-muted-foreground">{thread.time}</span>
                  </Cluster>
                  <p className="text-xs text-muted-foreground">{thread.preview}</p>
                </Stack>
              </button>
            ))}
          </Stack>
        </Stack>
      </Aside.Side>
      <Aside.Content className="min-w-0 p-6">
        <Stack space="4">
          <Cluster space="3">
            <Avatar initials={active.initials} />
            <Stack space="1">
              <p className="text-sm font-medium">{active.from}</p>
              <p className="text-xs text-muted-foreground">{active.time} ago</p>
            </Stack>
          </Cluster>
          <p className="text-sm leading-relaxed">{active.body}</p>
          <Cluster justify="end" space="2">
            <Button variant="outline" size="sm">
              Archive
            </Button>
            <Button size="sm">Reply</Button>
          </Cluster>
        </Stack>
      </Aside.Content>
    </Aside>
  )
}

export function CatalogScene() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")
  const items =
    filter === "All" ? templates : templates.filter((item) => item.kind === filter)

  return (
    <div className="p-6">
      <Stack space="6">
        <Cluster justify="between" as="header" align="center" space="4">
          <Stack space="1">
            <h3 className="text-lg font-semibold tracking-tight">Templates</h3>
            <p className="text-sm text-muted-foreground">Start from a board that already works.</p>
          </Stack>
          <Button size="sm">New template</Button>
        </Cluster>
        <Cluster space="2">
          {filters.map((item) => (
            <Button
              key={item}
              type="button"
              size="sm"
              variant={filter === item ? "default" : "outline"}
              onClick={() => setFilter(item)}
            >
              {item}
            </Button>
          ))}
        </Cluster>
        <Grid min="14rem" space="4">
          {items.map((item) => (
            <Card key={item.name} className="py-0 shadow-none">
              <CardContent className="p-0">
                <Stack space="0">
                  <div className="h-24 bg-muted/70" />
                  <div className="p-4">
                    <Stack space="2">
                      <Cluster justify="between">
                        <p className="text-sm font-medium">{item.name}</p>
                        <Pill>{item.kind}</Pill>
                      </Cluster>
                      <p className="text-xs text-muted-foreground">{item.uses} workspaces</p>
                    </Stack>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Stack>
    </div>
  )
}
