import { Link, Outlet } from "react-router-dom";
import { LayoutDashboard, Building2, Tags, MapPin, Upload } from "lucide-react";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="w-64 bg-gray-50 border-r min-h-screen p-4">
          <div className="mb-8">
            <Link to="/" className="text-xl font-bold text-primary">
              Localicious Admin
            </Link>
          </div>
          <nav className="space-y-2">
            <Link
              to="/admin"
              className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              to="/admin/businesses"
              className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
            >
              <Building2 className="w-4 h-4" />
              Businesses
            </Link>
            <Link
              to="/admin/bulk-upload"
              className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
            >
              <Upload className="w-4 h-4" />
              Bulk Upload
            </Link>
            <Link
              to="/admin/categories"
              className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
            >
              <Tags className="w-4 h-4" />
              Categories
            </Link>
            <Link
              to="/admin/locations"
              className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
            >
              <MapPin className="w-4 h-4" />
              Locations
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;