/** @format */

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Clock, Calendar, User } from "lucide-react";
import Loading from "../ui/Loading";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   LinkedinShareButton,
//   WhatsappShareButton,
//   FacebookIcon,
//   TwitterIcon,
//   LinkedinIcon,
//   WhatsappIcon,
// } from "react-share";
{
  /* <div className="absolute mt-2 bg-white p-4 rounded-lg shadow-lg flex gap-2">
            <FacebookShareButton url={currentUrl}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={currentUrl}>
              <TwitterIcon size={32} round />
            </TwitterShareButton> */
}
function BlogDetails() {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog.blogs); // Fetch blogs from Redux store

  const blog = blogs.find((b) => b.id === id); // Find the blog by ID

  if (!blog) return <Loading />;

  return (
    <article className="px-4 py-8 mx-auto max-w-4xl">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-[40px] font-bold text-amber-200 mb-6 leading-tight">
          {blog.title}
        </h1>
        <div className="flex flex-wrap gap-6 text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{blog.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>5</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[400px] mb-12">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9df41c53449221.59355d5209abe.jpg"
          alt={blog.title}
          className="w-full h-full object-cover rounded-xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl"></div>
      </div>

      {/* Content */}
      <div className="prose prose-lg prose-invert max-w-none">
        <div
          className="text-gray-200 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      {/* Share and Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <button className="px-6 py-3 bg-amber-200 text-gray-900 rounded-lg font-medium hover:bg-amber-300 transition-colors">
            Share Article
          </button>
          {/* <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-400 hover:text-amber-200 transition-colors">
              Previous Article
            </button>
            <button className="px-4 py-2 text-gray-400 hover:text-amber-200 transition-colors">
              Next Article
            </button>
          </div> */}
        </div>
      </div>
    </article>
  );
}

export default BlogDetails;
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// function BlogDetails() {
//   const { id } = useParams();
//   const blogs = useSelector((state) => state.blog.blogs); // Fetch blogs from Redux store

//   const blog = blogs.find((b) => b.id === id); // Find the blog by ID

//   if (!blog) return;

//   return (
//     <section className="bg-primaryDark px-4 py-4 sm:py-8 lg:py-6 mx-auto max-w-5xl rounded-lg shadow-md">
//       <div className="p-6">
//         <h1 className="text-5xl font-semibold text-amber-200 py-2 text-start">
//           {blog.title}
//         </h1>
//         <p className="text-gray-400 text-start">{blog.date}</p>
//         <div className="flex justify-start py-4">
//           <img
//             src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9df41c53449221.59355d5209abe.jpg"
//             alt={blog.title}
//             className="w-full max-w-6xl md:w-2/3 rounded-md shadow-lg object-cover"
//           />
//         </div>
//         <div
//           className="mt-4 text-lg text-gray-200"
//           dangerouslySetInnerHTML={{ __html: blog.content }}
//         />
//       </div>
//     </section>
//   );
// }

// export default BlogDetails;
