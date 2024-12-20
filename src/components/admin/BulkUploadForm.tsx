import { useState } from "react";
import { Upload, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Papa from 'papaparse';

export const BulkUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please select a CSV file",
        variant: "destructive",
      });
    }
  };

  const handleUpload = () => {
    if (!file) return;

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