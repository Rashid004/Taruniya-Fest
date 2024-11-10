/** @format */

import { Checkbox, Table } from "@mantine/core";

function BlogTable() {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Checkbox
              aria-label="Select all announcements"
              // checked={selectedAnnouncements.length === announcements.length}
              // onChange={handleSelectAll}
            />
          </Table.Th>
          <Table.Th>Image</Table.Th>
          <Table.Th>Title</Table.Th>
          <Table.Th>Description</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {/* {paginatedItems.map((item) => (
          <AnnouncementRow
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            time={item.time}
            location={item.location}
            link={item.link}
            searchQuery={searchQuery}
            isSelected={selectedAnnouncements.includes(item.id)}
            onSelectionChange={handleSelectionChange}
          />
        ))} */}
      </Table.Tbody>
    </Table>
  );
}

export default BlogTable;
