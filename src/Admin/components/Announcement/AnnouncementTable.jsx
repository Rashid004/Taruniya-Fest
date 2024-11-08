/** @format */

import { Checkbox, Table } from "@mantine/core";
import AnnouncementRow from "./AnnouncementRow";

function AnnouncementTable({
  announcements,
  selectedAnnouncements,
  handleSelectionChange,
  handleSelectAll,
}) {
  return (
    <div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Checkbox
                aria-label="Select all announcements"
                checked={selectedAnnouncements.length === announcements.length}
                onChange={handleSelectAll}
              />
            </Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Time</Table.Th>
            <Table.Th>Location</Table.Th>
            <Table.Th>Link</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {announcements.map((item) => (
            <AnnouncementRow
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              time={item.time}
              location={item.location}
              link={item.link}
              isSelected={selectedAnnouncements.includes(item.id)}
              onSelectionChange={handleSelectionChange}
            />
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default AnnouncementTable;
