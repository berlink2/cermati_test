import styled from "styled-components";
import colors from "./colors";

const NewsLetterContainer = styled.div`
  .newsletter-panel {
    max-width: 640px;
    background-color: ${colors.Blue};
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }
  .cancel-button {
    align-self: flex-end;
  }
  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 700;
  }
  span:hover {
    cursor: pointer;
  }
  p {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .form {
  }

  .input {
    width: 75%;
    margin-right: 1rem;
  }

  .submit-button {
    background-color: ${colors.Orange};
    border: none;
  }

  .open {
    padding: 2rem;
    opacity: 1 !important;
    transition: all 3s ease-out;
    -moz-transition: all 3s ease-out;
    -webkit-transition: all 3s ease-out;
    transform: translateY(0);
  }

  .closed {
    opacity: 0 !important;
    transition: all 3s ease-in;
    -moz-transition: all 3s ease-in;
    -webkit-transition: all 3s ease-in;
    transform: translateY(300rem);
  }
`;

export default NewsLetterContainer;
