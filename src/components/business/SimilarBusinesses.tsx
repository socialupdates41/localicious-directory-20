import { BusinessCard } from "@/components/BusinessCard";
import { mockBusinesses } from "@/pages/BusinessProfile";

interface SimilarBusinessesProps {
  currentBusinessId: string;
}

export const SimilarBusinesses = ({ currentBusinessId }: SimilarBusinessesProps) => {
  const suggestedBusinesses = mockBusinesses
    .filter((b) => b.id !== currentBusinessId)
    .slice(0, 3);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Similar Businesses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestedBusinesses.map((business) => (
          <BusinessCard key={business.id} {...business} />
        ))}
      </div>
    </section>
  );
};