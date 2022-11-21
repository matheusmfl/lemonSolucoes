import styled from "styled-components";

export const ProductIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 150px;
  margin-top: 40px;

  .heroSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 160%;
      color: #1f2937;
    }

    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #6b7280;
      line-height: 160%;
    }
  }

  article {
    display: flex;
    gap: 20px;
    margin-top: 88px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      text-align: center;

      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        color: #1f2937;
      }

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;

        text-align: center;

        color: #6b7280;
      }
      img {
        max-height: 70px;
        max-width: 70px;
      }
    }
  }
`;
