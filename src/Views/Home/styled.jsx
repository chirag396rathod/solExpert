import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 100%;
`;

export const ProjectShowOffContainer = styled.div`
  margin-top: 100px;
  box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.2);
  .lazy-load-image-background {
    height: 100% !important;
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
        background-color: rgba(0, 0, 0, 0.8);
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
    .client-data {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0 40px;
    }
    .section-title {
      color: #0f0f0f;
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
      margin-bottom: 16px;
      @media screen and (max-width: 1080px) {
        font-size: 24px;
        line-height: 30px;
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
      font-weight: 600;
      @media screen and (max-width: 1080px) {
        font-size: 22px;
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
  background-color: ${({ className }) => (className ? "none" : "#f5f5f5")};
  padding: 48px 0 48px 0;
  margin-top: 100px !important;
  .g-5 {
    @media screen and (max-width: 580px) {
      --bs-gutter-y: 1rem !important;
      --bs-gutter-x: 1rem !important;
    }
  }
  .section-header {
    margin-top: 0 !important;
  }
  .service-card {
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.2);
    border: 1px solid #ededed;
    .service-image-cover {
      width: 100%;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    overflow: hidden;
    cursor: pointer;
    &:hover {
      .service-image-cover {
        transition: all 0.2s ease-in-out;
        scale: 1.11;
      }
    }
    .service-title {
      margin-top: 24px;
      color: #0f0f0f;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 8px;
      text-align: center;
    }
    .service-description {
      color: #757575;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 8px;
      text-align: center;
    }
    .more-details {
      color: #e66767;
      font-size: 16px;
      font-weight: 600;
      margin-top: 8px;
      text-align: center;
    }
  }
`;

export const HowItsWorkContainer = styled.div`
  .col-lg-4 {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
  .g-5 {
    @media screen and (max-width: 580px) {
      --bs-gutter-y: 1rem !important;
      --bs-gutter-x: 1rem !important;
    }
    &.row > * {
      margin-top: 50px;
      &:nth-child(1) {
        margin-top: 20px !important;
      }
    }
  }
  .info-card {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: #fff;
    border: 12px solid #ededed;
    box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.5);
    text-align: center;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    .index-box {
      position: absolute;
      width: 16px;
      height: 16px;
      top: -10px;
      left: -10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #fff;
      border: 12px solid #ededed;
      box-shadow: 0 0 6px -3px rgba(0, 0, 0, 0.5);
      font-size: 24px;
      font-weight: 600;
    }
    &:hover {
      svg {
        transition: all 0.2s ease-in-out;
        scale: 1.4;
      }
      .index-box {
        transition: all 0.2s ease-in-out;
        scale: 1.1;
      }
      .card-icon {
        color: #fff !important;
      }
      .info-title {
        color: #fff !important;
      }
      .info-description {
        color: #f5f5f5 !important;
      }

      background-color: #e66767;
      .index-box {
        color: #e66767;
      }
    }
    .card-icon {
      margin-bottom: 16px;
    }
    .info-title {
      font-size: 20px;
      font-weight: 600;
      color: #0f0f0f;
      margin-bottom: 8px;
    }
    .info-description {
      font-size: 14px;
      font-weight: 400;
      color: #757575;
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
  .g-5 {
    @media screen and (max-width: 580px) {
      --bs-gutter-y: 1rem !important;
      --bs-gutter-x: 1rem !important;
    }
  }
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
      line-height: 30px;
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
      @media screen and (max-width: 767px) {
        height: 40px;
      }
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
      line-height: 30px;
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
      @media screen and (max-width: 767px) {
        height: 40px;
      }
      &:hover {
        background-color: #000;
      }
    }
  }
`;

export const ComparisonContainer = styled.div`
  .image-cover {
    max-height: 435px;
  }
  .image-comparison {
    max-height: 435px;
    img {
      object-fit: cover;
    }
  }
`;

export const WhereWeAreContainer = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  padding: 24px 0;
  margin-top: 100px;
  margin-bottom: 50px;
  .section-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    margin-bottom: 24px;
    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
  .locations {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 24px;
    .place-name {
      font-size: 32px;
      color: #757575;
      font-weight: 700;
      text-transform: uppercase;
      @media screen and (max-width: 767px) {
        font-size: 16px;
      }
      &:hover {
        color: #0f0f0f;
      }
    }
  }
  .helper-text {
    text-align: center;
    font-size: 16px;
    color: #757575;
    font-weight: 400;
    margin-top: 16px;
    padding: 0 24px;
    @media screen and (max-width: 767px) {
      font-size: 12px;
    }
    a {
      color: #0f0f0f;
      font-weight: 600;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const AchievementsContainer = styled.div`
  .achievements-container {
    text-align: center;
    .index {
      font-size: 32px;
      font-weight: 600;
      color: #e66767;
      font-family: "Poppins", sans-serif;
      @media screen and (max-width: 767px) {
        font-size: 24px;
        font-weight: 500;
      }
    }
    .text {
      font-size: 24px;
      font-weight: 500;
      @media screen and (max-width: 767px) {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;

export const BlogsContainer = styled.div``;

export const HeroSectionLayout = styled.div`
  width: 100%;
  height: calc(100vh - 83px);
  min-height: calc(100vh - 83px);
  position: relative;
  .slick-slider,
  .slick-slide {
    width: 100%;
    height: calc(100vh - 83px);
    min-height: calc(100vh - 83px);
  }
  .background-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .slider-item {
    height: 100%;
    max-width: 100%;
    max-height: calc(100vh - 83px);
    position: relative;
    .image-container {
      height: 100%;
      max-width: 100%;
      max-height: calc(100vh - 83px);
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .opacity-background {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.6);
      width: 100%;
      height: 100%;
    }
  }
  .hero-section {
    min-height: calc(100vh - 83px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 768px) {
      height: 100%;
    }
    @media screen and (max-width: 767px) {
      height: 100%;
      justify-content: flex-start;
      align-items: center;

      .down-icon {
        display: none;
      }
    }
    .row {
      width: 100%;
    }
    .google-review-box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 16px;
      border: 1px solid #ededed;
      border-radius: 8px;
      margin-top: 24px;
      max-width: 500px;
      background-color: #fff;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.6);
      position: absolute;
      bottom: 24px;
      right: 24px;
      /* max-width: 300px; */
      @media screen and (max-width: 767px) {
        margin-top: 0px;
        margin-bottom: 24px;
      }
      .icon-cover {
        width: 24px;
        height: 24px;
        img {
          width: 100%;
          height: 100%;
        }
        margin-right: 12px;
      }
      .content {
        flex: 1;
        .title {
          font-size: 16px;
          font-weight: 500;
          font-family: "Poppins", sans-serif !important;
          line-height: 19px;
          margin-bottom: 8px;
          color: #0f0f0f;
        }
        .description {
          font-size: 14px;
          font-weight: 400;
          font-family: "Poppins", sans-serif !important;
          line-height: 20px;
          color: #7c7c7c;
        }
      }
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
      font-weight: bold;
      line-height: 68px;
      color: #fff;
      font-family: "Poppins", sans-serif;
      margin-bottom: 16px;
      max-width: 991px;
      span {
        color: #e66767;
        font-weight: bold;
      }
      @media screen and (max-width: 1200px) {
        font-size: 28px;
        font-weight: 600;
        line-height: 36px;
        margin-top: 50px;
      }
    }
    .hero-description,
    span {
      font-size: 24px !important;
      font-weight: 400 !important;
      line-height: 30px !important;
      color: #fff !important;
      @media screen and (max-width: 1200px) {
        font-size: 16px !important;
        font-weight: 400 !important;
        line-height: 20px !important;
      }
    }
    @media screen and (max-width: 767px) {
      br {
        display: none;
      }
    }
    .buttons {
      display: flex;
      justify-content: flex-start;
      gap: 0 16px;
      margin-top: 48px;
      @media screen and (max-width: 768px) {
        margin-bottom: 24px;
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
    a {
      text-decoration: none;
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
`;
