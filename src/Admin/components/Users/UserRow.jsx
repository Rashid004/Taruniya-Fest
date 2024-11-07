/** @format */

import { Table, Checkbox, Text, Flex } from "@mantine/core";

function UserRow() {
  return (
    <>
      <Table.Tr>
        <Table.Td>
          <Checkbox aria-label="Select user" />
        </Table.Td>
        <Table.Td>
          <Text align="left">Example</Text>
        </Table.Td>
        <Table.Td>
          <Text align="left">example@gmail.com</Text>
        </Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>
          <Checkbox aria-label="Select user" />
        </Table.Td>
        <Table.Td>
          <Text align="left">Example</Text>
        </Table.Td>
        <Table.Td>
          <Text align="left">example@gmail.com</Text>
        </Table.Td>
      </Table.Tr>
    </>
  );
}

export default UserRow;
