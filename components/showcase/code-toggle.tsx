export function CodeToggle({ code }: { code: string }) {
  return (
    <details className="border-t bg-muted/30">
      <summary className="cursor-pointer px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
        Code
      </summary>
      <div className="border-t">
        <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </details>
  )
}
