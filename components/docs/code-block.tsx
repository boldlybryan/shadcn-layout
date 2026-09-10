export function DocsCode({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-xs leading-relaxed">
      <code>{children}</code>
    </pre>
  )
}
