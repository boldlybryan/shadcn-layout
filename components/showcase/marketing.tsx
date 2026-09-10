import {
  GitBranch,
  LineChart,
  Radio,
  Shield,
  Users,
  Zap,
} from "lucide-react"

import { LogoMark } from "@/components/showcase/widgets"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent } from "@/registry/new-york/ui/card"
import { Center } from "@/registry/new-york/ui/center"
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Cover } from "@/registry/new-york/ui/cover"
import { Grid } from "@/registry/new-york/ui/grid"
import { Stack } from "@/registry/new-york/ui/stack"
import { Switcher } from "@/registry/new-york/ui/switcher"

const features = [
  {
    icon: LineChart,
    title: "Release-aware metrics",
    body: "Every chart can slice by deploy, flag, and cohort — not just date.",
  },
  {
    icon: Zap,
    title: "Answers in the thread",
    body: "Paste a chart into Slack. Lumen keeps the query, not a screenshot.",
  },
  {
    icon: Shield,
    title: "Warehouse-native",
    body: "Reads your warehouse. Nothing is copied unless you ask.",
  },
  {
    icon: GitBranch,
    title: "Experiments as a source",
    body: "Flag platforms show up as dimensions. No more CSV joins.",
  },
  {
    icon: Radio,
    title: "Live without the firehose",
    body: "Streaming where it matters. Batch where it does not.",
  },
  {
    icon: Users,
    title: "Shared definitions",
    body: "One “activation” metric. Product, data, and finance finally agree.",
  },
]

