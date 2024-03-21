import React from "react";
import { BlogsContainer } from "./styled";
import { BlogData } from "./mockData";
import { useNavigate } from "react-router-dom";
import ScrollToTopOnMount from "../../Components/ScrollToTopOnMount";

const Blogs = ({ className, isSubSection }) => {
  const navigation = useNavigate();
  const handleBlogClick = () => {
    navigation(`/blog/${1}`);
  };

  const data = isSubSection ? BlogData.slice(0, 3) : BlogData;
  return (
    <BlogsContainer className={className}>
      {!isSubSection && (
        <>
          <ScrollToTopOnMount />
          <div className="section-header">
            <div className="section-label">Blogs</div>
            <div className="section-title">Explore new Updates</div>
          </div>
        </>
      )}
      <div className="row g-4">
        {data.map((item, key) => (
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
        {isSubSection && (
          <div
            className="view-more"
            onClick={() => {
              navigation("/blogs");
            }}
          >
            View More
          </div>
        )}
      </div>
    </BlogsContainer>
  );
};

export default Blogs;
