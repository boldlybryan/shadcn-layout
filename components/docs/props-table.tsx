export function PropsTable({
  rows,
}: {
  rows: { prop: string; type: string; default?: string; description: string }[]
}) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-left text-sm">
        <thead className="border-b bg-muted/50">
          <tr>
            <th className="px-3 py-2 font-medium">Prop</th>
            <th className="px-3 py-2 font-medium">Type</th>
            <th className="px-3 py-2 font-medium">Default</th>
            <th className="px-3 py-2 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.prop} className="border-b last:border-0">
              <td className="px-3 py-2 align-top font-mono text-xs">{row.prop}</td>
              <td className="px-3 py-2 align-top font-mono text-xs text-muted-foreground">
                {row.type}
              </td>
              <td className="px-3 py-2 align-top font-mono text-xs text-muted-foreground">
                {row.default ?? "—"}
              </td>
              <td className="px-3 py-2 align-top text-muted-foreground">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
