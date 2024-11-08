/** @format */

import { Checkbox, Table, Text } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

function AnnouncementRow({
  id,
  title,
  description,
  date,
  time,
  location,
  link,
  isSelected,
  onSelectionChange,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/admin-panel/announcement/${id}`);
  };

  return (
    <Table.Tr onClick={handleClick} style={{ cursor: "pointer" }}>
      <Table.Td size="sm" onClick={(e) => e.stopPropagation()}>
        <Checkbox
          aria-label="Select announcement"
          checked={isSelected}
          onChange={() => onSelectionChange(id)}
        />
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left" weight={500}>
          {title}
        </Text>
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left" color="dimmed">
          {description.length > 50
            ? `${description.slice(0, 50)}...`
            : description}
        </Text>
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left">{date}</Text>
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left">{time}</Text>
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left">{location}</Text>
      </Table.Td>
      <Table.Td size="sm">
        <Text align="left">
          <Link
            to={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1e90ff", textDecoration: "underline" }}
          >
            View Link
          </Link>
        </Text>
      </Table.Td>
    </Table.Tr>
  );
}

export default AnnouncementRow;
