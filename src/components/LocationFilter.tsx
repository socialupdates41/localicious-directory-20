import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const LocationFilter = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select State" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ca">California</SelectItem>
          <SelectItem value="ny">New York</SelectItem>
          <SelectItem value="tx">Texas</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select City" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sf">San Francisco</SelectItem>
          <SelectItem value="la">Los Angeles</SelectItem>
          <SelectItem value="sd">San Diego</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};