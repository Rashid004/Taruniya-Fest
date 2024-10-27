/** @format */
import { motion } from "framer-motion";
const blogPosts = [
  {
    id: 1,
    title: "Welcome to Taruniya Fest",
    description: "Discover what Taruniya Fest has in store for you this year!",
    imgUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9df41c53449221.59355d5209abe.jpg",
  },
  {
    id: 2,
    title: "Our Biggest Events Yet",
    description:
      "This year, we are hosting some of the craziest events you've ever seen. Check them out!",
    imgUrl:
      "https://engg.cambridge.edu.in/wp-content/uploads/2020/12/chigurufest17-1024x683.jpg",
  },
  {
    id: 3,
    title: "Meet the Organizers",
    description: "Get to know the people behind the scenes of Taruniya Fest.",
    imgUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/itgd_dalle-1681805013-image-sixteen_nine-_3.jpg?VersionId=ZoCbwr3MD6f.9kDyfzRcI4.C3EgJVlWP&size=690:388",
  },
];

function Blog() {
  return (
    <section className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="main-heading"
          >
            Tarunya Fest Blog
          </motion.h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mt-4">
            Stay updated with all the latest happenings!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
              key={post.id}
              className="bg-primaryDark shadow-lg rounded-xl overflow-hidden border border-[#DECBA7] transform transition-transform duration-300 hover:scale-105"
            >
              <motion.img
                src={post.imgUrl}
                alt={post.title}
                className="w-full h-48 sm:h-52 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="p-6">
                <motion.h2
                  whileHover={{ scale: 1.05, color: "#4A90E2" }}
                  className="text-xl sm:text-2xl text-[#DECBA7] font-semibold"
                >
                  {post.title}
                </motion.h2>
                <p className="text-sm sm:text-base text-gray-400 mt-2">
                  {post.description}
                </p>
                <button className="mt-4 bg-[#8A0000] text-[#DECBA7] px-4 sm:px-6 py-2 rounded-lg hover:bg-[#AC1212] transition-colors">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
