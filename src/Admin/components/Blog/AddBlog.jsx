/** @format */

import {
  Button,
  Flex,
  Modal,
  TextInput,
  Title,
  Loader,
  Box,
} from "@mantine/core";
import { SquarePlus, Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { nanoid } from "nanoid";
import { Editor } from "@tinymce/tinymce-react";
import { createBlog } from "../../../service/Blog"; // Adjust the path if necessary

function AddBlog({ selectedBlogs, handleDeleteSelected }) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState(""); // TinyMCE content
  const [date, setDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const apiKey = "d1r1648jmc44hafjk3xddnbyf24apfywyojcz3lbzvbgqj8x";

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setContent("");
    setDate("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !content || !date) {
      toast.error("All fields are required!");
      return;
    }

    setIsSubmitting(true);
    try {
      const id = nanoid(); // Generate a unique ID for the blog
      const blogData = {
        id,
        title,
        description,
        content,
        date,
      };

      await createBlog(blogData); // Save blog to Firebase
      toast.success("Blog created successfully!");
      resetForm();
      setShowModal(false);
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("Failed to create blog.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Flex mb={16} justify="space-between" align="center" className="py-4 px-4">
      <Flex gap={12}>
        <Button
          leftSection={<Trash size="1em" />}
          variant="outline"
          color="red"
          onClick={handleDeleteSelected}
          disabled={selectedBlogs.length === 0}
        >
          Delete Blog
        </Button>
        <Button
          leftSection={<SquarePlus size="1em" />}
          variant="outline"
          onClick={() => setShowModal(true)}
        >
          Add Blog
        </Button>
      </Flex>

      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title={
          <Title order={2} fw={600}>
            Add Blog
          </Title>
        }
        size="80%" // Increase modal width to 80% of the viewport width
        centered
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Fields */}
          {/* Image upload option removed */}
          {/* <TextInput
            label="Image"
            placeholder="Enter image URL"
            radius="md"
            type="file"
            accept="image/*"
            mb={12}
          /> */}
          <TextInput
            value={title}
            label="Title"
            placeholder="Enter blog title"
            radius="sm"
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full"
          />

          <TextInput
            value={description}
            label="Description"
            placeholder="Enter blog description"
            radius="sm"
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full"
          />

          <TextInput
            value={date}
            label="Date"
            placeholder="Enter date"
            type="date"
            radius="sm"
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full"
          />

          {/* Blog Content (TinyMCE Editor) */}
          <Box>
            <label className="block text-sm font-medium mb-2">
              Blog Content
            </label>
            <Editor
              apiKey={apiKey}
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
              value={content}
              onEditorChange={(newContent) => setContent(newContent)}
            />
          </Box>

          {/* Form Actions */}
          <Flex justify="flex-end" mt={24} gap={12}>
            <Button
              variant="outline"
              onClick={() => setShowModal(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="filled"
              disabled={isSubmitting}
              leftIcon={isSubmitting && <Loader size="xs" />}
            >
              {isSubmitting ? "Submitting..." : "Add Blog"}
            </Button>
          </Flex>
        </form>
      </Modal>
    </Flex>
  );
}

export default AddBlog;
