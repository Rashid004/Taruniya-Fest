/** @format */

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Clock, Calendar } from "lucide-react";
import Loading from "../ui/Loading";

function BlogDetails() {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog.blogs);
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <Loading />;

  return (
    <HelmetProvider>
      <article className="px-4 py-8 mx-auto max-w-4xl mt-24">
        {/* SEO Tags */}
        <Helmet>
          <title>{blog.title} | Tarunya Fest</title>
          <meta name="description" content={blog.description} />
          <meta property="og:title" content={blog.title} />
          <meta property="og:description" content={blog.description} />
          <meta property="og:image" content={blog.imageUrl} />
          <meta
            property="og:url"
            content={`http://www.tarunyafest.nesedu.in/blog/${blog.id}`}
          />
          <meta property="og:type" content="article" />
        </Helmet>

        {/* Blog Content */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-amber-200 mb-4">
            {blog.title}
          </h1>
          <div className="flex gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>5 min read</span>
            </div>
          </div>
        </header>

        <img
          src={blog.imageUrl || "/images/blog-1.webp"}
          alt={blog.title}
          className="w-full h-1/3  rounded-xl mb-8 object-cover"
        />

        <div className="text-gray-200 leading-relaxed space-y-6">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </article>
    </HelmetProvider>
  );
}

export default BlogDetails;
