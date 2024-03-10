import styled from "styled-components";

export const ContactUsContainer = styled.div`
  .google-map-code {
    width: 100%;
    max-height: 100%;
  }
  .service-content-title {
    font-size: 24px;
    color: #0f0f0f;
    font-weight: 500;
    margin-bottom: 16px;
    font-family: "Poppins", sans-serif;
  }
  .content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .form-container {
      padding: 16px;
      border: 1px solid #dedede;
      border-radius: 8px;

      width: 100%;
      label {
        display: block;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 10px;
        color: #0f0f0f;
      }
      input {
        height: 48px;
      }
      input,
      textarea {
        border-radius: 8px;
        width: 100%;
        background-color: #f5f5f5;
        padding: 10px 16px;
        border: none;
        outline: none;
        &:active {
          outline: none;
          border: none;
        }
      }
    }

    .service-content-button {
      margin-top: 10px;
      cursor: pointer;
      height: 48px;
      background-color: #0f0f0f;
      color: #fff;
      padding: 0 16px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      &:hover {
        background-color: #000;
      }
    }
  }
  .content-card {
    margin-top: 50px;
    border: 1px solid #dedede;
    border-radius: 8px;
    padding: 16px;
    height: 150px;
    @media screen and (max-width: 1080px) {
      margin-top: 0;
    }
    svg {
      font-size: 32px;
      margin-bottom: 16px;
    }
    .content {
      font-size: 16px;
      font-weight: 500;
      color: #757575;
      span,
      a {
        font-weight: 600;
        color: #0f0f0f !important;
        margin-bottom: 8px;
        text-decoration: none;
      }
    }
  }
`;
