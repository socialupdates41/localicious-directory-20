import { BulkUploadForm } from "@/components/admin/BulkUploadForm";

const BulkUpload = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bulk Upload Businesses</h1>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">Upload CSV File</h2>
        <p className="text-muted-foreground mb-6">
          Upload a CSV file containing business information. The file should include
          columns for name, category, address, description, phone, website, and
          image URL.
        </p>
        <BulkUploadForm />
      </div>
    </div>
  );
};

export default BulkUpload;