/** @format */

import { TextInput } from "@mantine/core";
import { Search } from "lucide-react";

function SearchInput({ searchQuery, setSearchQuery }) {
  return (
    <TextInput
      label="Search"
      placeholder="Enter name or email"
      icon={<Search size="1em" color="black" />}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchInput;
