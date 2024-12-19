import { Star, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BusinessCardProps {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  address: string;
  image: string;
  isPremium?: boolean;
}

export const BusinessCard = ({
  name,
  category,
  rating,
  reviews,
  address,
  image,
  isPremium = false,
}: BusinessCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {isPremium && (
          <Badge className="absolute top-2 right-2 bg-accent">
            Premium
          </Badge>
        )}
      </div>
      <CardHeader className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span>{rating}</span>
          <span>({reviews} reviews)</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 mt-1" />
          <span>{address}</span>
        </div>
        <Badge variant="secondary">{category}</Badge>
      </CardContent>
    </Card>
  );
};