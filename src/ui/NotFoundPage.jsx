/** @format */

import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage({
  message = "Page not found 🚫",
  link = "/",
  linkText = "Go Home",
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gray-900 text-white">
      <h1 className="text-4xl font-bold uppercase bg-red-600 text-white px-10 py-6 rounded-lg shadow-lg">
        {message}
      </h1>
      <p className="mt-4 text-lg">
        Sorry, the page you are looking for does not exist or has been removed.
      </p>
      <Link
        to={link}
        className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
      >
        {linkText}
      </Link>
    </div>
  );
}

export default NotFoundPage;
