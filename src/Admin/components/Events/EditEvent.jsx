/** @format */

import { Flex, Textarea, TextInput, Modal, Button, Title } from "@mantine/core";
import { ArrowLeft, Save, Trash, SquarePlus } from "lucide-react";
import Breadcrumb from "../BreadCrumb";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import {
  deleteEvent,
  getEventsById,
  updateEvents,
} from "../../../service/Events";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";

function EditEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [nestedItems, setNestedItems] = useState([]); // State for nested items
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const { id } = useParams();

  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const fetchEventId = async () => {
      setIsLoading(true);
      try {
        const event = await getEventsById(id);
        console.log("Fetched event data:", event); // Log data structure here

        setTitle(event.title || "");
        setDescription(event.description || "");
        setLink(event.link || "");
        setNestedItems(event.eventDetails || []); // Load eventDetails properly
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEventId();
  }, [id]);

  // Update the save function to include eventDetails
  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await updateEvents(id, {
        title,
        description,
        link,
        eventDetails: nestedItems,
      });
      toast.success("Event updated successfully");
      handleGoBack();
    } catch (error) {
      toast.error("Failed to update event");
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  // Function to add a new nested item
  const addNestedItem = () => {
    setNestedItems([
      ...nestedItems,
      { id: nanoid(), title: "", description: "" },
    ]);
  };

  // Function to update a nested item
  const updateNestedItem = (index, field, value) => {
    const updatedItems = [...nestedItems];
    updatedItems[index][field] = value;
    setNestedItems(updatedItems);
  };

  // Function to remove a nested item
  const removeNestedItem = (id) => {
    setNestedItems(nestedItems.filter((item) => item.id !== id));
  };

  // Handle Delete Event
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteEvent(id);
      toast.success("Event deleted successfully");
      handleGoBack();
    } catch (error) {
      toast.error("Failed to delete event");
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
    <div className="w-full relative h-full">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="border-b border-t border-gray-300 px-4 py-4">
        <Breadcrumb title="Event" path="event" />
      </div>
      <Flex
        direction="column"
        align="flex-start"
        gap="md"
        mt="lg"
        px="md"
        className="w-full"
      >
        {/* Main Event Title and Description */}
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
          className="w-1/4"
        />

        <TextInput
          label="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter link"
          required
          className="w-1/4"
        />

        {/* Nested Items (Event Details) */}
        <Title order={4} mt={24}>
          Event Details
        </Title>
        {nestedItems.length > 0 ? (
          nestedItems.map((item, index) => (
            <Flex key={item.id} direction="column" mt={12} className="w-1/2">
              <TextInput
                label={`Event Details ${index + 1} - Title`}
                value={item.title}
                onChange={(e) =>
                  updateNestedItem(index, "title", e.target.value)
                }
                placeholder="Enter Event Details title"
                required
              />
              <Textarea
                label={`Event Details ${index + 1} - Description`}
                value={item.description}
                onChange={(e) =>
                  updateNestedItem(index, "description", e.target.value)
                }
                placeholder="Enter Event Details description"
                required
              />
              <Button
                variant="outline"
                color="red"
                mt={8}
                onClick={() => removeNestedItem(item.id)}
                leftSection={<Trash size="1em" />}
              >
                Remove Event Details
              </Button>
            </Flex>
          ))
        ) : (
          <p>No Event Details available.</p>
        )}

        {/* Button to Add New Nested Item */}
        <Button
          variant="light"
          mt={16}
          onClick={addNestedItem}
          leftSection={<SquarePlus size="1em" />}
        >
          Add Event Details
        </Button>
      </Flex>

      {/* Confirmation Modal for Delete or Update */}
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Confirm ${modalType === "delete" ? "Delete" : "Update"}`}
      >
        <p>Are you sure you want to {modalType} this event?</p>
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

      {/* Navigation Buttons */}
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
            Update Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditEvent;
