import styled from "styled-components";
import heroImg from "../../assets/heroMainImg.png";

export const MainContainer = styled.main`
  padding: 0 9.375rem;
  background-color: #facc15;
  min-height: 720px;
  padding-top: 8.625rem;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-position: right 25%;
  position: relative;

  .mainText {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    cursor: default;

    button {
      cursor: pointer;
    }
  }

  h1 {
    font-family: "Inter";
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 49px;
  }

  img {
    color: white;
    border: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`;
