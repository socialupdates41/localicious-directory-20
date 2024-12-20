import { Building2, Coffee, Utensils, ShoppingBag, Hotel, Car } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Restaurants", icon: Utensils, value: "restaurants" },
  { name: "Cafes", icon: Coffee, value: "cafes" },
  { name: "Shopping", icon: ShoppingBag, value: "shopping" },
  { name: "Hotels", icon: Hotel, value: "hotels" },
  { name: "Services", icon: Building2, value: "services" },
  { name: "Auto", icon: Car, value: "auto" },
];

export const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    console.log("Category clicked:", category);
    // Will be implemented in the next iteration with filtering
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Card
          key={category.value}
          className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
          onClick={() => handleCategoryClick(category.value)}
        >
          <category.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-accent transition-colors" />
          <h3 className="font-semibold">{category.name}</h3>
        </Card>
      ))}
    </div>
  );
};