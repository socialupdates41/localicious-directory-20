import { useParams } from "react-router-dom";
import { Star, MapPin, Globe, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BusinessCard } from "@/components/BusinessCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LocationFilter } from "@/components/LocationFilter";

const BusinessProfile = () => {
  const { id } = useParams();

  // In a real app, this would fetch from an API
  const business = mockBusinesses.find((b) => b.id === id) || mockBusinesses[0];
  const suggestedBusinesses = mockBusinesses.filter((b) => b.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="bg-gray-50 py-4">
        <div className="container max-w-6xl mx-auto px-4">
          <LocationFilter />
        </div>
      </div>
      <main className="flex-grow">
        <div className="container max-w-6xl mx-auto py-8 px-4">
          {/* Main Business Info */}
          <Card className="mb-8">
          <div className="relative h-64 md:h-96">
            <img
              src={business.image}
              alt={business.name}
              className="w-full h-full object-cover"
            />
            {business.isPremium && (
              <Badge className="absolute top-4 right-4 bg-accent">
                Premium
              </Badge>
            )}
          </div>
          <CardHeader className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">{business.name}</h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="text-lg">{business.rating}</span>
                  <span>({business.reviews} reviews)</span>
                </div>
              </div>
              <Badge variant="secondary" className="text-lg">
                {business.category}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-4">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1" />
              <span>{business.address}</span>
            </div>
            {business.website && (
              <div className="flex items-start gap-2">
                <Globe className="w-5 h-5 mt-1" />
                <a href={business.website} className="text-primary hover:underline">
                  {business.website}
                </a>
              </div>
            )}
            {business.phone && (
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-1" />
                <span>{business.phone}</span>
              </div>
            )}
            {business.hours && (
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-1" />
                <span>{business.hours}</span>
              </div>
            )}
            <p className="text-muted-foreground mt-4">{business.description}</p>
          </CardContent>
          </Card>

          {/* Suggested Businesses */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Similar Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedBusinesses.map((business) => (
                <BusinessCard key={business.id} {...business} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const mockBusinesses = [
  {
    id: "1",
    name: "The Coffee House",
    category: "Cafe",
    rating: 4.5,
    reviews: 128,
    address: "123 Main St, San Francisco, CA",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    website: "www.thecoffeehouse.com",
    phone: "(415) 555-0123",
    hours: "Mon-Sun: 7:00 AM - 8:00 PM",
    description: "A cozy coffee shop serving artisanal coffee and fresh pastries in the heart of San Francisco.",
    isPremium: true,
  },
  {
    id: "2",
    name: "Golden Gate Restaurant",
    category: "Restaurant",
    rating: 4.2,
    reviews: 89,
    address: "456 Market St, San Francisco, CA",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    website: "www.goldengaterestaurant.com",
    phone: "(415) 555-0124",
    hours: "Tue-Sun: 11:00 AM - 10:00 PM",
    description: "Fine dining restaurant offering California cuisine with a spectacular view of the Golden Gate Bridge.",
    isPremium: true,
  },
  {
    id: "3",
    name: "City Fitness Center",
    category: "Gym",
    rating: 4.8,
    reviews: 256,
    address: "789 Fitness Ave, San Francisco, CA",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    website: "www.cityfitness.com",
    phone: "(415) 555-0125",
    hours: "Mon-Sun: 5:00 AM - 11:00 PM",
    description: "State-of-the-art fitness center with modern equipment and expert trainers.",
    isPremium: false,
  },
  {
    id: "4",
    name: "Bay Area Tech Hub",
    category: "Services",
    rating: 4.6,
    reviews: 167,
    address: "321 Tech Blvd, San Francisco, CA",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    website: "www.bayareatechhub.com",
    phone: "(415) 555-0126",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    description: "Professional co-working space and tech community center with high-speed internet and meeting rooms.",
    isPremium: true,
  },
  {
    id: "5",
    name: "Ocean View Hotel",
    category: "Hotel",
    rating: 4.4,
    reviews: 312,
    address: "555 Beach St, San Francisco, CA",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    website: "www.oceanviewsf.com",
    phone: "(415) 555-0127",
    hours: "24/7",
    description: "Luxury beachfront hotel with stunning ocean views and world-class amenities.",
    isPremium: true,
  },
  {
    id: "6",
    name: "Green Valley Market",
    category: "Shopping",
    rating: 4.3,
    reviews: 178,
    address: "777 Market St, San Francisco, CA",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    website: "www.greenvalleymarket.com",
    phone: "(415) 555-0128",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
    description: "Local organic grocery store featuring fresh produce, artisanal goods, and a juice bar.",
    isPremium: false,
  }
];

export default BusinessProfile;