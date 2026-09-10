# shadcn-layout

Intrinsic layout primitives for shadcn/ui. Source: `registry/new-york/ui/`. Docs: `/`, `/intrinsic`, `/tailwind`, `/stack`, `/cluster`, `/aside`, `/switcher`, `/grid`, `/center`, `/cover`, `/recipes`, `/agents`. Agent dumps are generated from `lib/llms.ts`: `/llms.txt`, `/llms-full.txt`, `/agents.md` (drop-in for consuming apps).

## Allowed names

Stack, Cluster, Aside, Switcher, Grid, Center, Cover.

Do not invent Row, VStack, SidebarLayout, Flex, or Box-as-layout. Aside is not shadcn `Sidebar`.

## Rules

- `space` is a Tailwind spacing key (`"4"` = `gap-4`). Never rem on `space`.
- Length props (`sideWidth`, `min`, `threshold`, `minHeight`, `contentMin`) take a spacing key (`"72"` = `w-72`) or a CSS length.
- `className` on a layout root is for exceptions, not gap/direction/wrap/justify. Owned CSS is unlayered and will win over those utilities.
- `as` changes the element (`as="form"`). `asChild` merges onto a single child. Slots (`Aside.Side`, `Cover.Child`) also accept `as` / `asChild`.
- Aside children MUST be `Aside.Side` and `Aside.Content`.
- Cover’s centered node MUST be `Cover.Child`.
- Grid’s class is `layout-grid`. Do not add Tailwind `grid` to that node.
- Center `gutters` default to `"0"`. Set gutters at the page edge.
- Stack `splitAfter` pins following children to the end of a tall stack (`className` for min-height).
- shadcn owns Button, Input, Dialog, Card, and app Sidebar.

## Recipes

- Form: `Stack as="form"` + nested Stack per field
- Header: `Cluster justify="between"`
- Dialog actions: `Cluster justify="end"`
- Settings subnav: Aside inside page content
- Auth: Cover + Cover.Child + Center
- Collection: Cluster header + Grid of Cards
