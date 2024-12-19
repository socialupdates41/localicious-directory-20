import { SearchBar } from "@/components/SearchBar";
import { LocationFilter } from "@/components/LocationFilter";
import { CategoryGrid } from "@/components/CategoryGrid";
import { BusinessCard } from "@/components/BusinessCard";

const Index = () => {
  // Mock data for demonstration
  const featuredBusinesses = [
    {
      name: "The Coffee House",
      category: "Cafe",
      rating: 4.5,
      reviews: 128,
      address: "123 Main St, San Francisco, CA",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
      isPremium: true,
    },
    {
      name: "Golden Gate Restaurant",
      category: "Restaurant",
      rating: 4.2,
      reviews: 89,
      address: "456 Market St, San Francisco, CA",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      isPremium: true,
    },
    {
      name: "City Fitness Center",
      category: "Gym",
      rating: 4.8,
      reviews: 256,
      address: "789 Fitness Ave, San Francisco, CA",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    },
  ];

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
              <BusinessCard key={business.name} {...business} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;