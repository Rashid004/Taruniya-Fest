/** @format */

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog.blogs); // Fetch blogs from Redux store

  const blog = blogs.find((b) => b.id === id); // Find the blog by ID

  if (!blog) return <div>Blog not found!</div>;

  return (
    <section className="bg-primaryDark px-4 py-4 sm:py-8  lg:py-6 mx-12 rounded-lg ">
      <div className="min-h-screen p-6">
        <h1 className="text-5xl font-medium text-amber-200 py-2">
          {blog.title}
        </h1>
        <p className="text-gray-300">{blog.date}</p>
        <div
          className="mt-4 text-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </section>
  );
}

export default BlogDetails;
