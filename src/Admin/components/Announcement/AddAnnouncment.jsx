/** @format */

import { Button, Flex, Modal, TextInput, Title } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { SquarePlus, Trash } from "lucide-react";
import { nanoid } from "nanoid";
import { useState } from "react";
import toast from "react-hot-toast";
import { createAnnouncement } from "../../../service/Announcement";

function AddAnnouncment({ selectedAnnouncements, handleDeleteSelected }) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reset = () => {
    setTitle("");
    setDate(null);
    setDescription("");
    setLink("");
    setTime(null);
    setLocation("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const id = nanoid();
    try {
      if (!title || !date || !time || !location || !description) {
        toast.error("Please fill in all required fields");
        setIsSubmitting(false);
        return;
      }

      const announcementData = {
        id,
        title,
        date,
        time,
        location,
        description,
        link,
      };
      await createAnnouncement(announcementData);
      console.log("Announcement added:", announcementData);

      reset();
      setShowModal(false);
      toast.success("Announcement added successfully");
    } catch (error) {
      console.error("Error adding announcement:", error);
      toast.error("Failed to add announcement");
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
          disabled={selectedAnnouncements.length === 0}
          variant="outline"
          color="red"
          ml={12}
        >
          Delete Announcement
        </Button>
        <Button
          leftSection={<SquarePlus size="1em" />}
          variant="outline"
          onClick={() => setShowModal(true)}
        >
          Add Announcement
        </Button>
      </Flex>
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title={
          <Title order={2} fw={600}>
            Add Announcement
          </Title>
        }
      >
        <form onSubmit={handleSubmit}>
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
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            label="Date"
            valueFormat="YYYY MMM DD"
            placeholder="Select date"
            required
            // size="sm"
            radius="md" // Control input border radius
            styles={{
              input: { fontSize: "1rem" },
              dropdown: { backgroundColor: "#f8f9fa" },
            }}
          />

          <TimeInput
            label="Time"
            placeholder="Select time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <TextInput
            label="Location"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <TextInput
            label="Link"
            placeholder="Enter link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <Flex justify="flex-end" mt={24} gap={12}>
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="filled"
              disabled={
                !title ||
                !date ||
                !time ||
                !location ||
                !description ||
                isSubmitting
              }
            >
              {isSubmitting ? "Submitting..." : "Add Announcement"}
            </Button>
          </Flex>
        </form>
      </Modal>
    </Flex>
  );
}

export default AddAnnouncment;
