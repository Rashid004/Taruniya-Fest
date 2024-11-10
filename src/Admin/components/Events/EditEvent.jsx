/** @format */

import { Flex, Textarea, TextInput, Modal, Button } from "@mantine/core";
import { ArrowLeft, Save, Trash } from "lucide-react";
import Breadcrumb from "../BreadCrumb";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import {
  deleteEvent,
  getEventsById,
  updateEvents,
} from "../../../service/Events";
import { useParams } from "react-router-dom";

function EditEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "delete" or "update"

  const { id } = useParams();

  const handleGoBack = () => {
    window.history.back();
  };

  // Fetch event data by ID
  useEffect(() => {
    const fetchEventId = async () => {
      setIsLoading(true);
      try {
        const eventId = await getEventsById(id);
        setTitle(eventId.title || "");
        setDescription(eventId.description || "");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEventId();
  }, [id]);

  // Open confirmation modal
  const openConfirmationModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  // Handle Update Event
  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await updateEvents(id, { title, description });
      toast.success("Event updated successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  // Handle Delete Event
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteEvent(id);
      toast.success("Event deleted successfully");
      handleGoBack(); // Go back after deletion
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
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
      </Flex>

      {/* Confirmation Modal */}
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
            Update Announcement
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditEvent;
