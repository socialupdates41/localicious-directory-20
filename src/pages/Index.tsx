import { SearchBar } from "@/components/SearchBar";
import { LocationFilter } from "@/components/LocationFilter";
import { CategoryGrid } from "@/components/CategoryGrid";
import { BusinessCard } from "@/components/BusinessCard";
import { useNavigate } from "react-router-dom";
import { mockBusinesses } from "./BusinessProfile";

const Index = () => {
  const navigate = useNavigate();
  const featuredBusinesses = mockBusinesses.filter(business => business.isPremium);

  const handleBusinessClick = (businessId: string) => {
    navigate(`/business/${businessId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary py-20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Local Businesses
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Find the best local businesses in your area
          </p>
          <div className="flex flex-col items-center gap-4">
            <SearchBar />
            <LocationFilter />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Businesses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBusinesses.map((business) => (
              <div
                key={business.id}
                onClick={() => handleBusinessClick(business.id)}
                className="cursor-pointer"
              >
                <BusinessCard {...business} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;