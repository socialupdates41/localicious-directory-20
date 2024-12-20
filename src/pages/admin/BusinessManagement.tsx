import { useState } from "react";
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { mockBusinesses } from "../BusinessProfile";

const BusinessManagement = () => {
  const [businesses, setBusinesses] = useState(mockBusinesses);
  const { toast } = useToast();

  const handlePromote = (businessId: string) => {
    setBusinesses(
      businesses.map((business) =>
        business.id === businessId
          ? { ...business, isPremium: !business.isPremium }
          : business
      )
    );
    toast({
      title: "Business status updated",
      description: "The business promotion status has been updated successfully.",
    });
  };

  const handleDelete = (businessId: string) => {
    setBusinesses(businesses.filter((business) => business.id !== businessId));
    toast({
      title: "Business deleted",
      description: "The business has been deleted successfully.",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Business Management</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Business
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {businesses.map((business) => (
              <TableRow key={business.id}>
                <TableCell className="font-medium">{business.name}</TableCell>
                <TableCell>{business.category}</TableCell>
                <TableCell>{business.address}</TableCell>
                <TableCell>
                  {business.isPremium ? (
                    <Badge className="bg-accent">Premium</Badge>
                  ) : (
                    <Badge variant="secondary">Standard</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mr-2"
                    onClick={() => handlePromote(business.id)}
                  >
                    <Star
                      className={`w-4 h-4 ${
                        business.isPremium ? "fill-yellow-400" : ""
                      }`}
                    />
                  </Button>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => handleDelete(business.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BusinessManagement;