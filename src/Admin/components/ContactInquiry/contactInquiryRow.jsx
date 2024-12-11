/** @format */

// /** @format */

// import { Table, Text } from "@mantine/core";

// export default function ContactInquiryRow({
//   name,
//   email,
//   phone,
//   message,
//   submittedAt,
// }) {
//   const handleClick = () => {
//     console.log("Row clicked!");
//   };

//   return (
//     <Table.Tr onClick={handleClick} style={{ cursor: "pointer" }}>
//       <Table.Td>
//         <Text align="left" weight={500}>
//           {name}
//         </Text>
//       </Table.Td>
//       <Table.Td>
//         <Text align="left" weight={500}>
//           {email}
//         </Text>
//       </Table.Td>
//       <Table.Td>
//         <Text align="left">{phone}</Text>
//       </Table.Td>
//       <Table.Td>
//         <Text align="left" color="dimmed">
//           {message.length > 100 ? `${message.slice(0, 100)}...` : message}
//         </Text>
//       </Table.Td>
//       <Table.Td>
//         <Text align="left">{new Date(submittedAt).toLocaleDateString()}</Text>
//       </Table.Td>
//     </Table.Tr>
//   );
// }
