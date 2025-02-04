/** @format */

import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Blog() {
  const blogs = useSelector((state) => state.blog.blogs);

  return (
    <HelmetProvider>
      <section className="min-h-screen px-4 sm:px-6 lg:px-12 py-4 sm:py-6 md:py-8 mt-16">
        {/* SEO Tags */}
        <Helmet>
          <title>Blog | Tarunya Fest</title>
          <meta
            name="description"
            content="Discover the latest articles and updates about Tarunya Fest."
          />
          <meta property="og:title" content="Blog | Tarunya Fest" />
          <meta
            property="og:description"
            content="Read our latest blogs about Tarunya Fest events and highlights."
          />
          <meta
            property="og:url"
            content="http://www.tarunyafest.nesedu.in/blog"
          />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Tarunya Fest blog, college fest articles, Tarunya Fest updates, Tarunya Fest events, Tarunya Fest highlights, cultural festival blog, college events blog, Tarunya Fest news, creative fest blog, event blogs"
          />
        </Helmet>

        {/* Blog Content */}
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="main-heading"
          >
            Tarunya Fest Blog
          </motion.h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post.id * 0.1 }}
                className="bg-primaryDark hover:shadow-xl rounded-xl overflow-hidden"
              >
                <motion.img
                  src={post.imageUrl || "/images/blog-1.webp"}
                  alt={post.title}
                  className="w-full h-48 sm:h-52 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="p-6">
                  <h2 className="text-xl text-amber-200 font-semibold">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mt-2 line-clamp-3">
                    {post.description}
                  </p>
                  <Link to={`/blog/${post.id}`}>
                    <button className="mt-4 bg-amber-500 text-black px-4 py-2 rounded-lg">
                      Read More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default Blog;
