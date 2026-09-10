# shadcn-layout

Intrinsic layout primitives for shadcn/ui. Source: `registry/new-york/ui/`. Docs: `/`, `/stack`, `/cluster`, `/aside`, `/switcher`, `/grid`, `/center`, `/cover`, `/recipes`, `/agents`. Agent dump: `/llms.txt`.

## Allowed names

Stack, Cluster, Aside, Switcher, Grid, Center, Cover.

Do not invent Row, VStack, SidebarLayout, Flex, or Box-as-layout. Aside is not shadcn `Sidebar`.

## Rules

- `space` is a Tailwind spacing key (`"4"` = `gap-4`). Never rem on `space`.
- `className` on a layout root is for exceptions, not gap/direction/wrap/justify.
- Aside children MUST be `Aside.Side` and `Aside.Content`.
- Cover’s centered node MUST be `Cover.Child`.
- Grid’s class is `layout-grid`. Do not add Tailwind `grid` to that node.
- shadcn owns Button, Input, Dialog, Card, and app Sidebar.

## Recipes

- Form: `Stack as="form"` + nested Stack per field
- Header: `Cluster justify="between"`
- Dialog actions: `Cluster justify="end"`
- Settings subnav: Aside inside page content
