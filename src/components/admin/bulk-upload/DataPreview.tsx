interface DataPreviewProps {
  headers: string[];
  rows: string[][];
}

export const DataPreview = ({ headers, rows }: DataPreviewProps) => {
  return (
    <div className="mt-6">
      <h4 className="font-semibold mb-2">Preview</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-2 text-left text-sm font-medium text-muted-foreground">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-2 text-sm">
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