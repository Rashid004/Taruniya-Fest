/** @format */

import { useForm } from "@formspree/react";
import { MdOutlineMail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import InputField from "../components/InputField/InputField";
import TextAreaField from "../components/InputField/TextArea";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Contact() {
  const [state, handleSubmit] = useForm("xdknqwjj");

  const submitForm = async (event) => {
    event.preventDefault();
    await handleSubmit(event);

    if (state.succeeded) {
      toast.success("Thank you for contacting us!", {
        duration: 3000,
        position: "bottom-center",
      });
      event.target.reset(); // Reset form fields after successful submission
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4 py-12 "
    >
      <div className="w-full max-w-7xl  rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row">
          {/* Contact Info Section */}
          <div className="bg-primary md:w-2/5 p-8 text-white flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-medium mb-8 font-gotham tracking-[0.2em] uppercase">
                Contact Us
              </h1>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <MdOutlineMail size="1.6em" />
                  <Link
                    to="mailto:tarunya.sponsorship@nesedu.in"
                    className="hover:underline"
                  >
                    tarunya.sponsorship@nesedu.in
                  </Link>
                </li>
                <li className="flex items-center space-x-3">
                  <MdOutlineMail size="1.6em" />
                  <Link
                    to="mailto:tarunya.support@nesedu.in"
                    className="hover:underline"
                  >
                    tarunya.support@nesedu.in
                  </Link>
                </li>
                <li className="flex items-center space-x-3">
                  <MdOutlineMail size="1.6em" />
                  <Link
                    to="mailto:tarunya.pr@nesedu.in"
                    className="hover:underline"
                  >
                    tarunya.pr@nesedu.in
                  </Link>
                </li>
                {/* Add more contact details if needed */}
              </ul>
              <div className="flex space-x-4 mb-8">
                <Link
                  to="https://www.instagram.com/tarunyafest/profilecard/?igsh=eWdmNDlyMGIwcWh3"
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                >
                  <FiInstagram size="1.6em" />
                </Link>
                <Link
                  to="https://youtube.com/@tarunyafest?si=ehw27yvxBbKKKTKY"
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                >
                  <FaYoutube size="1.6em" />
                </Link>
                <Link
                  to="https://x.com/tarunyafest?t=qgszwIblj4WjxhZ0xssERw&s=09"
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                >
                  <FaTwitter size="1.6em" />
                </Link>
              </div>
            </div>
            <div className="w-full h-64 md:h-80 relative overflow-hidden rounded-3xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1549025318895!2d72.81645477582809!3d18.968765155329056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6db5c6833f%3A0x50b651746512861a!2sNavneet%20College%20of%20Arts%2C%20Science%20%26%20Commerce!5e0!3m2!1sen!2sin!4v1727810417530!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="md:w-3/5 p-8 bg-primaryDark">
            <h2 className="text-xl md:text-3xl font-medium mb-6 text-secondary-yellow tracking-widest">
              Send us a message
            </h2>
            <form
              className="space-y-6"
              onSubmit={submitForm}
              method="POST"
              action="https://formspree.io/f/xdknqwjj"
            >
              <InputField
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <InputField
                label="Phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
              <TextAreaField
                label="Message"
                name="message"
                placeholder="Enter your message"
              />
              <button
                className="w-full py-3 px-4 text-base rounded-md bg-[#171717] text-white shadow-md transition-all duration-300 ease-in-out border-2 border-[#DECBA7] hover:bg-[#3E5151] hover:text-[#DECBA7] hover:border-[#3E5151]"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </motion.div>
  );
}

export default Contact;
