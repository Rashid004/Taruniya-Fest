/** @format */

import { Flex } from "@mantine/core";
import AddBlog from "../Admin/components/Blog/AddBlog";
import BlogTable from "../Admin/components/Blog/BlogTable";
import Breadcrumb from "../Admin/components/BreadCrumb";

function ManageBlog() {
  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        className="border-b border-t border-gray-300 px-4"
      >
        <Breadcrumb title="Announcements" path="announcement" />
        <AddBlog />
      </Flex>
      <div className="py-4 w-[20%] px-4">
        {/* <FilterAnnouncement
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        /> */}
      </div>
      <BlogTable />
    </div>
  );
}

export default ManageBlog;
