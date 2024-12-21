import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Papa from 'papaparse';
import { FileUploader } from "./bulk-upload/FileUploader";
import { MappingInstructions } from "./bulk-upload/MappingInstructions";
import { VariableMapping } from "./bulk-upload/VariableMapping";
import { SEOFields } from "./bulk-upload/SEOFields";
import { DataPreview } from "./bulk-upload/DataPreview";

interface PreviewData {
  headers: string[];
  rows: string[][];
}

const DEFAULT_PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";

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
    email: "",
    slug: "",
    website: "",
    imageUrl: "",
    rating: "",
    seoTitle: "",
    seoDescription: "",
  });

  const { toast } = useToast();

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

  const processBusinessData = (data: any[]) => {
    return data.map(row => ({
      ...row,
      imageUrl: row.imageUrl || DEFAULT_PLACEHOLDER_IMAGE,
      slug: row.slug || row.businessName.toLowerCase().replace(/\s+/g, '-'),
      rating: parseFloat(row.rating) || 0,
    }));
  };

  const handleUpload = () => {
    if (!file || !validateMappings()) return;

    setUploading(true);
    Papa.parse(file, {
      complete: (results) => {
        const processedData = processBusinessData(results.data as any[]);
        console.log('Processed business data:', processedData);
        
        toast({
          title: "Upload Successful",
          description: `${processedData.length - 1} businesses uploaded successfully`,
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
          email: "",
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
        console.error('Error parsing file:', error);
        toast({
          title: "Upload Failed",
          description: "Error parsing file",
          variant: "destructive",
        });
        setUploading(false);
      }
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-lg border-accent">
        <CardContent className="p-6 space-y-6">
          <FileUploader
            file={file}
            setFile={setFile}
            onFileSelect={parsePreview}
            uploading={uploading}
          />

          {preview && (
            <>
              <MappingInstructions />

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-4">Required Fields</h4>
                    <VariableMapping
                      headers={preview.headers}
                      mappings={mappings}
                      onMappingChange={handleMappingChange}
                      required={["businessName", "category", "description"]}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-4">Optional Fields</h4>
                    <VariableMapping
                      headers={preview.headers}
                      mappings={mappings}
                      onMappingChange={handleMappingChange}
                      optional={["phone", "email", "website", "imageUrl", "rating"]}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <SEOFields
                    headers={preview.headers}
                    mappings={mappings}
                    onMappingChange={handleMappingChange}
                  />

                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-4">Data Preview</h4>
                    <DataPreview headers={preview.headers} rows={preview.rows} />
                  </div>
                </div>
              </div>

              <Button
                onClick={handleUpload}
                disabled={uploading}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                {uploading ? "Uploading..." : "Upload Businesses"}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};