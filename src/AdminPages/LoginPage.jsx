/** @format */

import { TextInput } from "@mantine/core";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login Successful");
      navigate("/admin-panel");
    } catch (error) {
      setError("Invalid email or password");
      toast.error(error.message);
    }
  };

  return (
    <div className="h-screen w-full flex">
      {/* Left section with image */}
      <div className="bg-black text-white flex items-center justify-center w-2/3">
        <img
          src="/icons/tarunya.png"
          alt="Tarunya"
          className="w-1/2 h-auto max-h-[300px]"
        />
      </div>

      {/* Right section with form */}
      <div className="flex items-center justify-center w-1/3 bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-lg w-full max-w-sm"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-6 focus:border-blue-500"
          />
          <TextInput
            label="Password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="mb-2 focus:border-blue-500"
          />
          <button
            type="button"
            className="text-red-500 font-semibold hover:underline mb-4"
          >
            Forget Password?
          </button>
          <button
            type="submit"
            className="w-full text-xl bg-blue-600 text-white py-3 rounded-sm font-medium hover:bg-blue-700 transition mt-8"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
