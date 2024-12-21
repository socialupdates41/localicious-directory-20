import { useParams } from "react-router-dom";
import { Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BusinessDetails } from "@/components/business/BusinessDetails";
import { LocationBreadcrumb } from "@/components/business/LocationBreadcrumb";
import { SimilarBusinesses } from "@/components/business/SimilarBusinesses";
import { UserReviews } from "@/components/business/UserReviews";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const mockBusinesses = [
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

const mockReviews = [
  {
    id: "1",
    userName: "John Doe",
    rating: 5,
    comment: "Amazing experience! The service was outstanding.",
    date: "2024-02-15",
    helpful: 12,
  },
  {
    id: "2",
    userName: "Jane Smith",
    rating: 4,
    comment: "Great place, would definitely recommend.",
    date: "2024-02-10",
    helpful: 8,
  },
];

const BusinessProfile = () => {
  const { id } = useParams();
  const business = mockBusinesses.find((b) => b.id === id) || mockBusinesses[0];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="bg-accent/10 py-4">
        <div className="container max-w-6xl mx-auto px-4">
          <LocationBreadcrumb 
            businessName={business.name}
            address={business.address}
          />
        </div>
      </div>
      <main className="flex-grow">
        <div className="container max-w-6xl mx-auto py-8 px-4">
          <BusinessDetails business={business} />
          
          <div className="mt-8 flex gap-4 justify-center">
            {business.phone && (
              <Button size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            )}
            {business.website && (
              <Button size="lg" variant="outline" className="gap-2">
                <Globe className="w-4 h-4" />
                Visit Website
              </Button>
            )}
          </div>

          <UserReviews reviews={mockReviews} />
          <SimilarBusinesses currentBusinessId={business.id} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessProfile;
