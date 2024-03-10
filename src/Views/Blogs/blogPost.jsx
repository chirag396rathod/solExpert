import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { BlogPostContainer } from "./styled";
import { useNavigate } from "react-router-dom";

const BlogPost = () => {
  const navigation = useNavigate();

  const handleOnBack = () => {
    navigation(-1);
  };
  return (
    <BlogPostContainer>
      <div className="back-button" onClick={handleOnBack}>
        <FaChevronLeft size={16} />
        <span>Back</span>
      </div>
      <div className="section-header">
        <div className="section-label">
          How collaboration makes us better designers{" "}
          <span className="blog-date">(18 Jan 2022)</span>
        </div>
        <div className="section-title">
          Collaboration can make our teams stronger, and our individual designs
          better.
        </div>
      </div>
      <div className="blog-image-cover">
        <img src="https://picsum.photos/1000" alt="" />
      </div>
      <div className="blog-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
        repellendus soluta, in dignissimos voluptatem consequuntur ullam hic ab
        obcaecati amet!
      </div>
      <div className="blog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex
        in quasi blanditiis voluptatum dolor officia perferendis autem esse
        mollitia, harum incidunt voluptatibus minima! Molestias asperiores
        repellendus perspiciatis placeat natus.
      </div>
      <div className="blog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
        illum, sunt ipsam tempora earum magni laboriosam! Itaque, eveniet
        quibusdam ex accusantium tenetur quasi ut cupiditate assumenda fugit.
        Suscipit odit officiis totam quis aspernatur cupiditate tempora,
        blanditiis temporibus nemo aliquid sequi animi, molestias provident, quo
        fuga explicabo accusantium! Fugit, necessitatibus?
      </div>
      <div className="blog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex
        in quasi blanditiis voluptatum dolor officia perferendis autem esse
        mollitia, harum incidunt voluptatibus minima! Molestias asperiores
        repellendus perspiciatis placeat natus.
      </div>
      <div className="blog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
        illum, sunt ipsam tempora earum magni laboriosam! Itaque, eveniet
        quibusdam ex accusantium tenetur quasi ut cupiditate assumenda fugit.
        Suscipit odit officiis totam quis aspernatur cupiditate tempora,
        blanditiis temporibus nemo aliquid sequi animi, molestias provident, quo
        fuga explicabo accusantium! Fugit, necessitatibus?
      </div>
      <div className="blog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex
        in quasi blanditiis voluptatum dolor officia perferendis autem esse
        mollitia, harum incidunt voluptatibus minima! Molestias asperiores
        repellendus perspiciatis placeat natus.
      </div>
      <div className="blog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
        illum, sunt ipsam tempora earum magni laboriosam! Itaque, eveniet
        quibusdam ex accusantium tenetur quasi ut cupiditate assumenda fugit.
        Suscipit odit officiis totam quis aspernatur cupiditate tempora,
        blanditiis temporibus nemo aliquid sequi animi, molestias provident, quo
        fuga explicabo accusantium! Fugit, necessitatibus?
      </div>
    </BlogPostContainer>
  );
};

export default BlogPost;
