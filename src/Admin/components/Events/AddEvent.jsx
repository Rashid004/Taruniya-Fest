/** @format */

import { Button, Flex, Modal, Textarea, TextInput, Title } from "@mantine/core";
import { SquarePlus, Trash } from "lucide-react";
import { nanoid } from "nanoid";
import { useState } from "react";
import toast from "react-hot-toast";
import { createEvent } from "../../../service/Events";

function AddEvent({ selectedEvents, handleDeleteSelected }) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // handleSubmit add Events
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const id = nanoid();
    try {
      if (!title || !description) {
        toast.error("Please fill in all required fields");
        setIsSubmitting(false);
        return;
      }
      const eventData = {
        id,
        title,
        description,
      };
      await createEvent(eventData);
      toast.success("Event added successfully");
      setShowModal(false);
      console.log("Event added:", eventData);
    } catch (error) {
      console.log(error);
      toast.error("Failed to add event");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Flex mb={16} justify="space-between" align="center" className="py-4 px-4">
      <Flex gap={12}>
        <Button
          leftSection={<Trash size="1em" />}
          onClick={handleDeleteSelected}
          disabled={selectedEvents.length === 0}
          variant="outline"
          color="red"
          ml={12}
        >
          Delete Events
        </Button>
        <Button
          leftSection={<SquarePlus size="1em" />}
          variant="outline"
          onClick={() => setShowModal(true)}
        >
          Add Events
        </Button>
      </Flex>

      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title={
          <Title order={2} fw={600}>
            Add Events
          </Title>
        }
      >
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
          <Textarea
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
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
              {isSubmitting ? "Submitting..." : "Add Events"}
            </Button>
          </Flex>
        </form>
      </Modal>
    </Flex>
  );
}

export default AddEvent;
