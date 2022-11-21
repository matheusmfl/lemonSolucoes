import styled from "styled-components";

export const AboutUsContainer = styled.section`
  padding: 80px 150px;
  display: flex;
  gap: 1.25rem;
  .firstSection {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 366px;
    h1 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 120%;

      color: #112c3d;
    }
    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      /* or 22px */

      /* Cinza/500 */

      color: #6b7280;
    }
  }

  .lastSection {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px 20px;
      gap: 16px;

      width: 366.67px;
      height: 279px;

      background: #f5f5f5;
      /* Neumorphism */

      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.04), -4px -4px 4px #ffffff,
        inset -4px -4px 8px rgba(232, 232, 232, 0.16),
        inset 4px 4px 8px rgba(255, 255, 255, 0.16);
      border-radius: 16px;
    }
  }
`;
