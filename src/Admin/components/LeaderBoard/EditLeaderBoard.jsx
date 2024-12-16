/** @format */

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Breadcrumb from "../BreadCrumb";
import { ToastContainer } from "react-toastify";
import { Button, Flex, Modal, Textarea, TextInput } from "@mantine/core";
import { ArrowLeft, Save, Trash } from "lucide-react";
import {
  deleteLeaderBoard,
  getLederBoardById,
  updateLeaderBoard,
} from "../../../service/Leaderboard";

function EditLeaderBoard() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [score, setScore] = useState(null);
  const [rank, setRank] = useState(null);
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  // Get LeaderBoard Id from URL
  useEffect(() => {
    const fetchLeaderBoardId = async () => {
      setIsLoading(true);
      try {
        const leaderBoardId = await getLederBoardById(id);
        setRank(leaderBoardId.rank || "");
        setName(leaderBoardId.name || "");
        // setDescription(leaderBoardId.description || "");
        setScore(leaderBoardId.score || "");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLeaderBoardId();
  }, [id]);

  // Handle Update LeaderBoard
  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      updateLeaderBoard(id, {
        rank,
        name,
        score,
        description,
      });
      toast.success("LeaderBoard updated successfully");
      handleGoBack();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update LeaderBoard");
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  // Handle Delete LeaderBoard
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteLeaderBoard(id);
      toast.success("LeaderBoard deleted successfully");
      handleDelete();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete LeaderBoard");
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  // Handle Go Back
  const handleGoBack = () => {
    window.history.back();
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
        <Breadcrumb title="LeaderBoard" path="leaderboard" />
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
          label="Rank"
          placeholder="Enter Rank"
          radius="sm"
          mb={12}
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          required
          className="w-1/4"
        />
        <TextInput
          value={name}
          label="Name"
          placeholder="Enter Name"
          radius="sm"
          mb={12}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-1/4"
        />
        {/* <Textarea
          label="Description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-1/4 "
        /> */}
        <TextInput
          label="Score"
          placeholder="Enter Score"
          value={score}
          type="score"
          onChange={(e) => setScore(e.target.value)}
          required
        />
      </Flex>

      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Confirm ${modalType === "delete" ? "Delete" : "Update"}`}
      >
        <p>Are you sure you want to {modalType} this LeaderBoard?</p>
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
            Update LeaderBoard
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditLeaderBoard;
