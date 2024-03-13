import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #f5f5f5;
  margin-top: 100px;
  padding-top: 25px;
  padding-bottom: 10px;
  border-top: 1px solid #ededed;
  @media screen and (max-width: 500px) {
    .footer-top {
      flex-direction: column;
    }
    .get-in-touch-section {
      text-align: left !important;
      margin-top: 24px;
    }
    .footer-contact-link {
      flex-wrap: wrap;

      .contact-item {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
    .logo-container {
      width: 150px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .get-in-touch-section {
      text-align: right;
      .title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 16px;
        color: #757575;
      }
      .social-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0 16px;
        .social-icon {
          width: 32px;
          height: 32px;
          background-color: #0f0f0f;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          svg {
            fill: #fff;
            font-size: 16px !important;
          }
        }
      }
    }
  }
  .footer-contact-link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0 32px;
    .contact-item {
      font-size: 16px;
      color: #757575;
      a {
        color: #0f0f0f !important;
        text-decoration: none;
        font-weight: 600;
        &:hover {
          text-decoration: underline;
        }
      }
      span {
        color: #0f0f0f;
        margin-right: 10px;
      }
    }
    margin-bottom: 32px;
  }
  .copy-right-content {
    width: 100%;
    text-align: left;
    padding-bottom: 16px;
  }
`;
