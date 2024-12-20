import { Star, MapPin, Globe, Phone, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BusinessDetailsProps {
  business: {
    name: string;
    rating: number;
    reviews: number;
    address: string;
    website?: string;
    phone?: string;
    hours?: string;
    description?: string;
    image: string;
    category: string;
    isPremium?: boolean;
  };
}

export const BusinessDetails = ({ business }: BusinessDetailsProps) => {
  return (
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
  );
};