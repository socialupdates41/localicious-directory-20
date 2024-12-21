interface DataPreviewProps {
  headers: string[];
  rows: string[][];
}

export const DataPreview = ({ headers, rows }: DataPreviewProps) => {
  return (
    <div className="rounded-lg border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-accent/50">
              {headers.map((header) => (
                <th key={header} className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-accent/30 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-sm">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};