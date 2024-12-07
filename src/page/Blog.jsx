/** @format */

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Welcome to Taruniya Fest",
//     description: "Discover what Taruniya Fest has in store for you this year!",
//     imgUrl:
//       "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9df41c53449221.59355d5209abe.jpg",
//   },
//   {
//     id: 2,
//     title: "Our Biggest Events Yet",
//     description:
//       "This year, we are hosting some of the craziest events you've ever seen. Check them out!",
//     imgUrl:
//       "https://engg.cambridge.edu.in/wp-content/uploads/2020/12/chigurufest17-1024x683.jpg",
//   },
//   {
//     id: 3,
//     title: "Meet the Organizers",
//     description: "Get to know the people behind the scenes of Taruniya Fest.",
//     imgUrl:
//       "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/itgd_dalle-1681805013-image-sixteen_nine-_3.jpg?VersionId=ZoCbwr3MD6f.9kDyfzRcI4.C3EgJVlWP&size=690:388",
//   },
// ];

function Blog() {
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(blogs);
  return (
    <section className="min-h-screen px-4 py-4 sm:py-6 md:py-8">
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
              key={post.id}
              className="bg-primaryDark hover:shadow-[0_20px_50px_rgba(255,191,0,0.15)] shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <motion.img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9df41c53449221.59355d5209abe.jpg"
                alt={post.title}
                className="w-full h-48 sm:h-52 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="p-6">
                <motion.h2
                  whileHover={{ scale: 1.05, color: "#f59e0b" }}
                  className="text-xl sm:text-2xl text-amber-200 font-semibold"
                >
                  {post.title}
                </motion.h2>
                <p className="text-base sm:text-lg text-gray-300 mt-2 line-clamp-3">
                  {post.description}
                </p>
                <Link to={`/blog/${post.id}`}>
                  <button className="mt-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 sm:px-6 py-2 rounded-lg shadow-lg hover:shadow-amber-500/20 transition duration-300 font-medium">
                    Read More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
