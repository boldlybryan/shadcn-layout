import {
  INSTALL_PREFIX,
  decisionTree,
  installCmd,
  primitives,
} from "@/lib/docs"

const kitImport = `import { Aside, Center, Cluster, Cover, Grid, Stack, Switcher } from "@/components/ui/layouts"`

export const fewShots = [
  {
    title: "Form",
    note: "Outer Stack for the form. Nested Stack per label+control.",
    code: `${kitImport}

<Stack as="form" space="6">
  <Stack space="2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" />
  </Stack>
  <Button type="submit">Save</Button>
</Stack>`,
  },
  {
    title: "Page header",
    note: "Cluster justify=between: title on the start, actions on the end.",
    code: `${kitImport}

<Cluster justify="between" as="header" space="4">
  <h1>Campaigns</h1>
  <Cluster space="2">
    <Button variant="outline">Export</Button>
    <Button>New</Button>
  </Cluster>
</Cluster>`,
  },
  {
    title: "Dialog actions",
    note: "Inside shadcn DialogContent. Do not restyle Dialog.",
    code: `${kitImport}

<Stack space="4">
  <h2>Edit profile</h2>
  <p>Make changes.</p>
  <Cluster justify="end" space="2">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </Cluster>
</Stack>`,
  },
  {
    title: "Settings subnav",
    note: "Aside inside page content. shadcn Sidebar stays app chrome around the page.",
    code: `${kitImport}

<Stack space="6">
  <Cluster justify="between">
    <h1>Settings</h1>
    <Button>Save</Button>
  </Cluster>
  <Aside sideWidth="48">
    <Aside.Side as="nav">{/* General / Team */}</Aside.Side>
    <Aside.Content>{/* form */}</Aside.Content>
  </Aside>
</Stack>`,
  },
  {
    title: "Auth screen",
    note: "Cover fills the viewport. Center the form in Cover.Child.",
    code: `${kitImport}

<Cover space="6">
  <p>Acme</p>
  <Cover.Child>
    <Center measure="sm">
      <Stack as="form" space="4">
        <Stack space="2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </Stack>
        <Button type="submit">Sign in</Button>
      </Stack>
    </Center>
  </Cover.Child>
</Cover>`,
  },
  {
    title: "Collection",
    note: "Cluster header + Grid of shadcn Cards. Surfaces stay Card.",
    code: `${kitImport}

<Stack space="6">
  <Cluster justify="between">
    <h1>Campaigns</h1>
    <Button>New</Button>
  </Cluster>
  <Grid min="64" space="4">
    <Card>…</Card>
    <Card>…</Card>
    <Card>…</Card>
  </Grid>
</Stack>`,
  },
  {
    title: "Label beside control",
    note: "Cluster, not a one-off flex.",
    code: `${kitImport}

<Cluster space="2">
  <input id="terms" type="checkbox" />
  <label htmlFor="terms">I agree to the terms</label>
</Cluster>`,
  },
  {
    title: "Equal panes that stack",
    note: "Switcher, not md:flex-row. Threshold is the container, not the viewport.",
    code: `${kitImport}

<Switcher threshold="30rem" space="4">
  <div>Primary</div>
  <div>Secondary</div>
</Switcher>`,
  },
  {
    title: "Split a tall stack",
    note: "splitAfter pins later children to the end. Set min-height on the Stack.",
    code: `${kitImport}

<Stack space="3" splitAfter={1} className="min-h-svh">
  <nav>…</nav>
  <button>Sign out</button>
</Stack>`,
  },
  {
    title: "Do not invent flex",
    note: "Named structure instead of utility soup.",
    code: `// NO
<div className="flex flex-col gap-4">…</div>
<div className="flex justify-between">…</div>
<div className="flex flex-col gap-4 md:flex-row">…</div>
<aside className="w-72 shrink-0">…</aside>

// YES
<Stack space="4">…</Stack>
<Cluster justify="between">…</Cluster>
<Switcher threshold="30rem">…</Switcher>
<Aside sideWidth="72">
  <Aside.Side>…</Aside.Side>
  <Aside.Content>…</Aside.Content>
</Aside>`,
  },
] as const

