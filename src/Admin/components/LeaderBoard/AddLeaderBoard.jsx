/** @format */

import { Button, Flex, Modal, TextInput, Title } from "@mantine/core";
import { SquarePlus, Trash } from "lucide-react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { createBlog } from "../../../service/Blog";
import toast from "react-hot-toast";
import { createLeaderBoard } from "../../../service/Leaderboard";

export default function AddLeaderBoard() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rank, setRank] = useState("");
  const [date, setDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add Blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const id = nanoid();
      //  const imageUrl = await uploadImage(selectImage, `blogs/${id}.png`);
      const leaderBoardData = {
        id,
        name,
        description,
        rank,
        date,
        // image: imageUrl, // Commented out as per the request
      };
      await createLeaderBoard(leaderBoardData);
      setShowModal(false);
      toast.success("LeaderBoard created successfully");
      reset();
    } catch (error) {
      console.log("Submission error:", error);
      toast.error("Failed to create LeaderBoard");
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setName("");
    setDescription("");
    setDate("");
    setRank("");
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
        >
          Delete LeaderBoard
        </Button>
        <Button
          leftSection={<SquarePlus size="1em" />}
          variant="outline"
          onClick={() => setShowModal(true)}
        >
          Add LeaderBoard
        </Button>
      </Flex>
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title={
          <Title order={2} fw={600}>
            Add LeaderBoard
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
            label="Rank"
            type="number"
            value={rank}
            placeholder="Enter Rank"
            radius="sm"
            mb={12}
            onChange={(e) => setRank(e.target.value)}
            required
          />
          <TextInput
            value={name}
            label="Name"
            placeholder="Enter Name"
            radius="sm"
            mb={12}
            onChange={(e) => setName(e.target.value)}
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
