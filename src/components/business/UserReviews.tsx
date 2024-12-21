import { Star, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

interface UserReviewsProps {
  reviews: Review[];
}

export const UserReviews = ({ reviews }: UserReviewsProps) => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{review.userName}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-muted">{review.date}</span>
              </div>
              <p className="text-foreground/80 mb-4">{review.comment}</p>
              <button className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>Helpful ({review.helpful})</span>
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};