export function llmsTxt() {
  const primitiveLines = primitives
    .map((item) => {
      switch (item.install) {
        case "stack":
          return `- Stack — vertical flex, token gap. Props: space (Tailwind key, default "4"), align (default stretch), splitAfter (1–8), as, asChild.`
        case "cluster":
          return `- Cluster — horizontal wrap. Props: space, justify (start|center|end|between), align (start|center|end|baseline|stretch, default center), as, asChild. Always wraps. No wrap=false.`
        case "aside":
          return `- Aside — complementary column + fluid pane. NOT shadcn Sidebar. Children MUST be Aside.Side and Aside.Content. Props: sideWidth (default 20rem), contentMin (default 50%), space, side (start|end). Length props accept spacing keys or CSS lengths. Do not put min-w-0 on Aside.Content (it is the wrap trigger); put overflow on inner children.`
        case "switcher":
          return `- Switcher — equal columns until container < threshold, then column. No media query. Props: threshold (default 30rem), space, limit (2-6), as, asChild.`
        case "grid":
          return `- Grid — auto-fit minmax. CSS class is layout-grid, never Tailwind \`grid\`. Props: min (default 16rem), space, as, asChild.`
        case "center":
          return `- Center — measure-constrained, content-box so gutters sit outside measure. Props: measure (sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|prose|CSS length, default prose), gutters (default "0"), intrinsic, as, asChild.`
        case "cover":
          return `- Cover — minHeight default 100dvh. Centered node is Cover.Child. space is padding and the minimum gap between header, child, and footer. Do not asChild the Cover root.`
      }
    })
    .join("\n")

  const tree = decisionTree.map((row) => `- ${row.if} → ${row.then}`).join("\n")

  return `# shadcn-layout

> Intrinsic layout primitives for shadcn/ui. Not a second component library.

Prerequisite: an existing shadcn/ui app (\`components.json\`). This copies source into the host \`ui\` folder.

Install: \`${installCmd("layouts")}\`

Import: \`${kitImport}\`

Single primitive: \`${installCmd("stack")}\` then \`import { Stack } from "@/components/ui/stack"\`.

Files land next to the host ui alias (usually components/ui). Each primitive ships a .tsx, a .css imported by that file, and shared layout.ts. Do not add the CSS to globals.css.

Docs: / /stack /cluster /aside /switcher /grid /center /cover /recipes /agents
Agent contract: /agents, /agents.md (drop-in for the consuming app), /llms.txt, /llms-full.txt

## Allowed primitives (do not invent names)

${primitiveLines}

## Decision tree

${tree}

## space and lengths

space is a Tailwind spacing key: "0"|"0.5"|"1"|…|"96".
space="4" === gap-4. Do not pass rem values to space.
sideWidth, min, threshold, minHeight, contentMin: spacing key or CSS length ("72" = w-72, "20rem", "50%", "100dvh").

## className

On layout roots, className is for exceptions (width, background, min-height for splitAfter). Do not use it for gap, flex-direction, wrap, or justify. Those utilities will lose to the primitive CSS.

## as / asChild

as changes the element (Stack as="form", Aside.Side as="nav", Cover.Child as="h1").
asChild merges the layout onto a single child. Do not asChild Aside or Cover roots (they need slot children).

## Recipes

- Form: Stack as="form"; nested Stack per label+control.
- Page header: Cluster justify="between".
- Dialog footer: Cluster justify="end" inside shadcn DialogContent.
- Settings subnav: Aside inside page content; shadcn Sidebar remains app chrome.
- Auth: Cover + Cover.Child + Center + Stack form.
- Collection: Cluster header + Grid of shadcn Cards.

## Do not

- flex flex-col gap-4 instead of Stack
- flex flex-wrap justify-between instead of Cluster
- w-72 shrink-0 + flex-1 instead of Aside
- md:flex-row instead of Switcher
- Name anything SidebarLayout / VStack / Row
- Use shadcn Sidebar for in-page splits
- Add Box as a layout primitive (use shadcn Card for surfaces)
- Default Center gutters — set gutters only where the page needs an inline inset
`
}

export function llmsFullTxt() {
  const shots = fewShots
    .map((shot) => `### ${shot.title}\n\n${shot.note}\n\n\`\`\`tsx\n${shot.code}\n\`\`\``)
    .join("\n\n")

  return `${llmsTxt().trimEnd()}

## Few-shots

Copy these. Prefer @/components/ui/layouts after installing ${INSTALL_PREFIX}/layouts.

${shots}
`
}

export function agentsMd() {
  const tree = decisionTree.map((row) => `- ${row.if} → **${row.then}**`).join("\n")
  const shots = fewShots
    .map((shot) => `### ${shot.title}\n\n${shot.note}\n\n\`\`\`tsx\n${shot.code}\n\`\`\``)
    .join("\n\n")

  return `# shadcn-layout

Drop this file into the consuming app: \`AGENTS.md\` or \`.cursor/rules/layout-primitives.mdc\` (alwaysApply).

Intrinsic layout primitives for shadcn/ui. Not a second component library. Do not replace Button, Dialog, Card, or shadcn’s app \`Sidebar\`.

## Install

\`\`\`bash
${installCmd("layouts")}
\`\`\`

Then:

\`\`\`tsx
${kitImport}
\`\`\`

CSS is imported from each component. Do not add it to \`globals.css\`. If styles are missing, the \`.css\` file must sit next to the \`.tsx\`.

## Allowed names

Stack, Cluster, Aside, Switcher, Grid, Center, Cover.

Do not invent Row, VStack, SidebarLayout, Flex, or Box-as-layout. Aside is not shadcn \`Sidebar\`.

## Decision tree

${tree}

If a layout is not in the list, compose these. Do not add a new name.

## Rules

- \`space\` is a Tailwind spacing key (\`"4"\` = \`gap-4\`). Never rem on \`space\`.
- Length props (\`sideWidth\`, \`min\`, \`threshold\`, \`minHeight\`, \`contentMin\`) take a spacing key (\`"72"\` = \`w-72\`) or a CSS length.
- \`className\` on a layout root is for exceptions, not gap/direction/wrap/justify. Owned CSS is unlayered and will win over those utilities.
- \`as\` changes the element (\`as="form"\`). \`asChild\` merges onto a single child. Slots (\`Aside.Side\`, \`Cover.Child\`) also accept \`as\` / \`asChild\`. Do not \`asChild\` Aside or Cover roots.
- Aside children MUST be \`Aside.Side\` and \`Aside.Content\`.
- Cover’s centered node MUST be \`Cover.Child\`.
- Grid’s class is \`layout-grid\`. Do not add Tailwind \`grid\` to that node.
- Center \`gutters\` default to \`"0"\`. Set gutters at the page edge.
- Stack \`splitAfter\` pins following children to the end of a tall stack (\`className\` for min-height).
- shadcn owns Button, Input, Dialog, Card, and app Sidebar.

## Few-shots

${shots}
`
}

export function plainTextResponse(body: string) {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  })
}
