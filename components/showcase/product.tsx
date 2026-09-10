import { Avatar, Metric, Pill, SparkBars } from "@/components/showcase/widgets"
import { Aside } from "@/registry/new-york/ui/aside"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent } from "@/registry/new-york/ui/card"
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Grid } from "@/registry/new-york/ui/grid"
import { Stack } from "@/registry/new-york/ui/stack"

const invoices = [
  { id: "INV-2048", date: "Sep 1, 2026", amount: "$1,470.00", status: "Paid" as const },
  { id: "INV-2041", date: "Aug 1, 2026", amount: "$1,470.00", status: "Paid" as const },
  { id: "INV-2033", date: "Jul 1, 2026", amount: "$980.00", status: "Paid" as const },
  { id: "INV-2026", date: "Jun 1, 2026", amount: "$980.00", status: "Failed" as const },
]

const people = [
  { name: "Maya Chen", role: "Head of Product", team: "Product", initials: "MC" },
  { name: "Jordan Hale", role: "Staff engineer", team: "Platform", initials: "JH" },
  { name: "Priya Shah", role: "VP Data", team: "Data", initials: "PS" },
  { name: "Eli Rostova", role: "Design lead", team: "Design", initials: "ER" },
  { name: "Sam Okonkwo", role: "Customer success", team: "GTM", initials: "SO" },
  { name: "Nina Voss", role: "Support", team: "GTM", initials: "NV" },
]

const columns = [
  {
    title: "Ready",
    cards: [
      { title: "Annotate deploys on activation", meta: "Maya · Today" },
      { title: "Warehouse health check", meta: "Jordan · 2d" },
    ],
  },
  {
    title: "In flight",
    cards: [
      { title: "SSO for Fieldkit", meta: "Priya · Today" },
      { title: "Saved view permissions", meta: "Eli · 1d" },
      { title: "Slack unfurl for boards", meta: "Sam · 3d" },
    ],
  },
  {
    title: "Review",
    cards: [
      { title: "Billing dunning copy", meta: "Nina · Yesterday" },
    ],
  },
]

