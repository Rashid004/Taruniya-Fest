/** @format */

import { Checkbox, Flex, Pagination, Table } from "@mantine/core";
import LeaderBoardRow from "./LeaderBoardRow";
import usePagination from "../../../hook/usePagination";
import { ITEMS_PER_PAGE } from "../../../utils/const";
import { useEffect } from "react";

function LeaderBoardTable({
  leaderBoard,
  selectedLeaderBoards,
  handleSelectionChange,
  handleSelectAll,
  searchQuery,
}) {
  const { handlePageChange, paginatedItems, currentPage } = usePagination(
    leaderBoard,
    ITEMS_PER_PAGE
  );

  useEffect(() => {
    handlePageChange(1);
  }, [searchQuery]);
  const totalPage = Math.ceil(leaderBoard.length / ITEMS_PER_PAGE);
  return (
    <div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Checkbox
                aria-label="Select all leaderBoard"
                checked={selectedLeaderBoards.length === leaderBoard.length}
                onChange={handleSelectAll}
              />
            </Table.Th>
            <Table.Th>Image</Table.Th>
            <Table.Th>Rank</Table.Th>
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
      {leaderBoard.length > ITEMS_PER_PAGE && (
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
