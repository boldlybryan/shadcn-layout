import { Stack } from "@/registry/new-york/ui/stack"

export function Example({
  label,
  code,
  children,
}: {
  label?: string
  code: string
  children: React.ReactNode
}) {
  return (
    <Stack space="3">
      {label ? <p className="text-sm text-muted-foreground">{label}</p> : null}
      <div className="rounded-lg border bg-background p-4">{children}</div>
      <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
        <code>{code}</code>
      </pre>
    </Stack>
  )
}
