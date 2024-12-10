/** @format */

import { Table, Flex, Pagination } from "@mantine/core";
import { useState } from "react";
import ContactInquiryRow from "./ContactInquiryRow";

const ITEMS_PER_PAGE = 10;

function ContactInquiryTable({ contactInquiries }) {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedItems = contactInquiries.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPage = Math.ceil(contactInquiries.length / ITEMS_PER_PAGE);

  return (
    <div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Phone</Table.Th>
            <Table.Th>Message</Table.Th>
            <Table.Th>Date</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginatedItems.map((item) => (
            <ContactInquiryRow key={item.id} {...item} />
          ))}
        </Table.Tbody>
      </Table>
      {contactInquiries.length > ITEMS_PER_PAGE && (
        <Flex justify="center" className="mt-4">
          <Pagination
            total={totalPage}
            page={currentPage}
            onChange={setCurrentPage}
          />
        </Flex>
      )}
    </div>
  );
}

export default ContactInquiryTable;
