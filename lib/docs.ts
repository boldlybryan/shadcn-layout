export const GITHUB = "https://github.com/boldlybryan/shadcn-layout"
export const INSTALL_PREFIX = "boldlybryan/shadcn-layout"

export const nav = [
  {
    title: "Start",
    items: [
      { href: "/", label: "Introduction" },
      { href: "/intrinsic", label: "Intrinsic design" },
    ],
  },
  {
    title: "Primitives",
    items: [
      { href: "/stack", label: "Stack" },
      { href: "/cluster", label: "Cluster" },
      { href: "/aside", label: "Aside" },
      { href: "/switcher", label: "Switcher" },
      { href: "/grid", label: "Grid" },
      { href: "/center", label: "Center" },
      { href: "/cover", label: "Cover" },
    ],
  },
  {
    title: "Guides",
    items: [
      { href: "/recipes", label: "Recipes" },
      { href: "/agents", label: "For agents" },
    ],
  },
] as const

export const primitives = [
  {
    name: "Stack",
    href: "/stack",
    role: "Vertical list with a shared gap.",
    install: "stack",
    importName: "Stack",
    files: ["stack.tsx", "stack.css", "layout.ts"],
    usage: `<Stack space="4">
  <div>One</div>
  <div>Two</div>
</Stack>`,
  },
  {
    name: "Cluster",
    href: "/cluster",
    role: "Horizontal group that wraps.",
    install: "cluster",
    importName: "Cluster",
    files: ["cluster.tsx", "cluster.css", "layout.ts"],
    usage: `<Cluster justify="between">
  <h1>Campaigns</h1>
  <button>New</button>
</Cluster>`,
  },
  {
    name: "Aside",
    href: "/aside",
    role: "In-page column plus a growing pane.",
    install: "aside",
    importName: "Aside",
    files: ["aside.tsx", "aside.css", "layout.ts"],
    usage: `<Aside sideWidth="72">
  <Aside.Side as="nav">{/* subnav */}</Aside.Side>
  <Aside.Content>{/* page */}</Aside.Content>
</Aside>`,
  },
  {
    name: "Switcher",
    href: "/switcher",
    role: "Equal columns that stack when this box is too narrow.",
    install: "switcher",
    importName: "Switcher",
    files: ["switcher.tsx", "switcher.css", "layout.ts"],
    usage: `<Switcher threshold="30rem" space="4">
  <div>Primary</div>
  <div>Secondary</div>
</Switcher>`,
  },
  {
    name: "Grid",
    href: "/grid",
    role: "Cards or tiles that fill the space, each at least min wide.",
    install: "grid",
    importName: "Grid",
    files: ["grid.tsx", "grid.css", "layout.ts"],
    usage: `<Grid min="64" space="4">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Grid>`,
  },
  {
    name: "Center",
    href: "/center",
    role: "A max-width column, centered.",
    install: "center",
    importName: "Center",
    files: ["center.tsx", "center.css", "layout.ts"],
    usage: `<Center measure="prose" gutters="4">
  <p>Reading width. Gutters sit outside the measure.</p>
</Center>`,
  },
  {
    name: "Cover",
    href: "/cover",
    role: "Fills a min height. Cover.Child sits in the middle.",
    install: "cover",
    importName: "Cover",
    files: ["cover.tsx", "cover.css", "layout.ts"],
    usage: `<Cover>
  <Cover.Child>Centered</Cover.Child>
</Cover>`,
  },
] as const

export type Primitive = (typeof primitives)[number]

export const kitFiles = [
  "layouts.tsx",
  "stack.tsx",
  "stack.css",
  "cluster.tsx",
  "cluster.css",
  "aside.tsx",
  "aside.css",
  "switcher.tsx",
  "switcher.css",
  "grid.tsx",
  "grid.css",
  "center.tsx",
  "center.css",
  "cover.tsx",
  "cover.css",
  "layout.ts",
] as const

export const packageManagers = [
  { id: "pnpm", label: "pnpm", dlx: "pnpm dlx" },
  { id: "npm", label: "npm", dlx: "npx" },
  { id: "yarn", label: "yarn", dlx: "yarn dlx" },
  { id: "bun", label: "bun", dlx: "bunx" },
] as const

export type PackageManagerId = (typeof packageManagers)[number]["id"]

export function installCmd(item: string, pm: PackageManagerId = "pnpm") {
  const manager = packageManagers.find((entry) => entry.id === pm) ?? packageManagers[0]
  return `${manager.dlx} shadcn@latest add ${INSTALL_PREFIX}/${item}`
}

export function importLine(item: string, names?: string) {
  if (item === "layouts") {
    return `import { ${names ?? "Aside, Cluster, Stack"} } from "@/components/ui/layouts"`
  }
  const primitive = primitives.find((entry) => entry.install === item)
  const imported = names ?? primitive?.importName ?? item
  return `import { ${imported} } from "@/components/ui/${item}"`
}

export function installedFiles(item: string): readonly string[] {
  if (item === "layouts") return kitFiles
  const primitive = primitives.find((entry) => entry.install === item)
  return primitive?.files ?? [`${item}.tsx`, `${item}.css`, "layout.ts"]
}

export const decisionTree = [
  { if: "Vertical rhythm (fields, sections, card/dialog body)", then: "Stack" },
  { if: "Horizontal wrap (toolbar, tags, header, dialog actions, label+control)", then: "Cluster" },
  { if: "App chrome (icon rail, collapse, mobile sheet)", then: "shadcn Sidebar" },
  { if: "In-page complementary column (settings subnav, filters, TOC)", then: "Aside" },
  { if: "Equal panes that stack when this container is too narrow", then: "Switcher" },
  { if: "Unknown number of cards/tiles with a minimum width", then: "Grid" },
  { if: "Centered reading/content column (max-width)", then: "Center" },
  { if: "Viewport-filling screen with a centered message", then: "Cover + Cover.Child" },
] as const

export const spacingType =
  'Spacing ("0" | "0.5" | "1" | … | "96"; "4" = gap-4)'

export const lengthType = 'Spacing key or CSS length ("72" = w-72, "20rem", "50%")'
