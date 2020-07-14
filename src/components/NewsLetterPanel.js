import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import moment from "moment";
import $ from "jquery";
import NewsLetterContainer from "./styles/NewsLetterContainer";

const NewsLetterPanel = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false); //checks if panel is open
  const [position, setPosition] = useState(window.pageYOffset); //checks for position of screen
  const [expiration, setExpiration] = useState(null); //record of ten minutes from when panel is clicked

  //when component mounts add event listener that monitors scrolling

  useEffect(() => {
    //check local storage if expiration time from past session exists
    const expTime = localStorage.getItem("expirationTime");

    //if expiration time exists update expiration state, if not add scroll event listener
    if (expTime) {
      const expTimeObject = moment(expTime);

      setExpiration(expTimeObject);
      return;
    } else {
      window.addEventListener("scroll", getPosition);
    }
  }, []);

  //
  useEffect(() => {
    let interval = null;
    if (expiration) {
      interval = window.setInterval(() => {
        let currTime = new moment();
        if (currTime > expiration && expiration) {
          console.log("token removed");
          localStorage.removeItem("expirationTime");
          // $(".newsletter-panel").removeClass("closed");
          // $(".newsletter-panel").addClass("open");
          //setIsPanelOpen(true);
          window.addEventListener("scroll", getPosition);

          window.clearInterval(interval);
          setExpiration(null);
        }
      }, 1000);
    } else {
      window.clearInterval(interval);
    }

    //cleanup
    return () => {
      window.clearInterval(interval);
    };
  }, [expiration]);

  const handlePanel = () => {
    if (position > 0.3) {
      return "newsletter-panel open";
    } else if (isPanelOpen) {
      return "newsletter-panel open";
    }

    return "newsletter-panel closed";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    e.preventDefault();

    //get expiration time i.e. ten minutes later
    let tenMinsLater = new moment().add(10, "seconds");

    //update state with current time and expiration time for panel
    //store expiration time in local storage so expiration persists upon reloading
    localStorage.setItem("expirationTime", tenMinsLater);
    setExpiration(tenMinsLater);
    setIsPanelOpen(false);

    //remove class that is keeping panel open and add class that will close panel
    $(".newsletter-panel").removeClass("open");
    $(".newsletter-panel").addClass("closed");
    window.removeEventListener("scroll", () => {});
  };

  //method that gives ratio of window that has been scrolled
  const getPosition = () => {
    const window =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = window / height;
    if (scrolled > 0.3) {
      setPosition(scrolled);
      setIsPanelOpen(true);
    } else {
      setPosition(scrolled);
    }
  };

  return (
    <NewsLetterContainer>
      <div className={handlePanel()}>
        <span onClick={handleClick} className="cancel-button">
          x
        </span>
        <h1>Get latest updates in web technologies</h1>
        <p>
          I write articles related to web technologies, such as design trends,
          development tools, UI/UX case studies and reviews, and more. Sign up
          to my newsletter to get them all.
        </p>
        <Form onSubmit={handleSubmit} className="form">
          <Input
            type="text"
            placeholder="Email address"
            className="input"
          ></Input>
          <Button type="primary" className="submit-button">
            Count me in!
          </Button>
        </Form>
      </div>
    </NewsLetterContainer>
  );
};

export default NewsLetterPanel;
