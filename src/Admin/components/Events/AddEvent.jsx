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
  const [nestedLayouts, setNestedLayouts] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add a new nested layout
  const addNestedLayout = () => {
    setNestedLayouts([
      ...nestedLayouts,
      { id: nanoid(), title: "", description: "" },
    ]);
  };

  // Update nested layout fields
  const updateNestedLayout = (index, field, value) => {
    const updatedLayouts = [...nestedLayouts];
    updatedLayouts[index][field] = value;
    setNestedLayouts(updatedLayouts);
  };

  // Remove a nested layout
  const removeNestedLayout = (id) => {
    setNestedLayouts(nestedLayouts.filter((layout) => layout.id !== id));
  };

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

      // Prepare event data with eventDetails
      const eventData = {
        id,
        title,
        description,
        eventDetails: nestedLayouts.map((layout) => ({
          id: layout.id || nanoid(), // Ensure each nested item has an id
          title: layout.title,
          description: layout.description,
        })),
      };

      // Save to Firebase
      await createEvent(eventData);
      toast.success("Event added successfully");

      // Reset fields
      setShowModal(false);
      setTitle("");
      setDescription("");
      setNestedLayouts([]);
    } catch (error) {
      console.error("Error adding event:", error);
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

          <h3 className="font-medium mt-4 text-lg">Event Details</h3>
          {nestedLayouts.map((layout, index) => (
            <Flex key={layout.id} direction="column" mt={12}>
              <TextInput
                label={`Event Details ${index + 1} - Title`}
                value={layout.title}
                onChange={(e) =>
                  updateNestedLayout(index, "title", e.target.value)
                }
                placeholder="Enter event details title"
                required
              />
              <Textarea
                label={`Event Details ${index + 1} - Description`}
                value={layout.description}
                onChange={(e) =>
                  updateNestedLayout(index, "description", e.target.value)
                }
                placeholder="Enter event details description"
                required
              />
              <Button
                variant="outline"
                color="red"
                mt={8}
                onClick={() => removeNestedLayout(layout.id)}
                leftSection={<Trash size="1em" />}
              >
                Remove Event Details {index + 1}
              </Button>
            </Flex>
          ))}
          <Button
            variant="light"
            mt={16}
            onClick={addNestedLayout}
            leftSection={<SquarePlus size="1em" />}
          >
            Add Event Details
          </Button>

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
