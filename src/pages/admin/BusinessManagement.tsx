import { BusinessForm } from "@/components/admin/BusinessForm";

const BusinessManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Business Management</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Add New Business</h2>
          <BusinessForm />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Business List</h2>
          <p className="text-muted-foreground">Business listing coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessManagement;