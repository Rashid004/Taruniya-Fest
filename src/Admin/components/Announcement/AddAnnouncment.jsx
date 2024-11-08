/** @format */

import { Button, Flex, Modal, TextInput, Title } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates"; // Ensure these are imported correctly
import { SquarePlus } from "lucide-react";
import { useState } from "react";

function AddAnnouncment() {
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null); // Store as Date object for `DateInput`
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [time, setTime] = useState(null); // Store as Date object for `TimeInput`
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

    try {
      // Your form submission logic here
      console.log({
        title,
        date,
        time,
        location,
        description,
        link,
      });

      reset();
      setShowModal(false);
    } catch (error) {
      console.error("Error adding announcement:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Flex mb={16} justify="space-between" align="center" className="py-4 px-4">
      <Button
        leftSection={<SquarePlus size="1em" />}
        variant="outline"
        onClick={() => setShowModal(true)}
      >
        Add Announcement
      </Button>
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
          <DateInput
            value={date}
            onChange={setDate} // Set date directly
            label="Date"
            placeholder="Select date"
            required
          />
          <TimeInput
            label="Time"
            placeholder="Select time"
            value={time}
            onChange={setTime} // Set time directly
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
            label="Description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
