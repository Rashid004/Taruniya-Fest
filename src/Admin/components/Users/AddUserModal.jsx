/** @format */

import { Button, Flex, Modal, TextInput, Title } from "@mantine/core";
import { Loader, SquarePlus } from "lucide-react";
import { useState } from "react";
import { CreateUser } from "../../../service/User";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../config/firebase";
import toast from "react-hot-toast";

function AddUserModal() {
  const [showModal, setShowModal] = useState(false); // Initially set to false to keep modal hidden

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  // Create A user
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmiting(true);
    try {
      // Create a new user in Firebase Authentication
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      // Update the user's profile with the display name
      await updateProfile(user, {
        displayName: name,
      });

      // Prepare user data to store in Firestore
      const userData = {
        id: user.uid,
        name: name,
        email: email,
        password: password,
        displayName: user.displayName, // This will now reflect the updated display name
      };

      // Add the user data to Firestore
      await CreateUser(userData);

      // Store user information in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("User created successfully");
      // Reset form fields and close the modal
      reset();
      setShowModal(false);
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Error creating user");
    } finally {
      setIsSubmiting(false); // Reset submitting state
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Flex mb={16} justify="space-between" align="center" className="py-4 px-4">
      <Button
        leftSection={<SquarePlus size="1em" />}
        variant="outline"
        onClick={() => setShowModal(true)}
      >
        Add User
      </Button>
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title={
          <Title order={2} fw={600}>
            Add User
          </Title>
        }
      >
        <form onSubmit={handleSubmit}>
          <TextInput
            value={name}
            label="Name"
            placeholder="Enter name"
            radius="sm"
            mb={12}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Flex justify="flex-end" mt={24} gap={12}>
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="filled"
              disabled={!name || !email || !password || isSubmiting}
            >
              {isSubmiting ? <Loader size="1em" /> : "Submit"}
            </Button>
          </Flex>
        </form>
      </Modal>
    </Flex>
  );
}

export default AddUserModal;
