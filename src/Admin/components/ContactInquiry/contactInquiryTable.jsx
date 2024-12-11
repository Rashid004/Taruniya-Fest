/** @format */
// import { Table, Flex, Pagination } from "@mantine/core";
// // import ContactInquiryRow from "./ContactInquiryRow";
// import { ITEMS_PER_PAGE } from "../../../utils/const";
// import usePagination from "../../../hook/usePagination";
// import { useEffect } from "react";

// export default function ContactInquiryTable({ contactInquiries }) {
//   const { handlePageChange, paginatedItems, currentPage } = usePagination(
//     contactInquiries,
//     ITEMS_PER_PAGE
//   );

//   useEffect(() => {
//     handlePageChange(1);
//   }, [handlePageChange]);

//   const totalPage = Math.ceil(contactInquiries.length / ITEMS_PER_PAGE);

//   return (
//     <div>
//       <Table>
//         <Table.Thead>
//           <Table.Tr>
//             <Table.Th>Name</Table.Th>
//             <Table.Th>Email</Table.Th>
//             <Table.Th>Phone</Table.Th>
//             <Table.Th>Message</Table.Th>
//             <Table.Th>Date</Table.Th>
//           </Table.Tr>
//         </Table.Thead>
//         <Table.Tbody>
//           {paginatedItems.map((item) => (
//             <ContactInquiryRow key={item.id} {...item} />
//           ))}
//         </Table.Tbody>
//       </Table>
//       {contactInquiries.length > ITEMS_PER_PAGE && (
//         <Flex justify="center" className="mt-4">
//           <Pagination
//             total={totalPage}
//             page={currentPage}
//             onChange={setCurrentPage}
//           />
//         </Flex>
//       )}
//     </div>
//   );
// }
