/** @format */

import { Flex, Table, Button, Title, Divider, Checkbox } from "@mantine/core";
import UserRow from "./UserRow";
import { Trash, PlusCircle, Edit } from "lucide-react";

function UserTable() {
  return (
    <Flex direction="column" gap="md">
      <Flex align="center" justify="space-between" className="py-2">
        <Title order={1} size="h2">
          Portal User
        </Title>
        <Flex gap="sm">
          <Button
            variant="outline"
            color="red"
            leftIcon={<Trash className="w-5 h-5" color="red" />}
          >
            Delete User
          </Button>
          <Button
            variant="outline"
            color="green"
            leftIcon={<PlusCircle className="w-5 h-5" color="#22c55e" />}
          >
            Add User
          </Button>
          <Button
            variant="outline"
            color="blue"
            leftIcon={<Edit className="w-5 h-5" color="#3b82f6" />}
          >
            Edit User
          </Button>
        </Flex>
      </Flex>

      <Divider my="sm" />

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
          <UserRow />
        </Table.Tbody>
      </Table>
    </Flex>
  );
}

export default UserTable;
