import styled from "styled-components";

export const CreateBlogsContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 75px auto;
  background: #fff;
  padding: 24px;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1080px) {
    max-width: 100%;
  }
  .form-title {
    font-size: 32px;
    font-weight: bold;
    color: #0f0f0f;
    margin-bottom: 24px;
  }
  .preview-image-container {
    width: 100%;
    height: 350px;
    max-height: 350px;
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    padding: 8px;
    margin-bottom: 24px;
    position: relative;
    &:hover {
      .remove-button {
        display: block;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .remove-button {
      right: 16px;
      top: 16px;
      background-color: #0f0f0f;
      color: #fff;
      border: none;
      &:hover {
      background-color: rgba(15, 15, 15, 0.9);
    }
    }
  }
  .upload-image {
    width: 100%;
    padding: 16px;
    border: 2px dashed #dcdcdc;
    border-radius: 6px;
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 24px;
    input {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      cursor: pointer;
    }
    .helper-content {
      font-size: 20px;
      font-weight: 500;
      color: #757575;
      opacity: 0.7;
    }
  }
  .input-label {
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 600;
  }
  input,
  textarea {
    width: 100%;
    outline: none;
    border: 1px solid #dcdcdc;
    padding: 10px 12px;
    border-radius: 6px;
    font-size: 16px;
    color: #0f0f0f;
  }
  .add-blog-text {
    font-size: 16px;
    font-weight: 500;
    color: #0f0f0f;
    margin-top: -5px;
    text-align: right;
    cursor: pointer;
    user-select: none;
  }
  .remove-button {
    display: none;
    position: absolute;
    top: 0px;
    right: 0px;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    padding: 4px;
    font-size: 12px;
    cursor: pointer;
    user-select: none;
    &:hover {
      background-color: rgba(15, 15, 15, 0.05);
    }
  }
  .input-wrapper {
    position: relative;
    width: 100%;
    &:hover {
      .remove-button {
        display: block;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0 16px;
    .create-blog-btn {
      padding: 12px 15px;
      background-color: rgb(15, 15, 15);
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      border: none;
      outline: none;
      border-radius: 6px;
      &.outline {
        background-color: #fff;
        color: #0f0f0f;
      }
      &:hover,
      &:focus {
        background-color: rgba(15, 15, 15, 0.9);
        border: none;
        outline: none;
        &.outline {
          background-color: #fff;
        }
      }
    }
  }
`;
