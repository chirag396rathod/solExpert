import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { BlogsContainer } from "./styled";
import Blogs from "../Blogs";

const BlogsSlider = () => {
  // useInView hook to trigger animation when section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <BlogsContainer ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial state of the animation
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animation state when in view
        transition={{ duration: 1 }} // Duration of the animation
      >
        <div className="container">
          <div className="section-header">
            <div className="section-label">Blogs</div>
            <div className="section-title">
              Insightful articles, expert opinions.
            </div>
          </div>
        </div>
        <Blogs isSubSection={true} />
      </motion.div>
    </BlogsContainer>
  );
};

export default BlogsSlider;
