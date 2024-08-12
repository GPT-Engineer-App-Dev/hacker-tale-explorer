import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        type="text"
        placeholder="Search stories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 w-full bg-white border-2 border-hn-orange focus:ring-2 focus:ring-hn-orange focus:border-transparent transition-all duration-300"
      />
    </div>
  );
};

export default SearchBar;