import { Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const MappingInstructions = () => {
  return (
    <Alert className="bg-accent/50 border-accent">
      <Info className="h-4 w-4" />
      <AlertDescription className="ml-2">
        <p className="text-sm text-muted-foreground">
          Drag or select the column headers from your uploaded file to map them to the appropriate variables.
          Required fields will be highlighted. Ensure all necessary details are mapped before proceeding.
        </p>
      </AlertDescription>
    </Alert>
  );
};