/** @format */

import { Flex } from "@mantine/core";
import AddAnnouncment from "../Admin/components/Announcement/AddAnnouncment";
import Breadcrumb from "../Admin/components/BreadCrumb";

export default function ManageAnnouncements() {
  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        className="border-b border-t border-gray-300 px-4"
      >
        <Breadcrumb title="Announcements" path="announcement" />

        <AddAnnouncment />
      </Flex>
    </div>
  );
}
