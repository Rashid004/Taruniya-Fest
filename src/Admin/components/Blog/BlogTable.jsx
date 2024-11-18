/** @format */

import { Checkbox, Flex, Pagination, Table } from "@mantine/core";
import BlogRow from "./BlogRow";
import usePagination from "../../../hook/usePagination";
import { ITEMS_PER_PAGE } from "../../../utils/const";
import { useEffect } from "react";

function BlogTable({
  blogs,
  selectedBlogs,
  handleSelectionChange,
  handleSelectAll,
  searchQuery,
}) {
  const { handlePageChange, paginatedItems, currentPage } = usePagination(
    blogs,
    ITEMS_PER_PAGE
  );

  useEffect(() => {
    handlePageChange(1);
  }, [handlePageChange, searchQuery]);
  const totalPage = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  return (
    <div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Checkbox
                aria-label="Select all blogs"
                checked={
                  blogs.length > 0 && selectedBlogs.length === blogs.length
                }
                onChange={handleSelectAll}
              />
            </Table.Th>
            <Table.Th>Image</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Date</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginatedItems.map((blog) => (
            <BlogRow
              key={blog.id}
              {...blog}
              isSelected={selectedBlogs.includes(blog.id)}
              onSelectionChange={handleSelectionChange}
            />
          ))}
        </Table.Tbody>
      </Table>
      {blogs.length > ITEMS_PER_PAGE && (
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

export default BlogTable;
