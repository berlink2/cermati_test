import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import colors from "./styles/colors";
import "./styles/NotificationPanel.css";

const Container = styled.div`
  @media only screen and (max-width: 500px) {
    margin: 0 1rem 0 1rem;
    .content {
      display: flex;
      flex-direction: column;
    }
    .notif-button {
      width: 15%;
      display: flex;
      justify-content: center;
    }
  }
  display: flex;
  justify-content: center;

  .content {
    margin: 1rem 0 1rem 0;
    max-width: 720px;
    display: flex;
  }

  .notif-button {
    background-color: ${colors.Blue};
    margin-left: 0.5rem;
    border: none;
  }
`;

const NotificationPanel = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(true);
  };
  //
  return (
    <Container className={clicked ? "closed" : "open"}>
      <div className="content">
        <p id="text">
          By accessing and using this website, you acknowledge that you have
          read and understand our <a href={"/"}>Cookie Policy</a>,
          <a href="/">Privacy Policy</a>, and our
          <a href="/"> Terms of Service</a>.
        </p>
        <Button onClick={handleClick} type="primary" className="notif-button">
          Got it
        </Button>
      </div>
    </Container>
  );
};

export default NotificationPanel;
