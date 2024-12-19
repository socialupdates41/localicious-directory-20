import { Link } from "react-router-dom";
import { Home, Search, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-primary">Localicious</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/" className="block p-2 hover:bg-accent rounded-md">
                      Restaurants
                    </Link>
                    <Link to="/" className="block p-2 hover:bg-accent rounded-md">
                      Cafes
                    </Link>
                    <Link to="/" className="block p-2 hover:bg-accent rounded-md">
                      Hotels
                    </Link>
                    <Link to="/" className="block p-2 hover:bg-accent rounded-md">
                      Shopping
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-500" />
            <Menu className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;