export function DashboardScene() {
  return (
    <div className="p-6">
      <Stack space="6">
        <Cluster justify="between" as="header" align="center" space="4">
          <Stack space="1">
            <h3 className="text-lg font-semibold tracking-tight">Overview</h3>
            <p className="text-sm text-muted-foreground">Northwind · last 30 days</p>
          </Stack>
          <Cluster space="2">
            <Button variant="outline" size="sm">
              Export
            </Button>
            <Button size="sm">New report</Button>
          </Cluster>
        </Cluster>
        <Grid min="11rem" space="4">
          <Metric label="Activation" value="38.4%" hint="+2.1 pts vs prior" />
          <Metric label="Weekly retained" value="61.2%" hint="Flat week over week" />
          <Metric label="Time to insight" value="4.6m" hint="Median, signed-in" />
          <Metric label="Boards shared" value="128" hint="12 this week" />
        </Grid>
        <Aside side="end" sideWidth="16rem" space="4" contentMin="55%">
          <Aside.Side>
            <Card className="py-0 shadow-none">
              <CardContent className="p-4">
                <Stack space="4">
                  <p className="text-sm font-medium">Activity</p>
                  <Stack space="3">
                    {[
                      ["MC", "Maya pinned Activation"],
                      ["JH", "Jordan commented on SSO"],
                      ["PS", "Priya saved Warehouse health"],
                      ["ER", "Eli shared Q3 board"],
                    ].map(([initials, text]) => (
                      <Cluster key={text} space="3" align="start">
                        <Avatar initials={initials} />
                        <p className="text-sm">{text}</p>
                      </Cluster>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Aside.Side>
          <Aside.Content>
            <Card className="py-0 shadow-none">
              <CardContent className="p-4">
                <Stack space="4">
                  <Cluster justify="between">
                    <p className="text-sm font-medium">Activation</p>
                    <p className="text-xs text-muted-foreground">Daily</p>
                  </Cluster>
                  <SparkBars values={[42, 48, 45, 52, 49, 58, 55, 61, 57, 64, 60, 68]} />
                </Stack>
              </CardContent>
            </Card>
          </Aside.Content>
        </Aside>
      </Stack>
    </div>
  )
}

export function BillingScene() {
  return (
    <div className="p-6">
      <Stack space="6">
        <Cluster justify="between" as="header" align="center" space="4">
          <Stack space="1">
            <h3 className="text-lg font-semibold tracking-tight">Billing</h3>
            <p className="text-sm text-muted-foreground">Team plan · next invoice Oct 1</p>
          </Stack>
          <Cluster space="2">
            <Button variant="outline" size="sm">
              Update card
            </Button>
            <Button size="sm">Change plan</Button>
          </Cluster>
        </Cluster>
        <Stack space="3">
          {invoices.map((invoice) => (
            <Cluster
              key={invoice.id}
              justify="between"
              align="center"
              space="4"
              className="rounded-lg border px-4 py-3"
            >
              <Stack space="1">
                <p className="text-sm font-medium">{invoice.id}</p>
                <p className="text-xs text-muted-foreground">{invoice.date}</p>
              </Stack>
              <Cluster space="3">
                <p className="text-sm">{invoice.amount}</p>
                <Pill tone={invoice.status === "Paid" ? "ok" : "warn"}>
                  {invoice.status}
                </Pill>
                <Button variant="outline" size="sm">
                  PDF
                </Button>
              </Cluster>
            </Cluster>
          ))}
        </Stack>
      </Stack>
    </div>
  )
}

export function TeamScene() {
  return (
    <div className="p-6">
      <Stack space="6">
        <Cluster justify="between" as="header" align="center" space="4">
          <Stack space="1">
            <h3 className="text-lg font-semibold tracking-tight">Team</h3>
            <p className="text-sm text-muted-foreground">12 seats · 6 used</p>
          </Stack>
          <Button size="sm">Invite</Button>
        </Cluster>
        <Grid min="14rem" space="4">
          {people.map((person) => (
            <Card key={person.name} className="py-0 shadow-none">
              <CardContent className="p-5">
                <Stack space="4">
                  <Cluster space="3">
                    <Avatar initials={person.initials} className="size-10 text-sm" />
                    <Stack space="1">
                      <p className="text-sm font-medium">{person.name}</p>
                      <p className="text-xs text-muted-foreground">{person.role}</p>
                    </Stack>
                  </Cluster>
                  <Cluster justify="between">
                    <Pill>{person.team}</Pill>
                    <span className="text-xs text-muted-foreground">Active</span>
                  </Cluster>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Stack>
    </div>
  )
}

export function BoardScene() {
  return (
    <div className="p-6">
      <Stack space="6">
        <Cluster justify="between" as="header" align="center" space="4">
          <Stack space="1">
            <h3 className="text-lg font-semibold tracking-tight">Sprint 42</h3>
            <p className="text-sm text-muted-foreground">Boards as columns. Cards stay Stacks.</p>
          </Stack>
          <Button size="sm">Add card</Button>
        </Cluster>
        <Grid min="16rem" space="4">
          {columns.map((column) => (
            <div key={column.title} className="rounded-xl bg-muted/40 p-3">
              <Stack space="3">
                <Cluster justify="between">
                  <p className="text-sm font-medium">{column.title}</p>
                  <span className="text-xs text-muted-foreground">{column.cards.length}</span>
                </Cluster>
                <Stack space="2">
                  {column.cards.map((card) => (
                    <Card key={card.title} className="py-0 shadow-none">
                      <CardContent className="p-3">
                        <Stack space="2">
                          <p className="text-sm font-medium">{card.title}</p>
                          <p className="text-xs text-muted-foreground">{card.meta}</p>
                        </Stack>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </Stack>
            </div>
          ))}
        </Grid>
      </Stack>
    </div>
  )
}
