import { useState } from "react";
import { Upload, CheckCircle, XCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Papa from 'papaparse';

interface PreviewData {
  headers: string[];
  rows: string[][];
}

export const BulkUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const [mappings, setMappings] = useState({
    businessName: "",
    category: "",
    contact: "",
    description: "",
    slug: "",
  });
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
      parsePreview(selectedFile);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please select a CSV file",
        variant: "destructive",
      });
    }
  };

  const parsePreview = (file: File) => {
    Papa.parse(file, {
      preview: 5,
      complete: (results) => {
        setPreview({
          headers: results.data[0] as string[],
          rows: results.data.slice(1) as string[][],
        });
      },
    });
  };

  const handleUpload = () => {
    if (!file || !validateMappings()) return;

    setUploading(true);
    Papa.parse(file, {
      complete: (results) => {
        console.log('Parsed CSV:', results.data);
        toast({
          title: "Upload Successful",
          description: `${results.data.length - 1} businesses uploaded successfully`,
        });
        setUploading(false);
        setFile(null);
        setPreview(null);
        setMappings({
          businessName: "",
          category: "",
          contact: "",
          description: "",
          slug: "",
        });
      },
      header: true,
      error: (error) => {
        console.error('Error parsing CSV:', error);
        toast({
          title: "Upload Failed",
          description: "Error parsing CSV file",
          variant: "destructive",
        });
        setUploading(false);
      }
    });
  };

  const validateMappings = () => {
    const required = ["businessName", "category", "description"];
    const missing = required.filter(field => !mappings[field as keyof typeof mappings]);
    
    if (missing.length > 0) {
      toast({
        title: "Missing Required Fields",
        description: `Please map the following fields: ${missing.join(", ")}`,
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="relative"
          disabled={uploading}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".csv"
            onChange={handleFileChange}
          />
          <Upload className="w-4 h-4 mr-2" />
          Select CSV File
        </Button>
        {file && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-green-500" />
            {file.name}
          </div>
        )}
      </div>

      {preview && (
        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Map CSV Columns</h3>
            <div className="grid gap-4">
              {Object.entries({
                businessName: "Business Name",
                category: "Category",
                contact: "Contact Information",
                description: "Description",
                slug: "URL Slug",
              }).map(([key, label]) => (
                <div key={key} className="flex items-center gap-4">
                  <span className="w-40">{label}:</span>
                  <Select
                    value={mappings[key as keyof typeof mappings]}
                    onValueChange={(value) => 
                      setMappings(prev => ({ ...prev, [key]: value }))
                    }
                  >
                    <SelectTrigger className="w-60">
                      <SelectValue placeholder={`Select ${label} column`} />
                    </SelectTrigger>
                    <SelectContent>
                      {preview.headers.map((header) => (
                        <SelectItem key={header} value={header}>
                          {header}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Preview</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead>
                    <tr>
                      {preview.headers.map((header) => (
                        <th key={header} className="px-4 py-2 text-left text-sm font-medium text-muted-foreground">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {preview.rows.map((row, i) => (
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
          </CardContent>
        </Card>
      )}

      {file && (
        <Button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full sm:w-auto"
        >
          {uploading ? "Uploading..." : "Upload Businesses"}
        </Button>
      )}
    </div>
  );
};