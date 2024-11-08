/** @format */

import { Table, Checkbox, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function UserRow({ id, name, email }) {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/admin-panel/user/${id}`);
  };

  return (
    <Table.Tr onClick={handleRowClick} style={{ cursor: "pointer" }}>
      <Table.Td>
        <Checkbox aria-label="Select user" />
      </Table.Td>
      <Table.Td>
        <Text align="left">{name}</Text>
      </Table.Td>
      <Table.Td>
        <Text align="left">{email}</Text>
      </Table.Td>
    </Table.Tr>
  );
}

export default UserRow;
