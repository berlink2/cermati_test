import { Menu } from "antd";
import logo from "../assets/y-logo-white.png";
import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  .menu {
    line-height: 6.4rem;
    background-color: transparent;
    position: absolute;
    z-index: 1;
  }
  .logo-container,
  .ant-menu-root {
    border-bottom: none !important;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Menu mode="horizontal" className="menu">
        <Menu.Item className="logo-container">
          <img
            src={logo}
            alt="logo"
            style={{
              width: 40,
              borderBottom: 0,
            }}
          />
        </Menu.Item>
      </Menu>
    </LogoContainer>
  );
};

export default Logo;
