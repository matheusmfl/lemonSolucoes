import styled from "styled-components";
import heroImg from "../../assets/heroMainImg.png";

export const MainContainer = styled.main`
  padding: 0 9.375rem;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 209, 67, 1) 0%,
    rgba(255, 145, 83, 1) 90%
  );
  min-height: 720px;
  padding-top: 8.625rem;

  background-repeat: no-repeat;
  background-position: right 25%;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    right: 2rem;
    top: 10rem;
    background-image: url(${heroImg});
    background-size: cover;
    background-repeat: no-repeat;

    height: 465.22px;
    width: 724.65px;
    z-index: 2;
  }

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
    bottom: -2px;
    width: 100%;
  }
`;
