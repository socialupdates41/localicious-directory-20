import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface SEOFieldsProps {
  headers: string[];
  mappings: Record<string, string>;
  onMappingChange: (key: string, value: string) => void;
}

export const SEOFields = ({ headers, mappings, onMappingChange }: SEOFieldsProps) => {
  return (
    <div className="space-y-4">
      <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-2">
        SEO Fields
        <Badge variant="secondary" className="text-xs">Optional</Badge>
      </h4>
      <div className="grid gap-4">
        <FormField
          name="seoTitle"
          render={() => (
            <FormItem>
              <FormLabel>SEO Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Map SEO title column"
                  value={mappings.seoTitle}
                  onChange={(e) => onMappingChange("seoTitle", e.target.value)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="seoDescription"
          render={() => (
            <FormItem>
              <FormLabel>SEO Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="Map SEO description column"
                  value={mappings.seoDescription}
                  onChange={(e) => onMappingChange("seoDescription", e.target.value)}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};