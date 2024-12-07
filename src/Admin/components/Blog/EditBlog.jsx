/** @format */

import { useEffect, useState, useRef } from "react";
import { deleteBlog, getBlogById, updateBlog } from "../../../service/Blog";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button, Flex, Modal, TextInput, Title, Box } from "@mantine/core";
import { ArrowLeft, Save, Trash } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState(""); // Editor content

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const apiKey = "d1r1648jmc44hafjk3xddnbyf24apfywyojcz3lbzvbgqj8x";

  // Fetch Blog Data
  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      try {
        const blogData = await getBlogById(id);
        setTitle(blogData.title || "");
        setDescription(blogData.description || "");
        setDate(blogData.date || "");
        setContent(blogData.content || "");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch blog data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // Handle Update Blog
  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await updateBlog(id, { title, date, description, content });
      toast.success("Blog updated successfully!");
      navigate(-1); // Go back to the previous page
    } catch (error) {
      console.error(error);
      toast.error("Failed to update blog");
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
      toast.success("Blog deleted successfully!");
      navigate(-1); // Go back to the previous page
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete blog");
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  // Open confirmation modal
  const openConfirmationModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full p-6">
      {/* Page Header */}
      <div className="border-b border-gray-300 pb-4 mb-6">
        <Title order={2} color="gray">
          Edit Blog
        </Title>
      </div>

      {/* Blog Form */}
      <Flex direction="column" gap="md">
        {/* Title */}
        <TextInput
          value={title}
          label="Title"
          placeholder="Enter blog title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Description */}
        <TextInput
          value={description}
          label="Description"
          placeholder="Enter blog description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Date */}
        <TextInput
          type="date"
          value={date}
          label="Date"
          placeholder="Select date"
          onChange={(e) => setDate(e.target.value)}
          required
        />

        {/* Content Editor */}
        <Box>
          <label className="block text-sm font-medium mb-2">Blog Content</label>
          <Editor
            apiKey={apiKey}
            onInit={(evt, editor) => (editorRef.current = editor)}
            value={content}
            onEditorChange={(newContent) => setContent(newContent)}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                "advlist autolink link image lists charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help | forecolor backcolor",
              style_formats: [
                { title: "Heading 1", block: "h1" },
                { title: "Heading 2", block: "h2" },
                { title: "Heading 3", block: "h3" },
                { title: "Heading 4", block: "h4" },
                { title: "Heading 5", block: "h5" },
                { title: "Paragraph", block: "p" },
              ],
              content_style:
                "body { font-family:Arial,sans-serif; font-size:14px }",
            }}
          />
        </Box>
      </Flex>

      {/* Action Buttons */}
      <Flex justify="space-between" align="center" mt="xl">
        <Button
          leftIcon={<ArrowLeft size={16} />}
          variant="outline"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
        <Flex gap="md">
          <Button
            leftIcon={<Trash size={16} />}
            color="red"
            onClick={() => openConfirmationModal("delete")}
            disabled={isLoading}
          >
            Delete
          </Button>
          <Button
            leftIcon={<Save size={16} />}
            onClick={() => openConfirmationModal("update")}
            disabled={isLoading}
          >
            Update Blog
          </Button>
        </Flex>
      </Flex>

      {/* Confirmation Modal */}
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Confirm ${modalType === "delete" ? "Delete" : "Update"}`}
        centered
      >
        <p>Are you sure you want to {modalType} this blog?</p>
        <Flex justify="flex-end" mt="lg" gap="md">
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
    </div>
  );
}

export default EditBlog;
