import { Building2, Coffee, Utensils, ShoppingBag, Hotel, Car } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Restaurants", icon: Utensils },
  { name: "Cafes", icon: Coffee },
  { name: "Shopping", icon: ShoppingBag },
  { name: "Hotels", icon: Hotel },
  { name: "Services", icon: Building2 },
  { name: "Auto", icon: Car },
];

export const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Card
          key={category.name}
          className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <category.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-accent transition-colors" />
          <h3 className="font-semibold">{category.name}</h3>
        </Card>
      ))}
    </div>
  );
};