import { Stack } from "@/registry/new-york/ui/stack"

export function DocsArticle({ children }: { children: React.ReactNode }) {
  return (
    <article className="mx-auto w-full max-w-3xl">
      <Stack space="8">{children}</Stack>
    </article>
  )
}

export function DocsSection({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <Stack space="4">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {children}
      </Stack>
    </section>
  )
}

export function PageHeader({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <header>
      <Stack space="3">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <div className="text-base text-muted-foreground [&_p+p]:mt-3">{children}</div>
      </Stack>
    </header>
  )
}

export function Install({ item }: { item: string }) {
  const cmd = `pnpm dlx shadcn@latest add boldlybryan/shadcn-layout/${item}`
  return (
    <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
      <code>{cmd}</code>
    </pre>
  )
}
