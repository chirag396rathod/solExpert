import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 100%;
  .hero-section {
    height: calc(100vh - 83px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 768px) {
      height: 100%;
    }
    @media screen and (max-width: 1080px) {
      height: 100vh;
      justify-content: flex-start;
      align-items: flex-start;

      .down-icon {
        display: none;
      }
    }
    .row {
      width: 100%;
    }
    .grid-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
    .hero-text {
      font-size: 52px;
      font-weight: 700;
      line-height: 62px;
      color: #0f0f0f;
      margin-bottom: 32px;
      font-family: "Poppins", sans-serif;
      @media screen and (max-width: 1200px) {
        font-size: 28px;
        font-weight: 600;
        line-height: 34px;
        margin-top: 50px;
      }
    }
    .hero-description {
      font-size: 24px;
      font-weight: 400;
      line-height: 40px;
      color: #757575;
      @media screen and (max-width: 1200px) {
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
      }
    }
    .buttons {
      display: flex;
      justify-content: flex-start;
      gap: 0 16px;
      margin-top: 24px;
      @media screen and (max-width: 768px) {
        margin-bottom: 50px;
      }
    }
    .alt-btn {
      background-color: #fff !important;
      color: #0f0f0f !important;
      border: 1px solid #ededed !important;
      &:hover {
        transition: background-color 0.2s ease-in-out;
        background-color: #f5f5f5 !important;
      }
    }
    .down-icon {
      margin-top: 44px;
      margin-left: -20px;
    }
    .hero-btn {
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
  .image-grid {
    border-radius: 8px;
    overflow: hidden;
    &.row {
      .col-6 {
        margin-top: 8px !important;
      }
    }
    .image-cover {
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      &:hover {
        img {
          transition: all 0.2s ease-in-out;
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const ProjectShowOffContainer = styled.div`
  @media screen and (max-width: 1080px) {
    margin-top: 50px;
  }
  .image-cover {
    width: 440px;
    height: 557px;
    border-radius: 8px;
    position: relative;
    @media screen and (max-width: 1080px) {
      height: 400px;
      margin-bottom: 24px;
    }
    @media screen and (max-width: 1080px) {
      width: 100%;
    }
    .quotes-box {
      width: 280px;
      background-color: #472d38;
      padding: 32px;
      border-radius: 8px;
      position: absolute;
      bottom: 0px;
      right: -70px;
      color: #fff;
      font-size: 26px;
      font-weight: 600;
      @media screen and (max-width: 1080px) {
        right: 0;
        width: 100%;
      }
    }
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .label {
      font-size: 18px;
      font-weight: 500;
      color: #757575;
      margin-bottom: 8px;
      font-family: "Poppins", sans-serif;
      text-transform: uppercase;
      @media screen and (max-width: 1080px) {
        font-size: 14px;
      }
    }
    .section-title {
      color: #0f0f0f;
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
      margin-bottom: 16px;
      @media screen and (max-width: 1080px) {
        font-size: 24px;
      }
    }
    .description {
      margin-bottom: 16px;
      color: #757575;
      font-size: 16px;
      font-weight: 400;
    }
    .number-of-clients {
      .client-label {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 8px;
        color: #0f0f0f;
      }
      .value {
        font-size: 24px;
        font-weight: 600;
        color: #0f0f0f;
      }
    }
  }
`;

export const WhyChooseUsContainer = styled.div`
  .benefit-card {
    border: 1px solid #ededed;

    &.card-1 {
      background-color: #574b90;
    }
    &.card-2 {
      background-color: #e66767;
    }
    &.card-3 {
      background-color: #3ec1d3;
    }
    &.card-4 {
      background-color: #303a52;
    }
    border-radius: 8px;
    padding: 24px;
    height: 100%;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.2);
    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.03);
    }
    svg {
      fill: #fff;
    }
    .card-title {
      margin-top: 16px;
      margin-bottom: 8px;
      color: #fff;
      font-size: 24px;
      @media screen and (max-width: 1080px) {
        font-size: 16px;
      }
    }
    .card-description {
      color: #f0f0f0;
      font-weight: 400;
      font-size: 16px;

      @media screen and (max-width: 1080px) {
        font-size: 14px;
      }
    }
  }
`;

export const ServicesContainer = styled.div`
  .service-item {
    width: 100%;
    @media screen and (max-width: 767px) {
      flex-direction: column-reverse;
    }
  }
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .image-cover {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid #ededed;
    @media screen and (max-width: 767px) {
      margin-top: 24px;
    }
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    .service-content-title {
      font-size: 24px;
      color: #0f0f0f;
      font-weight: 500;
      margin-bottom: 16px;
      font-family: "Poppins", sans-serif;
    }
    .service-content-description {
      font-size: 16px;
      color: #757575;
      font-weight: 400;
      margin-bottom: 16px;
    }
    .key-feature {
      margin-bottom: 32px;
      .item {
        span {
          margin-left: 10px;
          font-size: 16px;
          color: #0f0f0f;
          font-weight: 400;
        }
      }
    }
    .service-content-button {
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
`;

export const HowItsWorkContainer = styled.div`
  .info-card {
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #ededed;
    background-color: #fff;
    box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.2);

    &.card-1 {
      background-color: #e66767;
    }
    &.card-2 {
      background-color: #3ec1d3;
    }
    &.card-3 {
      background-color: #303a52;
    }

    .info-icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      .index-box {
        color: #0f0f0f;
        background-color: #f5f5f5;
        width: 40px;
        height: 40px;
        border: 1px solid #ededed;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        margin-right: 10px;
        font-size: 16px;
        font-weight: 600;
        @media screen and (max-width: 1080px) {
          width: 30px;
          height: 30px;
        }
      }
      .card-icon {
        color: #fff !important;
        @media screen and (max-width: 1080px) {
          width: 30px !important;
        }
      }
    }
    .info-title {
      font-size: 24px;
      font-weight: 600;
      color: #fff;
      font-family: "Poppins", sans-serif;
      @media screen and (max-width: 1080px) {
        font-size: 16px;
      }
    }
    .info-description {
      font-size: 16px;
      font-weight: 500;
      color: #f0f0f0;
      @media screen and (max-width: 1080px) {
        font-size: 12px;
      }
    }
  }
`;

export const ReviewsContainer = styled.div`
  .review-card {
    border: 1px solid #ededed;
    background-color: #fff;
    box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.2);
    padding: 32px 16px 16px 16px;
    border-radius: 8px;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .user-profile {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 16px;
      &.profile-1 {
        background-color: #574b90;
      }
      &.profile-2 {
        background-color: #e66767;
      }
      &.profile-3 {
        background-color: #3ec1d3;
      }
      &.profile-4 {
        background-color: #303a52;
      }
      span {
        font-size: 24px;
        font-weight: 600;
        color: #fff;
      }
    }
  }
  .user-name {
    font-size: 20px;
    font-weight: 500;
    color: #0f0f0f;
    margin-bottom: 8px;
  }
  .review-description {
    font-size: 16px;
    font-weight: 400;
    color: #757575;
  }
  .rating {
    margin-top: 16px;
    display: flex;
    gap: 0 8px;
    svg {
      font-size: 18px;
      fill: #ffff00;
    }
  }
`;
export const OurWorkContainer = styled.div`
  .work-card {
    padding: 16px;
    border: 1px solid #ededed;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.1);
    .image-cover {
      width: 100%;
      height: 100%;
      margin-bottom: 16px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      &:hover {
        img {
          transition: all 0.2s ease-in-out;
          transform: scale(1.1);
        }
      }
    }
  }
  .slick-list {
    margin: 0 -8px;
  }
  .slick-slide > div {
    padding: 0 8px;
  }
  .location {
    font-size: 16px;
    font-weight: 500;
    color: #0f0f0f;
  }
  .slider-container {
    position: relative;
    width: 100%;
    .icon-cover {
      position: absolute;
      top: 50%;
      cursor: pointer;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      border: 1px solid #f5f5f5;
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.7);

      svg {
        fill: #dedede;
      }
      &:hover {
        border: 1px solid #dedede;
        svg {
          fill: #0f0f0f;
        }
      }
      &.left {
        left: 20px;
      }
      &.right {
        right: 20px;
      }
    }
  }
`;

export const AboutUsContainer = styled.div`
  .image-cover {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid #ededed;
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    .service-content-title {
      font-size: 24px;
      color: #0f0f0f;
      font-weight: 500;
      margin-bottom: 16px;
      font-family: "Poppins", sans-serif;
    }
    .service-content-description {
      font-size: 16px;
      color: #757575;
      font-weight: 400;
      margin-bottom: 16px;
    }

    .service-content-button {
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
      text-decoration: none;
      &:hover {
        background-color: #000;
      }
    }
  }
`;

export const ServiceDetailContainer = styled.div`
  .section-title {
    text-transform: capitalize;
  }
  .image-cover {
    width: 100%;
    height: 100%;

    border-radius: 8px;
    padding: 16px;
    border: 1px solid #ededed;
    @media screen and (max-width: 767px) {
      margin-top: 24px;
    }
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    .service-content-title {
      font-size: 24px;
      color: #0f0f0f;
      font-weight: 500;
      margin-bottom: 16px;
      font-family: "Poppins", sans-serif;
    }
    .service-content-description {
      font-size: 16px;
      color: #757575;
      font-weight: 400;
      margin-bottom: 16px;
    }
    .key-feature {
      margin-bottom: 32px;
      .title {
        font-size: 22px;
        color: #0f0f0f;
        font-weight: 400;
        margin-bottom: 24px;
      }
      .item {
        margin-bottom: 8px;
        span {
          margin-left: 10px;
          font-size: 16px;
          color: #0f0f0f;
          font-weight: 400;
        }
      }
    }
    .service-content-button {
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
      text-decoration: none;
      &:hover {
        background-color: #000;
      }
    }
  }
`;
