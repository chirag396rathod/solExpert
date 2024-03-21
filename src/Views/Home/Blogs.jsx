import React from "react";
import { BlogsContainer } from "./styled";
import Blogs from "../Blogs";

const BlogsSlider = () => {
  return (
    <BlogsContainer>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Blogs</div>
          <div className="section-title">
            Insightful articles, expert opinions.
          </div>
        </div>
      </div>
      <Blogs isSubSection={true}></Blogs>
    </BlogsContainer>
  );
};

export default BlogsSlider;
