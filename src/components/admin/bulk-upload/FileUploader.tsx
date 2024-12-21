import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface FileUploaderProps {
  file: File | null;
  setFile: (file: File | null) => void;
  onFileSelect: (file: File) => void;
  uploading: boolean;
}

export const FileUploader = ({ file, setFile, onFileSelect, uploading }: FileUploaderProps) => {
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && (selectedFile.type === "text/csv" || selectedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
      setFile(selectedFile);
      onFileSelect(selectedFile);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please select a CSV or Excel file",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        className="relative hover:bg-primary hover:text-white transition-colors"
        disabled={uploading}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept=".csv,.xlsx"
          onChange={handleFileChange}
        />
        <Upload className="w-4 h-4 mr-2" />
        Select File
      </Button>
      {file && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium">{file.name}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFile(null)}
            className="p-1 h-auto"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};