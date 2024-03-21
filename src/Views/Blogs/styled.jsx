import styled from "styled-components";

export const BlogsContainer = styled.div`
  .blog-card {
    cursor: pointer;
    .image-cover {
      width: 100%;
      height: 300px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.1);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .content {
    margin-top: 16px;
    .title {
      font-size: 18px;
      font-weight: 600;
      color: #0f0f0f;
      margin-bottom: 8px;
    }
    .sub-title {
      font-size: 16px;
      font-weight: 400;
      color: #757575;
    }
    .date {
      font-size: 14px;
      font-weight: 400;
      color: #0f0f0f;
    }
  }
  .view-more {
    text-align: right;
    font: 500 16px "Poppins", sans-serif;
    color: #0f0f0f;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BlogPostContainer = styled.div`
  .section-header {
    margin-top: 24px !important;
  }
  .back-button {
    margin-top: 24px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 48px;
    background-color: #fff;
    border: 1px solid #dedede;
    color: #0f0f0f;
    font-size: 16px;
    font-weight: 600;
    padding: 0 16px;
    border-radius: 8px;
    width: fit-content;
    span {
      margin-left: 6px;
      font-weight: bold;
    }
    &:hover {
      background-color: #f5f5f5;
    }
  }

  .blog-image-cover {
    width: 100%;
    height: 450px;
    object-fit: cover;
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.1);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .blog-date {
    font-size: 16px;
    font-weight: 500;
    color: #757575;
    margin-left: 10px;
  }
  .blog-description {
    font-size: 16px;
    font-weight: 400;
    color: #757575;
    margin-bottom: 16px;
  }
`;
