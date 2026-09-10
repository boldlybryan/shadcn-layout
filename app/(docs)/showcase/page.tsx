import type { Metadata } from "next"
import type { ComponentType } from "react"

import {
  CatalogScene,
  InboxScene,
  SettingsScene,
} from "@/components/showcase/interactive"
import {
  FeaturesScene,
  FooterScene,
  LandingScene,
  PricingScene,
  SplitScene,
  TestimonialsScene,
} from "@/components/showcase/marketing"
import {
  BillingScene,
  BoardScene,
  DashboardScene,
  TeamScene,
} from "@/components/showcase/product"
import { Scene, type PrimitiveName } from "@/components/showcase/scene"
import {
  BlogScene,
  CheckoutScene,
  DialogScene,
  EmptyScene,
  NotFoundScene,
  SignInScene,
} from "@/components/showcase/states"
import { Center } from "@/registry/new-york/ui/center"
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Stack } from "@/registry/new-york/ui/stack"

export const metadata: Metadata = { title: "Showcase" }

const groups = [
  {
    title: "Website",
    items: [
      { href: "#hero", label: "Hero" },
      { href: "#features", label: "Features" },
      { href: "#split", label: "Split" },
      { href: "#pricing", label: "Pricing" },
      { href: "#stories", label: "Stories" },
      { href: "#footer", label: "Footer" },
    ],
  },
  {
    title: "App",
    items: [
      { href: "#dashboard", label: "Dashboard" },
      { href: "#settings", label: "Settings" },
      { href: "#inbox", label: "Inbox" },
      { href: "#templates", label: "Templates" },
      { href: "#board", label: "Board" },
      { href: "#team", label: "Team" },
      { href: "#billing", label: "Billing" },
    ],
  },
  {
    title: "Pages",
    items: [
      { href: "#sign-in", label: "Sign in" },
      { href: "#blog", label: "Article" },
      { href: "#checkout", label: "Checkout" },
      { href: "#dialog", label: "Dialog" },
      { href: "#empty", label: "Empty" },
      { href: "#missing", label: "404" },
    ],
  },
] as const

export default function ShowcasePage() {
  return (
    <Center measure="6xl" gutters="0">
      <Stack space="16">
        <header>
          <Stack space="6">
            <Stack space="3">
              <h1 className="text-3xl font-bold tracking-tight">Showcase</h1>
              <p className="text-base text-muted-foreground">
                Common website and SaaS surfaces, composed from the seven
                primitives. Nothing here uses a viewport breakpoint to switch
                layout. Resize the pane — Grid, Switcher, Aside, and Cluster
                respond to the container they sit in.
              </p>
            </Stack>
            <Cluster space="8" align="start">
              {groups.map((group) => (
                <Stack key={group.title} space="2">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {group.title}
                  </p>
                  <Cluster space="2">
                    {group.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="rounded-full border px-2.5 py-0.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                      >
                        {item.label}
                      </a>
                    ))}
                  </Cluster>
                </Stack>
              ))}
            </Cluster>
          </Stack>
        </header>

        {scenes.map(({ Component, ...scene }) => (
          <Scene key={scene.id} {...scene}>
            <Component />
          </Scene>
        ))}
      </Stack>
    </Center>
  )
}

