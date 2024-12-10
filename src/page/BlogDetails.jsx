/** @format */

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog.blogs); // Fetch blogs from Redux store

  const blog = blogs.find((b) => b.id === id); // Find the blog by ID

  if (!blog) return;

  return (
    <section className="bg-primaryDark px-4 py-4 sm:py-8 lg:py-6 mx-auto max-w-5xl rounded-lg shadow-md">
      <div className="p-6">
        <h1 className="text-5xl font-semibold text-amber-200 py-2 text-start">
          {blog.title}
        </h1>
        <p className="text-gray-400 text-start">{blog.date}</p>
        <div className="flex justify-start py-4">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9df41c53449221.59355d5209abe.jpg"
            alt={blog.title}
            className="w-full max-w-6xl md:w-2/3 rounded-md shadow-lg object-cover"
          />
        </div>
        <div
          className="mt-4 text-lg text-gray-200"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </section>
  );
}

export default BlogDetails;
