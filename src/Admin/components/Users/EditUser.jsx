/** @format */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TextInput, Flex, Box, Modal, Button } from "@mantine/core";
import { ArrowLeft, Trash, Save } from "lucide-react";
import Breadcrumb from "../BreadCrumb";
import { deleteUser, getUserById, updateUser } from "../../../service/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const userData = await getUserById(id);
        setName(userData.name || "");
        setEmail(userData.email || "");
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [id]);

  const handleGoBack = () => {
    window.history.back();
  };

  // Delete User
  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteUser(id);
      toast.success("User deleted successfully");
      handleGoBack();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user");
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  // Updare User
  const handleUpdate = async () => {
    setLoading(true);
    try {
      await updateUser(id, { name });
      toast.success("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user");
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  // Open confirmation modal
  const openConfirmationModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <Box className="w-full relative h-full">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="border-b border-t border-gray-300 px-4 py-4">
        <Breadcrumb />
      </div>
      <Flex direction="column" align="flex-start" gap="md" mt="lg" px="md">
        <TextInput
          label="User Name"
          placeholder="Enter new name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          required
          style={{ width: "100%", maxWidth: 400 }}
        />
        <TextInput
          label="Email"
          placeholder="Enter new email"
          value={email}
          disabled
          required
          style={{ width: "100%", maxWidth: 400 }}
        />
      </Flex>

      {/* Confirmation Modal */}
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Confirm ${modalType === "delete" ? "Delete" : "Update"}`}
      >
        <p>Are you sure you want to {modalType} this user?</p>
        <Flex justify="flex-end" mt="md" gap="md">
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button
            color={modalType === "delete" ? "red" : "blue"}
            onClick={modalType === "delete" ? handleDelete : handleUpdate}
          >
            {modalType === "delete" ? "Delete" : "Update"}
          </Button>
        </Flex>
      </Modal>

      <div className="flex justify-between items-center w-full py-4 px-4 absolute left-0">
        <button
          className="flex items-center gap-2 border border-blue-500 text-blue-500 px-6 py-3 rounded-[2px] hover:bg-blue-100 transition"
          onClick={handleGoBack}
        >
          <ArrowLeft size={16} />
          Go Back
        </button>
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-[2px] transition"
            onClick={() => openConfirmationModal("delete")}
            disabled={loading}
          >
            <Trash size={16} />
            Delete
          </button>
          <button
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-[2px] transition"
            onClick={() => openConfirmationModal("update")}
            disabled={loading}
          >
            <Save size={16} />
            Update Portal User
          </button>
        </div>
      </div>
    </Box>
  );
}

export default EditUser;
