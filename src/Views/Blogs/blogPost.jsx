import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { BlogPostContainer } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import ScrollToTopOnMount from "../../Components/ScrollToTopOnMount";

const BlogPost = () => {
  const navigation = useNavigate();
  const { id } = useParams();

  const handleOnBack = () => {
    navigation(-1);
  };

  const data =
    localStorage.getItem("blogs") && JSON.parse(localStorage.getItem("blogs"));
  console.log(data);
  return (
    <BlogPostContainer>
      <ScrollToTopOnMount />
      <div className="back-button" onClick={handleOnBack}>
        <FaChevronLeft size={16} />
        <span>Back</span>
      </div>
      <div className="blog-content">
        <div className="section-header">
          <div className="section-label">
            <span className="blog-date">(18 Jan 2022)</span>
          </div>
          <div className="section-title">
            Collaboration can make our teams stronger, and our individual
            designs better.
          </div>
        </div>
        <div className="blog-image-cover">
          <img src="https://picsum.photos/1000" alt="" />
        </div>
        <div className="blog-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          repellendus soluta, in dignissimos voluptatem consequuntur ullam hic
          ab obcaecati amet!
        </div>
      </div>
    </BlogPostContainer>
  );
};

export default BlogPost;
