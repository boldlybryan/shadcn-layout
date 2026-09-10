import { importLine, primitives } from "@/lib/docs"

import { DocsCode } from "@/components/docs/code-block"

export function Usage({
  item,
  names,
  snippet,
}: {
  item: string
  names?: string
  snippet?: string
}) {
  const primitive = primitives.find((entry) => entry.install === item)
  const imported =
    names ?? (item === "layouts" ? "Aside, Cluster, Stack" : primitive?.importName)
  const code =
    snippet ??
    (item === "layouts"
      ? `<Stack space="8">
  <Cluster justify="between">
    <h1>Settings</h1>
    <button>Save</button>
  </Cluster>
  <Aside sideWidth="72">
    <Aside.Side as="nav">{/* subnav */}</Aside.Side>
    <Aside.Content>{/* page */}</Aside.Content>
  </Aside>
</Stack>`
      : primitive?.usage ?? "")

  return <DocsCode>{`${importLine(item, imported)}\n\n${code}`}</DocsCode>
}
