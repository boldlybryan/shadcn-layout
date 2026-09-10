# shadcn-layout

Intrinsic layout primitives for shadcn/ui: Stack, Cluster, Aside, Switcher, Grid, Center, Cover.

These are **layout ingredients**, not a second component library. They do not replace Button, Dialog, Card, or shadcn’s app `Sidebar`. The complementary-column primitive is named **Aside** for that reason.

## Prerequisite

An existing [shadcn/ui](https://ui.shadcn.com) app (`components.json`). This copies source into your `ui` folder. It is not `npm install shadcn-layout`.

## Install

The whole kit:

```bash
npx shadcn@latest add boldlybryan/shadcn-layout/layouts
pnpm dlx shadcn@latest add boldlybryan/shadcn-layout/layouts
yarn dlx shadcn@latest add boldlybryan/shadcn-layout/layouts
bunx shadcn@latest add boldlybryan/shadcn-layout/layouts
```

One primitive: replace `layouts` with `stack`, `cluster`, `aside`, `switcher`, `grid`, `center`, or `cover`.

Files land next to the host `ui` alias (usually `components/ui`): a `.tsx`, a matching `.css` imported by that file, and shared `layout.ts`. You do not add the CSS to `globals.css`. If styles are missing, the `.css` file is not next to the component.

```tsx
import { Aside, Cluster, Stack } from "@/components/ui/layouts"

<Stack space="8">
  <Cluster justify="between">
    <h1>Settings</h1>
    <button>Save</button>
  </Cluster>
  <Aside sideWidth="72">
    <Aside.Side as="nav">{/* subnav */}</Aside.Side>
    <Aside.Content>{/* page */}</Aside.Content>
  </Aside>
</Stack>
```

If you only added `stack`: `import { Stack } from "@/components/ui/stack"`.

`space="4"` is the same token as Tailwind `gap-4`. Length props (`sideWidth`, `min`, `threshold`) take a spacing key (`"72"` = `w-72`) or a CSS length. Algorithms live in CSS; props only set custom properties.

## For your agent

After install, copy `/agents.md` from the docs site into the consuming app’s `AGENTS.md` or `.cursor/rules/layout-primitives.mdc`.

- `/llms.txt` — short contract
- `/llms-full.txt` — contract plus copy-paste examples
- `/agents` — human page

## Docs

Run this repo for the docs site: Introduction, each primitive, Recipes, and For agents.

```bash
pnpm install
pnpm dev
```

Preview at [http://localhost:3000](http://localhost:3000). Registry JSON is served from `/r/[name].json`.

Contributor notes: [docs/PUBLISHING.md](./docs/PUBLISHING.md). Registry spec: [shadcn registry](https://ui.shadcn.com/docs/registry). Hosted `@shadcn-layout` namespaces are documented there, not as the default install.

## Tests

```bash
pnpm test
pnpm test:e2e
```
