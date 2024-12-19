import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SearchBar = () => {
  return (
    <div className="relative flex w-full max-w-3xl">
      <Input
        type="text"
        placeholder="Search for businesses..."
        className="pr-12 rounded-r-none h-12 text-lg"
      />
      <Button className="h-12 px-6 rounded-l-none">
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
};