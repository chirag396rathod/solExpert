import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 16px 24px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 2px 0px #00000001 !important;
  border-bottom: 1px solid #ededed;
  position: sticky;
  top: 0;
  z-index: 99;
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .logo {
    width: 150px;
    height: 50px;
    img {
      width: 150px;
      height: 50px;
    }
  }
  .menu-icon,
  .mobile-menu {
    display: none !important;
    .nav-items {
      margin-bottom: 10px !important;
    }
  }
  @media screen and (max-width: 1080px) {
    position: sticky;
    height: 83px;
    padding: 16px 0;

    .logo {
      flex: 1;
    }
    .menu-icon {
      display: flex !important;
      cursor: pointer;
    }
    .web-menu {
      display: none !important;
    }
    .mobile-menu {
      display: flex !important;
    }
  }
  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1080px) {
      position: fixed;
      top: 67px;
      left: -24px;
      min-height: 100vh;
      max-height: 100vh;
      width: 110%;
      display: block;
      z-index: 99;
      padding: 24px;
      background-color: #fff;
      .nav-items {
        display: block;
        padding: 10px 25px !important;
        border-bottom: 1px solid #ededed !important;
      }
      .download-app {
        margin: 0 16px;
      }
    }
    .nav-items {
      font-size: 16px;
      font-weight: 400;
      padding: 10px 10px;
      margin: 0 10px;
      color: #757575;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      &.active,
      &:hover {
        color: #0f0f0f;
        background-color: #ededed;
        border-radius: 8px;
      }
    }
    .download-app {
      height: 48px;
      padding: 0 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ededed;
      font-size: 14px;
      font-weight: 500;
      color: #0f0f0f;
      border-radius: 8px;
      cursor: pointer;
      background-color: #f5f5f5;

      @media screen and (max-width: 1080px) {
        margin-top: 50%;
      }
      &:hover {
        transition: background-color 0.2s ease-in-out;
      }
    }
  }
`;
