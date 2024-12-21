import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface VariableMappingProps {
  headers: string[];
  mappings: Record<string, string>;
  onMappingChange: (key: string, value: string) => void;
}

export const VariableMapping = ({ headers, mappings, onMappingChange }: VariableMappingProps) => {
  const fields = [
    { key: "businessName", label: "Business Name" },
    { key: "category", label: "Category" },
    { key: "address", label: "Address" },
    { key: "description", label: "Description" },
    { key: "phone", label: "Phone" },
    { key: "slug", label: "URL Slug" },
    { key: "website", label: "Website" },
    { key: "imageUrl", label: "Image URL" },
    { key: "rating", label: "Rating" },
    { key: "seoTitle", label: "SEO Title" },
    { key: "seoDescription", label: "SEO Description" },
  ];

  return (
    <div className="grid gap-4">
      {fields.map(({ key, label }) => (
        <div key={key} className="flex items-center gap-4">
          <span className="w-40">{label}:</span>
          <Select
            value={mappings[key]}
            onValueChange={(value) => onMappingChange(key, value)}
          >
            <SelectTrigger className="w-60">
              <SelectValue placeholder={`Select ${label} column`} />
            </SelectTrigger>
            <SelectContent>
              {headers.map((header) => (
                <SelectItem key={header} value={header}>
                  {header}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  );
};