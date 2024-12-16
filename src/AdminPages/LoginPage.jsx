/** @format */
import { PasswordInput } from "@mantine/core";
import { Loader, TextInput } from "@mantine/core";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
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
      <div className="flex items-center justify-center w-1/3 bg-[#6B0A29] opacity-75 ">
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-lg w-full max-w-sm"
        >
          <h2 className="text-3xl font-semibold text-amber-200 mb-6">
            Login to Admin Panel
          </h2>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            size="md"
            onChange={(e) => setEmail(e.target.value)}
            className="mb-6 text-white focus:border-blue-500"
          />
          <PasswordInput
            label="Password"
            value={password}
            size="md"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="mb-2 focus:border-blue-500 text-white"
            error={
              password.length > 0 && password.length < 6
                ? "Password must be at least 6 characters"
                : null
            }
          />
          <button
            type="button"
            className="text-amber-500 font-semibold hover:underline mb-4 text-lg"
            onClick={handleResetPassword}
          >
            Forget Password?
          </button>
          <button
            disabled={loading}
            type="submit"
            className="w-full text-xl bg-blue-600 text-white py-2 rounded-sm font-medium hover:bg-blue-700 transition mt-8 rounded-sm"
          >
            {loading ? <Loader size="sm" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
