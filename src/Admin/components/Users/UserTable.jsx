/** @format */

import { Flex, Table, Checkbox, Pagination } from "@mantine/core";
import UserRow from "./UserRow";
import { ITEMS_PER_PAGE } from "../../../utils/const";
import usePagination from "../../../hook/usePagination";
import { useEffect } from "react";

function UserTable({ users, searchQuery }) {
  const { handlePageChange, paginatedItems, currentPage } = usePagination(
    users,
    ITEMS_PER_PAGE
  );

  useEffect(() => {
    handlePageChange(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  return (
    <div>
      <Flex direction="column" gap="md">
        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <Checkbox aria-label="Select all users" />
              </Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Email</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {paginatedItems.map((user) => (
              <UserRow
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                searchQuery={searchQuery}
              />
            ))}
          </Table.Tbody>
        </Table>
      </Flex>
      {users.length > ITEMS_PER_PAGE && (
        <Flex justify="center" className="mt-6">
          <Pagination
            total={totalPages}
            value={currentPage}
            onChange={handlePageChange}
          />
        </Flex>
      )}
    </div>
  );
}

export default UserTable;
