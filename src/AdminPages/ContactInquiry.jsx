/** @format */

import { useDispatch, useSelector } from "react-redux";
import { setContactInquiries } from "../Redux/reducer/contactReducer";
import { getContactInquiries } from "../service/contactInquiry";
import Breadcrumb from "../Admin/components/BreadCrumb";
import { Flex, Pagination, Table, Text } from "@mantine/core";
import { useEffect } from "react";
import { ITEMS_PER_PAGE } from "../utils/const";
import usePagination from "../hook/usePagination";

export default function ContactInquiry() {
  const dispatch = useDispatch();
  const contactInquiries = useSelector(
    (state) => state.contact.contactInquiries // Correct key name
  );
  console.log(contactInquiries);

  useEffect(() => {
    const unsubscribe = getContactInquiries((data) => {
      dispatch(setContactInquiries(data));
    });

    return () => unsubscribe && unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        className="border-b border-t border-gray-300 px-4"
      >
        <Breadcrumb title="Contact Inquiry" path="contact-inquiry" />
      </Flex>
      <ContactInquiryTable contactInquiries={contactInquiries} />
    </div>
  );
}

export function ContactInquiryTable({ contactInquiries }) {
  const { handlePageChange, paginatedItems, currentPage } = usePagination(
    contactInquiries,
    ITEMS_PER_PAGE
  );

  useEffect(() => {
    handlePageChange(1);
  }, [handlePageChange]);

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
            onChange={handlePageChange}
          />
        </Flex>
      )}
    </div>
  );
}

export function ContactInquiryRow({
  name,
  email,
  phone,
  message,
  submittedAt,
}) {
  const handleClick = () => {
    console.log("Row clicked!");
  };

  return (
    <Table.Tr onClick={handleClick} style={{ cursor: "pointer" }}>
      <Table.Td>
        <Text align="left" weight={500}>
          {name}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text align="left" weight={500}>
          {email}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text align="left">{phone}</Text>
      </Table.Td>
      <Table.Td>
        <Text align="left" color="dimmed">
          {message.length > 100 ? `${message.slice(0, 100)}...` : message}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text align="left">{new Date(submittedAt).toLocaleDateString()}</Text>
      </Table.Td>
    </Table.Tr>
  );
}
