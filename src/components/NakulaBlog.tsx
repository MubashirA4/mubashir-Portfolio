import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    id: 1,
    title: "Why Clarity Beats Creativity in Web Design",
    category: "Design Strategy",
    date: "Feb 4, 2025",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800",
  },
  {
    id: 2,
    title: "Why Motion Design Makes Your Website Feel Alive",
    category: "Social Media",
    date: "Feb 4, 2025",
    excerpt: "Motion helps your website feel modern and clear. Here's why it matters and how to use it without overdoing it.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
  },
  {
    id: 3,
    title: "What to Look for in a Premium Framer Template",
    category: "Branding",
    date: "Feb 4, 2025",
    excerpt: "Not all Framer templates are the same. Here's how to spot the ones worth using for your site or brand.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
  },
];

const NakulaBlog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-container" ref={ref}>
      <div className="flex items-end justify-between mb-12">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            (BLOG)
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl"
          >
            LATEST INSIGHTS
          </motion.h2>
        </div>
        <motion.a
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="#"
          className="outline-button hidden sm:inline-flex"
        >
          SEE ALL
        </motion.a>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.a
            key={post.id}
            href="#"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="blog-card group"
          >
            {/* Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-muted-foreground mt-2 text-sm line-clamp-2">
                {post.excerpt}
              </p>
            )}
          </motion.a>
        ))}
      </div>

      {/* Mobile See All */}
      <div className="mt-8 text-center sm:hidden">
        <a href="#" className="outline-button">
          SEE ALL
        </a>
      </div>
    </section>
  );
};

export default NakulaBlog;
