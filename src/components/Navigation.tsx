import { Link } from "react-router-dom";
import { Home, Search, Menu } from "lucide-react";

const Navigation = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-primary">Localicious</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-muted hover:text-primary transition-colors" />
            <Menu className="w-5 h-5 text-muted hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;