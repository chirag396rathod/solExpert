import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { BlogPostContainer } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import ScrollToTopOnMount from "../../Components/ScrollToTopOnMount";
import moment from "moment";
import { generateBlogUrl } from "../../Utils/urlUtils";
import BlogMeta from "./meta";
import { LazyLoadImage } from ".";

const BlogPost = () => {
  const navigation = useNavigate();
  const { title } = useParams();

  const handleOnBack = () => {
    navigation(-1);
  };

  const data =
    localStorage.getItem("blogs") &&
    JSON.parse(localStorage.getItem("blogs"))?.blogsList.find(
      (item) => generateBlogUrl(item?.blog_title) === title
    );
  return (
    <BlogPostContainer>
      <BlogMeta
        title={data?.blog_title}
        description={data?.content[0].input_value}
        link={generateBlogUrl(data?.blog_title)}
        keywords={[
          "blog solar new feature",
          "blog solar new feature",
          "blog solar new feature",
        ]}
      />
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
          {/* <img src={data?.image?.url} alt="" /> */}
          <LazyLoadImage height="450" src={data?.image?.url} alt={data?.blog_title} />
        </div>
        {data?.content?.map((item, key) => {
          if (item?.input_type === "textarea") {
            return (
              <div className="blog-description" key={`description-${key}`}>
                {item?.input_value}
              </div>
            );
          }
          if (item?.input_type === "sub_title") {
            return (
              <div className="blog-subtitle" key={`description-${key}`}>
                {item?.input_value}
              </div>
            );
          }
          if (item?.input_type === "bullate_point") {
            return (
              <li className="blog-bullate-item" key={`description-${key}`}>
                {item?.input_value}
              </li>
            );
          }
        })}
      </div>
    </BlogPostContainer>
  );
};

export default BlogPost;
