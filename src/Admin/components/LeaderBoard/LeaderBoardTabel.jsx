/** @format */

import { Checkbox, Flex, Pagination, Table } from "@mantine/core";
import usePagination from "../../../hook/usePagination";
import { ITEMS_PER_PAGE } from "../../../utils/const";
import { useEffect } from "react";
import LeaderBoardRow from "./LeaderBoardRow";

function LeaderBoardTable({
  leaderBoards,
  selectedLeaderBoards,
  handleSelectionChange,
  handleSelectAll,
  searchQuery,
}) {
  const { handlePageChange, paginatedItems, currentPage } = usePagination(
    leaderBoards,
    ITEMS_PER_PAGE
  );

  useEffect(() => {
    handlePageChange(1);
  }, [handlePageChange, searchQuery]);
  const totalPage = Math.ceil(leaderBoards.length / ITEMS_PER_PAGE);
  return (
    <div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Checkbox
                aria-label="Select all LeaderBoard"
                checked={selectedLeaderBoards.length === leaderBoards.length}
                indeterminate={
                  selectedLeaderBoards.length > 0 &&
                  selectedLeaderBoards.length < leaderBoards.length
                }
                onChange={handleSelectAll}
              />
            </Table.Th>
            <Table.Th>Rank</Table.Th>
            <Table.Th>Image</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Date</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginatedItems.map((leaderboard) => (
            <LeaderBoardRow
              key={leaderboard.id}
              {...leaderboard}
              isSelected={selectedLeaderBoards.includes(leaderboard.id)}
              onSelectionChange={handleSelectionChange}
            />
          ))}
        </Table.Tbody>
      </Table>
      {leaderBoards.length > ITEMS_PER_PAGE && (
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

export default LeaderBoardTable;
