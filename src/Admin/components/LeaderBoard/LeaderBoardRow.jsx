/** @format */

import { Checkbox, Table, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function LeaderBoardRow({
  id,
  rank,
  name,
  description,
  date,
  isSelected,
  onSelectionChange,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin-panel/leaderboard/${id}`);
  };

  return (
    <Table.Tr onClick={handleClick} style={{ cursor: "pointer" }}>
      <Table.Td size="sm" onClick={(e) => e.stopPropagation()}>
        <Checkbox
          aria-label="Select leaderboard"
          checked={isSelected}
          onChange={() => onSelectionChange(id)}
        />
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left" weight={500}>
          {rank}
        </Text>
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left" weight={500}>
          Image**
        </Text>
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left" weight={500}>
          {name}
        </Text>
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left" color="dimmed">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </Text>
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left">{date}</Text>
      </Table.Td>
    </Table.Tr>
  );
}

export default LeaderBoardRow;
