import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload } from "lucide-react";

const BulkUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a CSV file",
        variant: "destructive",
      });
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result as string;
      const lines = text.split("\n");
      const headers = lines[0].split(",");
      const businesses = lines.slice(1).map((line) => {
        const values = line.split(",");
        const business: Record<string, string> = {};
        headers.forEach((header, index) => {
          business[header.trim()] = values[index]?.trim() || "";
        });
        return business;
      });

      console.log("Parsed businesses:", businesses);
      toast({
        title: "Upload successful",
        description: `${businesses.length} businesses parsed from CSV`,
      });
    };

    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bulk Upload Businesses</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload CSV File</CardTitle>
          <CardDescription>
            Upload a CSV file containing business information. The file should
            include headers for: name, category, address, description, rating,
            reviews, image
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
          </div>
          <Button
            onClick={handleUpload}
            disabled={!file}
            className="w-full sm:w-auto"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload and Process
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>CSV Format Guide</CardTitle>
          <CardDescription>
            Your CSV file should follow this format:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            name,category,address,description,rating,reviews,image
            Business Name,Category,Full Address,Description,4.5,100,image-url
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default BulkUpload;