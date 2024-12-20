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
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Index />
              <Footer />
            </>
          }
        />
        <Route
          path="/business/:id"
          element={
            <>
              <BusinessProfile />
            </>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="businesses" element={<BusinessManagement />} />
          <Route path="bulk-upload" element={<BulkUpload />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;