/** @format */

import { TextInput } from "@mantine/core";
import { Search } from "lucide-react";

function FilterAnnouncement({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full max-w-xs">
      <div className="absolute inset-y-0 left-0 z-20 flex items-center pl-3 pointer-events-none">
        <Search size="1em" color="gray" />
      </div>
      <TextInput
        placeholder="Search announcements"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        radius="sm"
        size="md"
        styles={{
          input: { paddingLeft: "2.5rem" }, // Add padding to prevent text overlap with icon
        }}
      />
    </div>
  );
}

export default FilterAnnouncement;
