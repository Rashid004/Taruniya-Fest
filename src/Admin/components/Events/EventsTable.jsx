/** @format */

import { Checkbox, Flex, Pagination, Table } from "@mantine/core";
import EventRow from "./EventRow";
import usePagination from "../../../hook/usePagination";
import { ITEMS_PER_PAGE } from "../../../utils/const";
import { useEffect } from "react";

function EventTable({
  searchQuery,
  events,
  selectedEvents,
  handleSelectionChange,
  handleSelectAll,
}) {
  const { handlePageChange, paginatedItems, currentPage } = usePagination(
    events,
    ITEMS_PER_PAGE
  );

  useEffect(() => {
    handlePageChange(1);
  }, [searchQuery]);

  const totalPage = Math.ceil(events.length / ITEMS_PER_PAGE);

  return (
    <div>
      <Table className="z-40">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Checkbox
                aria-label="Select all announcements"
                checked={selectedEvents.length === events.length}
                onChange={handleSelectAll}
              />
            </Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginatedItems.map((item) => (
            <EventRow
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              isSelected={selectedEvents.includes(item.id)}
              onSelectionChange={handleSelectionChange}
            />
          ))}
        </Table.Tbody>
      </Table>
      {events.length > ITEMS_PER_PAGE && (
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

export default EventTable;
