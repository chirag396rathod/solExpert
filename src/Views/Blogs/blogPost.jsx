import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { BlogPostContainer } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import ScrollToTopOnMount from "../../Components/ScrollToTopOnMount";
import moment from "moment";

const BlogPost = () => {
  const navigation = useNavigate();
  const { id } = useParams();

  const handleOnBack = () => {
    navigation(-1);
  };

  const data =
    localStorage.getItem("blogs") &&
    JSON.parse(localStorage.getItem("blogs"))?.blogsList[id - 1];
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
            <span className="blog-date">{`${moment(data?.timestamp).format(
              "MMM D, YYYY"
            )}`}</span>
          </div>
          <div className="section-title">{data?.blog_title}</div>
        </div>
        <div className="blog-image-cover">
          <img src={data?.image?.url} alt="" />
        </div>
        {data?.content?.map((item, key) => {
          if (item?.input_type === "textarea") {
            return <div className="blog-description" key={`description-${key}`}>{item?.input_value}</div>;
          }
          if (item?.input_type === "sub_title") {
            return <div className="blog-subtitle" key={`description-${key}`}>{item?.input_value}</div>;
          }
          if (item?.input_type === "bullate_point") {
            return <li className="blog-bullate-item" key={`description-${key}`}>{item?.input_value}</li>;
          }
        })}
      </div>
    </BlogPostContainer>
  );
};

export default BlogPost;
