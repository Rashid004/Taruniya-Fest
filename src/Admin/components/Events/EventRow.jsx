/** @format */

import { Checkbox, Table, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function EventRow({ id, title, description, isSelected, onSelectionChange }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin-panel/events/${id}`);
  };

  return (
    <Table.Tr onClick={handleClick} style={{ cursor: "pointer" }}>
      <Table.Td
        size="sm"
        style={{ width: "50px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Checkbox
          aria-label="Select announcement"
          checked={isSelected}
          onChange={() => onSelectionChange(id)}
        />
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left" weight={600} className="w-full truncate">
          {title}
        </Text>
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left" className="text-sm text-wrap " color="dimmed">
          {description.length > 200
            ? `${description.slice(0, 200)}...`
            : description}
        </Text>
      </Table.Td>
    </Table.Tr>
  );
}

export default EventRow;