const plans = [
  {
    name: "Free",
    price: "$0",
    detail: "For a single product, one warehouse.",
    items: ["3 saved boards", "7-day lookback", "Email support"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Team",
    price: "$49",
    detail: "For squads that ship more than once a week.",
    items: ["Unlimited boards", "2-year lookback", "SSO", "Shared metrics"],
    cta: "Start trial",
    featured: true,
  },
  {
    name: "Company",
    price: "Talk",
    detail: "Warehouse-scale, audit logs, and a named partner.",
    items: ["Everything in Team", "SCIM", "Audit log", "Priority SLA"],
    cta: "Talk to sales",
    featured: false,
  },
]

const quotes = [
  {
    quote: "We stopped arguing about the number and started arguing about the change.",
    name: "Maya Chen",
    role: "Head of Product, Northwind",
  },
  {
    quote: "The board is the standup now. Nobody pastes a screenshot anymore.",
    name: "Jordan Hale",
    role: "Staff engineer, Fieldkit",
  },
  {
    quote: "I can finally send finance a link instead of a deck.",
    name: "Priya Shah",
    role: "VP Data, Harbor",
  },
]

export function LandingScene() {
  return (
    <Cover minHeight="32rem" space="6" className="bg-muted/20">
      <Cluster justify="between" as="header" align="center" space="4">
        <LogoMark name="Lumen" />
        <Cluster space="3">
          <Cluster as="nav" space="4">
            <span className="text-sm text-muted-foreground">Product</span>
            <span className="text-sm text-muted-foreground">Pricing</span>
            <span className="text-sm text-muted-foreground">Customers</span>
          </Cluster>
          <Cluster space="2">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button size="sm">Start free</Button>
          </Cluster>
        </Cluster>
      </Cluster>
      <Cover.Child>
        <Center measure="3xl" gutters="0" intrinsic>
          <Stack space="6">
            <Stack space="3">
              <p className="text-center text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Product analytics
              </p>
              <h3 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                See why the number moved.
              </h3>
              <p className="text-center text-muted-foreground">
                Lumen ties every release to the metrics your team already argues
                about — activation, retention, and the ones you named yourselves.
              </p>
            </Stack>
            <Cluster justify="center" space="3">
              <Button>Start free</Button>
              <Button variant="outline">Book a demo</Button>
            </Cluster>
          </Stack>
        </Center>
      </Cover.Child>
      <Cluster justify="center" space="8">
        {["Northwind", "Fieldkit", "Harbor", "Atelier"].map((name) => (
          <span key={name} className="text-xs font-medium tracking-wide text-muted-foreground">
            {name}
          </span>
        ))}
      </Cluster>
    </Cover>
  )
}

export function FeaturesScene() {
  return (
    <div className="p-6">
      <Center measure="5xl" gutters="0">
        <Stack space="8">
          <Center measure="xl" gutters="0" intrinsic>
            <Stack space="2">
              <h3 className="text-center text-2xl font-semibold tracking-tight">
                The board, not the warehouse UI
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                Grid of equal cards. Columns appear as soon as the container can
                fit another <code className="text-foreground">min</code>.
              </p>
            </Stack>
          </Center>
          <Grid min="14rem" space="4">
            {features.map((feature) => (
              <Card key={feature.title} className="py-0 shadow-none">
                <CardContent className="p-5">
                  <Stack space="3">
                    <feature.icon className="size-5 text-foreground" />
                    <Stack space="1">
                      <h4 className="text-sm font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.body}</p>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Center>
    </div>
  )
}

export function SplitScene() {
  return (
    <div className="p-6">
      <Switcher threshold="36rem" space="8">
        <Stack space="4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Product
          </p>
          <h3 className="text-2xl font-semibold tracking-tight">
            A metric with a memory
          </h3>
          <p className="text-sm text-muted-foreground">
            Switcher keeps two equal panes in a row until the container is
            narrower than the threshold — then they stack. No{" "}
            <code className="text-foreground">md:flex-row</code>.
          </p>
          <Stack space="3">
            {[
              "Saved views inherit the same filters as the board.",
              "Deploys show up as annotations, not a separate tool.",
              "Share a link. Recipients land on the same slice.",
            ].map((item) => (
              <Cluster key={item} space="2">
                <span className="size-1.5 shrink-0 rounded-full bg-foreground" />
                <p className="text-sm">{item}</p>
              </Cluster>
            ))}
          </Stack>
          <Cluster space="3">
            <Button size="sm">Open a board</Button>
            <Button variant="outline" size="sm">
              Browse templates
            </Button>
          </Cluster>
        </Stack>
        <div className="rounded-xl border bg-muted/30 p-4">
          <Stack space="4">
            <Cluster justify="between">
              <span className="text-sm font-medium">Activation</span>
              <span className="text-xs text-muted-foreground">Last 14 days</span>
            </Cluster>
            <Grid min="6rem" space="3">
              <Card className="py-0 shadow-none">
                <CardContent className="p-3">
                  <Stack space="1">
                    <p className="text-xs text-muted-foreground">Activated</p>
                    <p className="text-xl font-semibold">38.4%</p>
                  </Stack>
                </CardContent>
              </Card>
              <Card className="py-0 shadow-none">
                <CardContent className="p-3">
                  <Stack space="1">
                    <p className="text-xs text-muted-foreground">vs. prior</p>
                    <p className="text-xl font-semibold">+2.1%</p>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <div className="h-24 rounded-lg bg-gradient-to-t from-primary/15 to-transparent" />
          </Stack>
        </div>
      </Switcher>
    </div>
  )
}

export function PricingScene() {
  return (
    <div className="p-6">
      <Center measure="5xl" gutters="0">
        <Stack space="8">
          <Center measure="lg" gutters="0" intrinsic>
            <Stack space="2">
              <h3 className="text-center text-2xl font-semibold tracking-tight">
                Pricing that fits a squad
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                Three plans in a Grid. The featured plan is still just a Card.
              </p>
            </Stack>
          </Center>
          <Grid min="16rem" space="4">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.featured
                    ? "border-foreground py-0 shadow-none"
                    : "py-0 shadow-none"
                }
              >
                <CardContent className="p-6">
                  <Stack space="6">
                    <Stack space="2">
                      <Cluster justify="between">
                        <h4 className="font-semibold">{plan.name}</h4>
                        {plan.featured ? (
                          <span className="rounded-full bg-foreground px-2 py-0.5 text-xs text-background">
                            Typical
                          </span>
                        ) : null}
                      </Cluster>
                      <p className="text-3xl font-semibold tracking-tight">
                        {plan.price}
                        {plan.price.startsWith("$") ? (
                          <span className="text-sm font-normal text-muted-foreground">
                            /mo
                          </span>
                        ) : null}
                      </p>
                      <p className="text-sm text-muted-foreground">{plan.detail}</p>
                    </Stack>
                    <Stack space="2">
                      {plan.items.map((item) => (
                        <p key={item} className="text-sm">
                          {item}
                        </p>
                      ))}
                    </Stack>
                    <Button variant={plan.featured ? "default" : "outline"}>
                      {plan.cta}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Center>
    </div>
  )
}

export function TestimonialsScene() {
  return (
    <div className="p-6">
      <Grid min="16rem" space="4">
        {quotes.map((item) => (
          <Card key={item.name} className="py-0 shadow-none">
            <CardContent className="p-6">
              <Stack space="4">
                <p className="text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <Stack space="1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  )
}

export function FooterScene() {
  const columns = [
    { title: "Product", links: ["Boards", "Metrics", "Warehouse", "Changelog"] },
    { title: "Company", links: ["About", "Customers", "Careers", "Blog"] },
    { title: "Resources", links: ["Docs", "Guides", "Status", "Security"] },
    { title: "Legal", links: ["Privacy", "Terms", "DPA", "Cookies"] },
  ]

  return (
    <div className="bg-muted/20 p-6">
      <Stack space="8">
        <Grid min="10rem" space="6">
          {columns.map((column) => (
            <Stack key={column.title} space="3">
              <p className="text-sm font-medium">{column.title}</p>
              <Stack space="2">
                {column.links.map((link) => (
                  <span key={link} className="text-sm text-muted-foreground">
                    {link}
                  </span>
                ))}
              </Stack>
            </Stack>
          ))}
        </Grid>
        <Cluster justify="between" align="center">
          <LogoMark name="Lumen" />
          <p className="text-xs text-muted-foreground">
            © 2026 Lumen. Not a real product.
          </p>
        </Cluster>
      </Stack>
    </div>
  )
}
