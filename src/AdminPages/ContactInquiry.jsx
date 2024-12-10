/** @format */

import { useDispatch, useSelector } from "react-redux";
import { setContactInquiries } from "../Redux/reducer/contactReducer";
import { getContactInquiries } from "../service/contactInquiry";
import Breadcrumb from "../Admin/components/BreadCrumb";
import { Flex } from "@mantine/core";
import { useEffect } from "react";
import ContactInquiryTable from "../Admin/components/ContactInquiry/contactInquiryTable";

function ContactInquiry() {
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

export default ContactInquiry;
