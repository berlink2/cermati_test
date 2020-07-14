import { Button, Carousel } from "antd";

import React from "react";

//import "./styles/PageHeader.css";
import HeaderContainer from "./styles/HeaderContainer";

const PageHeader = () => {
  return (
    <Carousel>
      <HeaderContainer>
        <div className="header-overlay">
          <div className="header-text">
            <h2 id="top">Hello! I'm Berlian Khatulistiwa</h2>
            <h2 id="mid"> Consult, Design, and Develop Websites </h2>
            <div>
              Have something great in mind? Feel free to contact me.
              <br />
              I'll help you to make it happen.
            </div>
            <Button
              className="call-to-action-button"
              type="primary"
              ghost="true"
              size="large"
            >
              Let's Make Contact
            </Button>
          </div>
        </div>
      </HeaderContainer>
    </Carousel>
  );
};

export default PageHeader;
