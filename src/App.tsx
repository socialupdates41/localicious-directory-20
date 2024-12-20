import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import BusinessProfile from "./pages/BusinessProfile";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import BusinessManagement from "./pages/admin/BusinessManagement";
import BulkUpload from "./pages/admin/BulkUpload";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <main className="flex-grow">
                  <Index />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/business/:id"
            element={
              <>
                <Navigation />
                <main className="flex-grow">
                  <BusinessProfile />
                </main>
                <Footer />
              </>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="businesses" element={<BusinessManagement />} />
            <Route path="bulk-upload" element={<BulkUpload />} />
          </Route>

          {/* Catch-all route for 404 */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl">404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;