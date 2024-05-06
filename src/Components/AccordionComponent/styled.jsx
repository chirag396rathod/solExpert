import styled from "styled-components";

export const AccordionContainer = styled.div`
  .accordion-main-title {
    font-weight: 600;
    font-size: 18px;
    color: #000;
    font-family: "Poppins";
    @media screen and (max-width: 1080px) {
      font-size: 16px;
      font-weight: 500;
      max-width: 94%;
    }
  }
  .section-content {
    font-size: 16px;
    font-weight: 500;
    color: #757575;
  }
  .key-points {
    margin: 16px 0;
    .key-points-item {
      margin-left: 16px;
      margin-top: 8px;
      &:nth-child(1) {
        margin-top: 0;
      }
      .title {
        font-weight: 500;
        font-size: 16px;
        color: #000;
        font-family: "Poppins";
      }
      .content {
        font-weight: 400;
        font-size: 14px;
        color: #757575;
        font-family: "Poppins";
      }
    }
  }
  .accordion {
    border: none;
  }
  .accordion__button {
    background: none !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      width: 16px !important;
      height: 16px !important;
    }
  }
  .accordion__panel {
    border-top: 1px solid #dcdcdc;
  }
  .accordion__button:before {
    display: none;
  }
`;

export const AccordionBodyContainer = styled.div``;
