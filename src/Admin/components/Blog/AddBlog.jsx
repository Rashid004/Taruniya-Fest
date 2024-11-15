/** @format */

import { Button, Flex, Modal, TextInput, Title } from "@mantine/core";
import { SquarePlus, Trash } from "lucide-react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { createBlog } from "../../../service/Blog";
import toast from "react-hot-toast";

function AddBlog({ selectedBlogs, handleDeleteSelected }) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add Blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const id = nanoid();
      //  const imageUrl = await uploadImage(selectImage, `blogs/${id}.png`);
      const blogData = {
        id,
        title,
        description,
        date,
        // image: imageUrl, // Commented out as per the request
      };
      await createBlog(blogData);
      setShowModal(false);
      toast.success("Blog created successfully");
      reset();
    } catch (error) {
      console.log("Submission error:", error);
      toast.error("Failed to create blog");
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setTitle("");
    setDescription("");
    setDate("");
    // setSelectImage(null); // Commented out as per the request
  };

  return (
    <Flex mb={16} justify="space-between" align="center" className="py-4 px-4">
      <Flex gap={12}>
        <Button
          leftSection={<Trash size="1em" />}
          variant="outline"
          color="red"
          ml={12}
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
      >
        <form onSubmit={handleSubmit}>
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
            placeholder="Enter title"
            radius="sm"
            mb={12}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextInput
            label="Description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextInput
            label="Date"
            placeholder="Enter date"
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <Flex justify="flex-end" mt={24} gap={12}>
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="filled"
              disabled={!title || !description || isSubmitting}
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