const scenes: {
  id: string
  title: string
  description: string
  primitives: PrimitiveName[]
  url: string
  Component: ComponentType
}[] = [
  {
    id: "hero",
    title: "Marketing hero",
    description:
      "Cover fills the fold. Cluster is the site header. Cover.Child + Center hold the headline; the logo cloud is just another Cluster at the foot.",
    primitives: ["Cover", "Cluster", "Center", "Stack"],
    url: "lumen.app",
    Component: LandingScene,
  },
  {
    id: "features",
    title: "Feature grid",
    description:
      "Center for the intro copy, Grid for the cards. Columns appear when another min-width fits — you do not pick a column count.",
    primitives: ["Center", "Grid", "Stack"],
    url: "lumen.app/#product",
    Component: FeaturesScene,
  },
  {
    id: "split",
    title: "Split feature",
    description:
      "Switcher: equal panes in a row until the container is narrower than the threshold, then a column. The preview pane is itself a Grid of stats.",
    primitives: ["Switcher", "Stack", "Cluster", "Grid"],
    url: "lumen.app/product",
    Component: SplitScene,
  },
  {
    id: "pricing",
    title: "Pricing",
    description:
      "Three plans as a Grid of Cards. The featured plan is a border, not a new layout name.",
    primitives: ["Center", "Grid", "Stack", "Cluster"],
    url: "lumen.app/pricing",
    Component: PricingScene,
  },
  {
    id: "stories",
    title: "Testimonials",
    description: "Quotes as a Grid. Same primitive as features and team tiles.",
    primitives: ["Grid", "Stack"],
    url: "lumen.app/customers",
    Component: TestimonialsScene,
  },
  {
    id: "footer",
    title: "Site footer",
    description:
      "Link columns in a Grid. Identity and legal sit in a Cluster between underneath.",
    primitives: ["Grid", "Stack", "Cluster"],
    url: "lumen.app",
    Component: FooterScene,
  },
  {
    id: "dashboard",
    title: "Dashboard",
    description:
      "Page header is Cluster between. KPI tiles are a Grid. The chart plus activity rail is Aside with the complementary column on the end.",
    primitives: ["Stack", "Cluster", "Grid", "Aside"],
    url: "app.lumen.app/overview",
    Component: DashboardScene,
  },
  {
    id: "settings",
    title: "Settings",
    description:
      "The in-page recipe: Cluster header, Aside for section links, nested Stack for the form. Click General, Team, and Billing — the host app Sidebar is not involved.",
    primitives: ["Cluster", "Aside", "Stack"],
    url: "app.lumen.app/settings",
    Component: SettingsScene,
  },
  {
    id: "inbox",
    title: "Inbox",
    description:
      "List + detail is Aside, not a sidebar layout. Select a thread; the complementary column keeps a declared width until the pane would starve.",
    primitives: ["Aside", "Stack", "Cluster"],
    url: "app.lumen.app/inbox",
    Component: InboxScene,
  },
  {
    id: "templates",
    title: "Catalog",
    description:
      "Filters are a Cluster of buttons. Results are a Grid. Change the filter and watch tiles wrap to the container, not the viewport.",
    primitives: ["Cluster", "Grid", "Stack"],
    url: "app.lumen.app/templates",
    Component: CatalogScene,
  },
  {
    id: "board",
    title: "Kanban board",
    description:
      "Columns are Grid tracks. Each column is a Stack of cards. No 12-column system, no md:grid-cols-3.",
    primitives: ["Grid", "Stack", "Cluster"],
    url: "app.lumen.app/board/42",
    Component: BoardScene,
  },
  {
    id: "team",
    title: "Team directory",
    description: "People as a Grid of Cards. Header is the same Cluster recipe as every other app page.",
    primitives: ["Cluster", "Grid", "Stack"],
    url: "app.lumen.app/team",
    Component: TeamScene,
  },
  {
    id: "billing",
    title: "Billing list",
    description:
      "Each invoice is a Cluster between: identity on the start, amount and actions on the end. The list is a Stack.",
    primitives: ["Stack", "Cluster"],
    url: "app.lumen.app/billing",
    Component: BillingScene,
  },
  {
    id: "sign-in",
    title: "Sign in",
    description:
      "Cover for the screen, Center for the form measure, Stack for the fields. Header and footer stay at the Cover edges.",
    primitives: ["Cover", "Center", "Stack", "Cluster"],
    url: "app.lumen.app/sign-in",
    Component: SignInScene,
  },
  {
    id: "blog",
    title: "Article + TOC",
    description:
      "Aside on the end for the table of contents. Center keeps the article on a prose measure inside the growing pane.",
    primitives: ["Aside", "Center", "Stack"],
    url: "lumen.app/blog/time-to-insight",
    Component: BlogScene,
  },
  {
    id: "checkout",
    title: "Checkout",
    description:
      "Switcher splits the form and the order summary. Nested Switcher on expiry + CVC — the same primitive, a tighter threshold.",
    primitives: ["Switcher", "Stack", "Cluster"],
    url: "app.lumen.app/checkout",
    Component: CheckoutScene,
  },
  {
    id: "dialog",
    title: "Dialog",
    description:
      "shadcn still owns Dialog chrome. The spatial recipe is Cover to dim the page, Center for the measure, Stack + Cluster end for title, body, and actions.",
    primitives: ["Cover", "Center", "Stack", "Cluster"],
    url: "app.lumen.app/boards/activation",
    Component: DialogScene,
  },
  {
    id: "empty",
    title: "Empty state",
    description:
      "Cover.Child vertically centers the message. Actions are a Cluster. Do not reach for min-h-screen items-center justify-center.",
    primitives: ["Cover", "Center", "Stack", "Cluster"],
    url: "app.lumen.app/boards",
    Component: EmptyScene,
  },
  {
    id: "missing",
    title: "Not found",
    description:
      "Same Cover recipe as sign-in, with chrome at the edges. The message stays in Cover.Child.",
    primitives: ["Cover", "Cluster", "Center", "Stack"],
    url: "app.lumen.app/boards/missing",
    Component: NotFoundScene,
  },
]
