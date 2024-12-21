import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface VariableMappingProps {
  headers: string[];
  mappings: Record<string, string>;
  onMappingChange: (key: string, value: string) => void;
  required?: string[];
  optional?: string[];
}

const fieldLabels: Record<string, string> = {
  businessName: "Business Name",
  category: "Category",
  address: "Address",
  description: "Description",
  phone: "Phone",
  slug: "URL Slug",
  website: "Website",
  imageUrl: "Image URL",
  rating: "Rating",
  seoTitle: "SEO Title",
  seoDescription: "SEO Description",
};

export const VariableMapping = ({ 
  headers, 
  mappings, 
  onMappingChange,
  required = [],
  optional = []
}: VariableMappingProps) => {
  const fields = required.concat(optional);

  return (
    <div className="space-y-4">
      {fields.map((key) => (
        <div key={key} className="flex items-center gap-4">
          <div className="w-40 flex items-center gap-2">
            <span className="text-sm font-medium">{fieldLabels[key]}</span>
            {required.includes(key) && (
              <Badge variant="secondary" className="text-xs">Required</Badge>
            )}
          </div>
          <Select
            value={mappings[key]}
            onValueChange={(value) => onMappingChange(key, value)}
          >
            <SelectTrigger className="w-60">
              <SelectValue placeholder={`Select ${fieldLabels[key]} column`} />
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