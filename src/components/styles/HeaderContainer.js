import styled from "styled-components";
import colors from "./colors";
import heroShot from "../../assets/work-desk__dustin-lee.jpg";

const HeaderContainer = styled.div`
  min-height: 75vh;

  background-image: url(${heroShot});

  background-size: cover;
  background-position: top;
  object-fit: cover;

  .header-overlay {
    min-height: 75vh;
    width: 100%;
    background: rgba(0, 35, 56, 0.75);
    display: flex;
    flex-direction: column;
  }

  .logo {
    transform: scale(0.1);
    position: absolute;
  }

  .header-text {
    text-align: center;
    margin: auto;
    color: white;
  }

  #top {
    color: white;
    font-size: 1.9em;
    font-weight: 400;
  }

  #mid {
    color: white;
    font-size: 1.9em;
    font-weight: 600;
  }

  .banner-text div {
    font-size: 1.3em;
  }

  .call-to-action-button {
    color: white !important;
    border-color: white !important;
    margin-top: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.25rem;
  }

  .call-to-action-button:hover {
    color: ${colors.darkBlue} !important;
    background-color: white !important;
  }

  @media only screen and (max-width: 500px) {
    .header-text {
      margin: auto 1.5rem auto 1.5rem;
    }
  }
`;

export default HeaderContainer;
