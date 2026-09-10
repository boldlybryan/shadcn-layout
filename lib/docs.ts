export const GITHUB = "https://github.com/boldlybryan/shadcn-layout"
export const INSTALL_PREFIX = "boldlybryan/shadcn-layout"

export const nav = [
  {
    title: "Start",
    items: [{ href: "/", label: "Introduction" }],
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
    role: "Vertical flex with a token-backed gap.",
    install: "stack",
  },
  {
    name: "Cluster",
    href: "/cluster",
    role: "Horizontal wrap. Alignment is props, not extra classes.",
    install: "cluster",
  },
  {
    name: "Aside",
    href: "/aside",
    role: "Declared-width column beside a fluid pane. Not the app Sidebar.",
    install: "aside",
  },
  {
    name: "Switcher",
    href: "/switcher",
    role: "Equal columns that stack when the container is narrower than a threshold.",
    install: "switcher",
  },
  {
    name: "Grid",
    href: "/grid",
    role: "Auto-fit grid. Columns are at least min wide.",
    install: "grid",
  },
  {
    name: "Center",
    href: "/center",
    role: "Measure-constrained, horizontally centered column.",
    install: "center",
  },
  {
    name: "Cover",
    href: "/cover",
    role: "Fills a min height. Cover.Child is vertically centered.",
    install: "cover",
  },
] as const

export function installCmd(item: string) {
  return `pnpm dlx shadcn@latest add ${INSTALL_PREFIX}/${item}`
}

export const spacingType =
  '"0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16"'
