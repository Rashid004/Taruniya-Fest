/** @format */

import { useEffect, useMemo, useState } from "react";
import { Flex } from "@mantine/core";
import AddBlog from "../Admin/components/Blog/AddBlog";
import Breadcrumb from "../Admin/components/BreadCrumb";
import BlogTable from "../Admin/components/Blog/BlogTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteSelectedBlogs, getBlogs } from "../service/Blog";
import { setBlogData } from "../Redux/reducer/blog";
import toast from "react-hot-toast";
import FilterBlog from "../Admin/components/Blog/FilterBlog";

export default function ManageBlog() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlogs, setSelectedBlogs] = useState([]);

  const handleSelectionChange = (id) => {
    setSelectedBlogs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedBlogs(blogs.map((item) => item.id));
    } else {
      setSelectedBlogs([]);
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedBlogs.length === 0) return;
    try {
      await deleteSelectedBlogs(selectedBlogs);
      toast.success("Blogs deleted successfully");
      setSelectedBlogs([]);
    } catch (error) {
      toast.error("Failed to delete blogs");
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = getBlogs((data) => {
      dispatch(setBlogData(data));
    });

    return () => unsubscribe && unsubscribe();
  }, [dispatch]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      if (searchQuery.length > 3) {
        const searchText = searchQuery.toLowerCase();
        return (
          blog.title.toLowerCase().includes(searchText) ||
          blog.description.toLowerCase().includes(searchText)
        );
      }
      return true;
    });
  }, [blogs, searchQuery]);

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        className="border-b border-t border-gray-300 px-4"
      >
        <Breadcrumb title="Blogs" path="blog" />
        <AddBlog
          selectedBlogs={selectedBlogs}
          handleDeleteSelected={handleDeleteSelected}
        />
      </Flex>
      <div className="py-4 w-[20%] px-4">
        <FilterBlog searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <BlogTable
        blogs={filteredBlogs}
        selectedBlogs={selectedBlogs}
        handleSelectionChange={handleSelectionChange}
        handleSelectAll={handleSelectAll}
        searchQuery={searchQuery}
      />
    </div>
  );
}
