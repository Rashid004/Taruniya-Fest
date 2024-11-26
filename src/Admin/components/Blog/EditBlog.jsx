/** @format */

import { useEffect, useState } from "react";
import { deleteBlog, getBlogById, updateBlog } from "../../../service/Blog";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Breadcrumb from "../BreadCrumb";
import { ToastContainer } from "react-toastify";
import { Button, Flex, Modal, Textarea, TextInput } from "@mantine/core";
import { ArrowLeft, Save, Trash } from "lucide-react";

function EditBlog() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  // Get Blog Id from URL
  useEffect(() => {
    const fetchBlogId = async () => {
      setIsLoading(true);
      try {
        const blogId = await getBlogById(id);
        setTitle(blogId.title || "");
        setDescription(blogId.description || "");
        setDate(blogId.date || "");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogId();
  }, [id]);

  // Handle Update Blog
  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      updateBlog(id, {
        title,
        date,
        description,
      });
      toast.success("Blog updated successfully");
      handleGoBack();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update Blog");
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  // Handle Delete Blog
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteBlog(id);
      toast.success("Blog deleted successfully");
      handleGoBack();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete Blog");
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  // Handle Go Back
  const handleGoBack = () => {
    window.history.back();
  };

  // Open confirmation modal
  const openConfirmationModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  return (
    <div className="w-full relative h-full">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="border-b border-t border-gray-300 px-4 py-4">
        <Breadcrumb title="Blog" path="blog" />
      </div>
      <Flex
        direction="column"
        align="flex-start"
        gap="md"
        mt="lg"
        px="md"
        className="w-full"
      >
        <TextInput
          value={title}
          label="Title"
          placeholder="Enter title"
          radius="sm"
          mb={12}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-1/4"
        />
        <Textarea
          label="Description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-1/4 "
        />
        <TextInput
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          label="Date"
          valueFormat="YYYY MMM DD"
          placeholder="Select date"
          required
          className="w-1/4"
          radius="md" // Control input border radius
          styles={{
            input: { fontSize: "1rem" },
            dropdown: { backgroundColor: "#f8f9fa" },
          }}
        />
      </Flex>

      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Confirm ${modalType === "delete" ? "Delete" : "Update"}`}
      >
        <p>Are you sure you want to {modalType} this Blog?</p>
        <Flex justify="flex-end" mt="md" gap="md">
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button
            color={modalType === "delete" ? "red" : "blue"}
            onClick={modalType === "delete" ? handleDelete : handleUpdate}
            disabled={isLoading}
          >
            {modalType === "delete" ? "Delete" : "Update"}
          </Button>
        </Flex>
      </Modal>

      <div className="relative flex justify-between items-center w-full py-4 px-4 border-t border-gray-300 mt-4">
        <button
          className="flex items-center gap-2 border border-blue-500 text-blue-500 px-6 py-3 rounded-[2px] hover:bg-blue-100 transition"
          onClick={handleGoBack}
        >
          <ArrowLeft size={16} />
          Go Back
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={() => openConfirmationModal("delete")}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-[2px] transition"
            disabled={isLoading}
          >
            <Trash size={16} />
            Delete
          </button>
          <button
            onClick={() => openConfirmationModal("update")}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-[2px] transition"
            disabled={isLoading}
          >
            <Save size={16} />
            Update Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBlog;
