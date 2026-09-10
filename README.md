# shadcn-layout

Intrinsic layout primitives for shadcn/ui: Stack, Cluster, Aside, Switcher, Grid, Center, Cover.

These are **layout ingredients**, not a second component library. They do not replace Button, Dialog, Card, or shadcn’s app `Sidebar`. The complementary-column primitive is named **Aside** for that reason.

## Install

```bash
pnpm dlx shadcn@latest add boldlybryan/shadcn-layout/stack
pnpm dlx shadcn@latest add boldlybryan/shadcn-layout/layouts
```

Or bind the namespace after you deploy a host for `/r/{name}.json`:

```bash
pnpm dlx shadcn@latest registry add @shadcn-layout=https://<host>/r/{name}.json
pnpm dlx shadcn@latest add @shadcn-layout/stack
```

## Setup

```bash
pnpm install
pnpm dev
```

Preview at [http://localhost:3000](http://localhost:3000). Registry JSON is served from `/r/[name].json`.

## Docs

Live docs (this Next app): Introduction, each primitive, Recipes, and For agents. Agent dump at `/llms.txt`.

Contributor notes: [docs/PUBLISHING.md](./docs/PUBLISHING.md). Registry spec: [shadcn registry](https://ui.shadcn.com/docs/registry).

## Usage

```tsx
import { Aside, Cluster, Stack } from "@/components/ui/layouts"

<Stack space="8">
  <Cluster justify="between">
    <h1>Settings</h1>
    <button>Save</button>
  </Cluster>
  <Aside sideWidth="18rem">
    <Aside.Side>{/* subnav */}</Aside.Side>
    <Aside.Content>{/* page */}</Aside.Content>
  </Aside>
</Stack>
```

`space="4"` is the same token as Tailwind `gap-4`. Algorithms live in CSS; props only set custom properties.
