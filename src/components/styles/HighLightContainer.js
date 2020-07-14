import styled from "styled-components";

const HighLightContainer = styled.div`
  margin: 5rem 3rem 5rem 3rem;
  display: grid;
  grid-template:
    "header header header" 1fr / auto
    "a a a" auto / auto;

  grid-gap: 3rem;
  .highlight-header {
    grid: header;
    text-align: center;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-self: center;
    &__h1 {
      font-weight: 600;
      font-size: 3rem;
    }

    &__p {
      font-weight: 500;
    }
  }

  .highlight-tiles {
    grid: a;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .highlight-tile {
    border: 1px solid #cecece;
  }

  .title {
    display: flex;
    justify-content: space-between;
  }

  .title > h2 {
    color: #5b5b5b;
    font-size: 2rem;
  }

  .card-paragraph {
    color: #444444;
    font-weight: 400;
  }
  .icon {
    color: gray;
    font-size: 2.5rem;
    transform: translateY(-25%);
  }

  @media only screen and (max-width: 960px) {
    .highlight-tiles {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }

  @media only screen and (max-width: 480px) {
    .highlight-header {
      width: 100%;
    }
    .highlight-tiles {
      display: flex;
      flex-direction: column;
    }

    .highlight-tile {
      margin-bottom: 2rem;
    }
  }
`;

export default HighLightContainer;
