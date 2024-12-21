import { useState } from "react";
import { Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import Papa from 'papaparse';
import { VariableMapping } from "./bulk-upload/VariableMapping";
import { DataPreview } from "./bulk-upload/DataPreview";

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
    address: "",
    description: "",
    phone: "",
    slug: "",
    website: "",
    imageUrl: "",
    rating: "",
    seoTitle: "",
    seoDescription: "",
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

  const handleMappingChange = (key: string, value: string) => {
    setMappings(prev => ({ ...prev, [key]: value }));
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
          address: "",
          description: "",
          phone: "",
          slug: "",
          website: "",
          imageUrl: "",
          rating: "",
          seoTitle: "",
          seoDescription: "",
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
            <VariableMapping 
              headers={preview.headers}
              mappings={mappings}
              onMappingChange={handleMappingChange}
            />
            <DataPreview headers={preview.headers} rows={preview.rows} />
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