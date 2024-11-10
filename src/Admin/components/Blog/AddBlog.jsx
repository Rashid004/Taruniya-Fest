/** @format */

import {
  Button,
  FileInput,
  Flex,
  Modal,
  TextInput,
  Title,
} from "@mantine/core";
import { SquarePlus, Trash } from "lucide-react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { uploadImage } from "../../../utils/uploadImage";
import { createBlog } from "../../../service/Blog";
import toast from "react-hot-toast";

function AddBlog() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [selectImage, setSelectImage] = useState(null); // Initialize as null
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add Blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const id = nanoid();
      const imageUrl = await uploadImage(selectImage, `blogs/${id}.png`);
      const blogData = {
        id,
        title,
        description,
        image: imageUrl,
      };
      await createBlog(blogData);
      setShowModal(false);
      toast.success("Blog created successfully");
      reset();
    } catch (error) {
      console.log("Submission error:", error); // More detailed error logging
      toast.error("Failed to create blog");
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setTitle("");
    setDescription("");
    setSelectImage(null);
  };

  return (
    <Flex mb={16} justify="space-between" align="center" className="py-4 px-4">
      <Flex gap={12}>
        <Button
          leftSection={<Trash size="1em" />}
          variant="outline"
          color="red"
          ml={12}
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
          <FileInput
            onChange={setSelectImage}
            label="Image"
            accept="image/*"
            placeholder="Select image"
            radius="md"
            styles={{
              input: { fontSize: "1rem" },
              dropdown: { backgroundColor: "#f8f9fa" },
            }}
          />
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

          <Flex justify="flex-end" mt={24} gap={12}>
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="filled"
              disabled={!title || !description || !selectImage || isSubmitting}
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
