/** @format */

import { Checkbox, Table, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function BlogRow({
  id,
  title,
  description,
  date,
  isSelected,
  onSelectionChange,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin-panel/blog/${id}`);
  };

  return (
    <Table.Tr onClick={handleClick} style={{ cursor: "pointer" }}>
      <Table.Td size="sm" onClick={(e) => e.stopPropagation()}>
        <Checkbox
          aria-label="Select blog"
          checked={isSelected}
          onChange={() => onSelectionChange(id)}
        />
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left" weight={500}>
          Image**
        </Text>
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left" weight={500}>
          {title}
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

export default BlogRow;
