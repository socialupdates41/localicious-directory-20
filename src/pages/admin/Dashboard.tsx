import { Building2, Tags, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockBusinesses } from "../BusinessProfile";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Businesses",
      value: mockBusinesses.length,
      icon: Building2,
    },
    {
      title: "Premium Businesses",
      value: mockBusinesses.filter((b) => b.isPremium).length,
      icon: Users,
    },
    {
      title: "Categories",
      value: new Set(mockBusinesses.map((b) => b.category)).size,
      icon: Tags,
    },
    {
      title: "Locations",
      value: new Set(mockBusinesses.map((b) => b.address)).size,
      icon: MapPin,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;