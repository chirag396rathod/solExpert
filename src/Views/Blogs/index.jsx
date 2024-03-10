import React from "react";
import { BlogsContainer } from "./styled";
import { BlogData } from "./mockData";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigation = useNavigate();
  const handleBlogClick = () => {
    navigation(`/blog/${1}`);
  };
  return (
    <BlogsContainer>
      <div className="section-header">
        <div className="section-label">Blogs</div>
        <div className="section-title">Explore new Updates</div>
      </div>
      <div className="row g-4">
        {BlogData.map((item, key) => (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={key}
            onClick={handleBlogClick}
          >
            <div className="blog-card">
              <div className="image-cover">
                <img src="https://picsum.photos/500" alt="" />
              </div>
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="sub-title">{item.subTitle}</div>
                <div className="date">{item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BlogsContainer>
  );
};

export default Blogs;
