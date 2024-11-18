/** @format */

import { Checkbox, Flex, Pagination, Table } from "@mantine/core";
import AnnouncementRow from "./AnnouncementRow";
import usePagination from "../../../hook/usePagination";
import { ITEMS_PER_PAGE } from "../../../utils/const";
import { useEffect } from "react";
import { s } from "framer-motion/client";

function AnnouncementTable({
  announcements,
  selectedAnnouncements,
  handleSelectionChange,
  handleSelectAll,
  searchQuery,
}) {
  const { handlePageChange, paginatedItems, currentPage } = usePagination(
    announcements,
    ITEMS_PER_PAGE
  );

  useEffect(() => {
    handlePageChange(1);
  }, [handlePageChange, searchQuery]);

  const totalPage = Math.ceil(announcements.length / ITEMS_PER_PAGE);

  return (
    <div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Checkbox
                aria-label="Select all announcements"
                checked={
                  announcements.length > 0 &&
                  selectedAnnouncements.length === announcements.length
                }
                onChange={handleSelectAll}
              />
            </Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Time</Table.Th>
            <Table.Th>Location</Table.Th>
            <Table.Th>Link</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginatedItems.map((item) => (
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
          ))}
        </Table.Tbody>
      </Table>
      {announcements.length > ITEMS_PER_PAGE && (
        <Flex justify="center" className="mt-4">
          <Pagination
            total={totalPage}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Flex>
      )}
    </div>
  );
}

export default AnnouncementTable;
