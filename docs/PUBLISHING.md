# Creating and publishing layout components

This project is a shadcn registry. You write source files, declare them in `registry.json`, build JSON into `public/r/`, then install that JSON into other apps (Zenith, a throwaway shadcn app, eventually anyone).

Official references:

- [Getting started](https://ui.shadcn.com/docs/registry/getting-started)
- [registry.json](https://ui.shadcn.com/docs/registry/registry-json)
- [registry-item.json](https://ui.shadcn.com/docs/registry/registry-item-json)
- [GitHub registries](https://ui.shadcn.com/docs/registry/github)
- [Registry directory](https://ui.shadcn.com/docs/registry/registry-index)

---

## What this registry ships

| Item | Role |
|---|---|
| `stack` | Vertical flex, token-backed gap |
| `cluster` | Horizontal wrap, alignment knobs |
| `aside` | Declared-width column + fluid pane (not shadcn `Sidebar`) |
| `switcher` | Row that becomes a column at a threshold, no media query |
| `grid` | Auto-fit minmax grid |
| `center` | Measure-constrained, centered column |
| `cover` | Viewport-filling column, child vertically centered |

Optional later:

- `layouts` — kit that `registryDependencies` all of the above
- example **blocks** (settings aside, page header) — recipes, not primitives

Rules:

- Algorithms live in CSS. React only sets custom properties (`--space`, `--threshold`, `--side-width`, …).
- Spacing props take the host scale (`space="4"` → same as Tailwind `gap-4` / Figma `spacing/4`). Do not invent `--spacer-*`.
- Do not depend on shadcn `sidebar`, `button`, or `card`. A layout must install into a bare shadcn app.
- Do not name anything `sidebar`.

---

## 1. Add a component

### Source files

Put primitives under `registry/new-york/ui/` so they sit next to the template’s existing UI files:

```
registry/new-york/ui/stack.tsx
registry/new-york/ui/layouts.css    # shared algorithms (optional first file)
```

Example component (knobs → CSS variables, no utility soup):

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

type Spacing = "0" | "1" | "2" | "3" | "4" | "6" | "8" | "12"

export function Stack({
  className,
  space = "4",
  as: Comp = "div",
  style,
  ...props
}: React.ComponentProps<"div"> & {
  space?: Spacing
  as?: "div" | "form" | "section" | "article"
}) {
  return (
    <Comp
      data-slot="stack"
      className={cn("stack", className)}
      style={{ "--space": `var(--spacing-${space})`, ...style } as React.CSSProperties}
      {...props}
    />
  )
}
```

Keep the algorithm in CSS, either:

- a shared `layouts.css` imported by the component, listed as a second file on the registry item, or
- the item’s `css` field in `registry.json` (injected into the host app’s CSS on install)

`example-with-css` in this template is the file-based pattern.

### Declare it in `registry.json`

```json
{
  "name": "stack",
  "type": "registry:ui",
  "title": "Stack",
  "description": "Vertical flex with a token-backed gap. Use for forms, sections, and stacked content.",
  "files": [
    {
      "path": "registry/new-york/ui/stack.tsx",
      "type": "registry:ui",
      "target": "@ui/stack.tsx"
    }
  ]
}
```

- `name` is the install id (`@shadcn-layout/stack`).
- `type: "registry:ui"` is for single-file primitives.
- `target: "@ui/stack.tsx"` writes into the host’s configured `ui` alias (Zenith’s `components/ui`, a typical app’s `src/components/ui`, etc.).
- Add `registryDependencies: ["@shadcn-layout/layouts-css"]` if you split CSS into its own item.
- Add `dependencies` only for npm packages. Layouts should need none.
- Write a real `description`. The CLI and LLMs use it.

If several files share a folder, you can split catalogs with `include` later. One root `registry.json` is enough for seven primitives.

### Preview it here

Import the component on `app/page.tsx` the same way `HelloWorld` is imported, so `bun dev` is the visual test. Template examples can stay until the first primitive replaces them.

---

## 2. Build the registry JSON

```bash
bun registry:build
```

That runs `shadcn build` and writes:

| File | Role |
|---|---|
| `public/r/registry.json` | Catalog (no file `content`) |
| `public/r/stack.json` | Install payload (includes source `content`) |

Rebuild after every item change. Stale `public/r` is the usual “CLI installed yesterday’s component” bug.

Then serve:

```bash
bun dev
```

Items are at `http://localhost:3000/r/stack.json`. The catalog is `http://localhost:3000/r/registry.json`.

---

## 3. Test install locally

From **another** shadcn project (a scratch app, or `customer-data-platform/apps/zenith`):

```bash
bunx shadcn@latest list http://localhost:3000/r/registry.json
bunx shadcn@latest view http://localhost:3000/r/stack.json
```

Bind the namespace once:

```bash
bunx shadcn@latest registry add @shadcn-layout=http://localhost:3000/r/{name}.json
```

`{name}` must resolve to **item** JSON (`/r/stack.json`), not the catalog.

```bash
bunx shadcn@latest add @shadcn-layout/stack
bunx shadcn@latest add @shadcn-layout/aside
```

Confirm:

- File landed under the host `ui` directory as `stack.tsx`
- Spacing uses the host token scale
- No second token file appeared
- A settings-style page can use `<Aside>` instead of `aside w-72 shrink-0`

---

## 4. Publish for other people

Three layers. Do them in order. You can dogfood CDP at layer A or B.

### A. GitHub registry (no site required)

1. Create a public GitHub repo (suggested name: `shadcn-layout`).
2. Add `origin` and push. Keep `template` as the upstream template remote if you want.
3. Root `registry.json` must stay valid and paths must exist.

```bash
git remote add origin git@github.com:<you>/shadcn-layout.git
git push -u origin main

bunx shadcn@latest registry validate <you>/shadcn-layout
bunx shadcn@latest add <you>/shadcn-layout/stack
```

Anyone can install from GitHub with no directory listing.

Pin a tag when you tag releases:

```bash
bunx shadcn@latest add <you>/shadcn-layout/stack#v0.1.0
```

### B. Hosted namespace (`@shadcn-layout/stack`)

The official directory and `registry add @shadcn-layout=…` need a **flat HTTP catalog**:

- `https://<host>/r/registry.json`
- `https://<host>/r/stack.json`

`bun registry:build` already produces that under `public/r/`. Deploy this Next app (Vercel is the path of least resistance) so `/r/*.json` is public.

Users then:

```bash
bunx shadcn@latest registry add @shadcn-layout=https://<host>/r/{name}.json
bunx shadcn@latest add @shadcn-layout/stack
```

Set `homepage` in `registry.json` to that public site before you submit the directory PR.

### C. Official shadcn directory

This is how `npx shadcn add @shadcn-layout/stack` works with **no** URL config.

Requirements ([registry directory](https://ui.shadcn.com/docs/registry/registry-index)):

- Open source and public
- Valid schema
- Flat endpoint (`/registry.json` and `/stack.json` at the registry root, i.e. your `/r/` folder)
- Catalog `files` arrays must **not** include `content` (`shadcn build` already does this)

PR against [shadcn-ui/ui](https://github.com/shadcn-ui/ui):

1. Add an entry to `apps/v4/registry/directory.json`:

```json
{
  "name": "@shadcn-layout",
  "homepage": "https://github.com/boldlybryan/shadcn-layout",
  "url": "https://<host>/r/{name}.json",
  "description": "Intrinsic layout primitives for shadcn: Stack, Cluster, Aside, Switcher, Grid, Center, Cover.",
  "logo": "<svg>…</svg>"
}
```

2. Run `pnpm validate:registries` in that repo.
3. Open the PR. Merge publishes immediately.

Do this after the primitives exist, examples work (`shadcn list` / `add` against the live host), and docs say Aside is not the app Sidebar.

---

## Suggested order

1. Stack + Cluster in this repo, preview on `app/page.tsx`
2. `bun registry:build` + localhost `@shadcn-layout` into a scratch shadcn app
3. Aside, then Switcher / Grid / Center / Cover
4. Local install into Zenith; replace advertiser `SettingsLayout` soup with Aside
5. Public GitHub repo
6. Host `/r/`
7. Directory PR

---

## Checklist for each item

- [ ] Source lives under `registry/new-york/ui/`
- [ ] Entry in root `registry.json` (`type`, `title`, `description`, `files`, `target`)
- [ ] Preview on the docs homepage
- [ ] `bun registry:build` — `public/r/<name>.json` exists
- [ ] `shadcn view` / `add` from another project succeeds
- [ ] No collision with shadcn `Sidebar`; no extra token file
