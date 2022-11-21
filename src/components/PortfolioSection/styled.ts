import styled from "styled-components";
import mockupIMG from "../../assets/mockupImg.jpg";

export const PorftolioSectionContainer = styled.section`
  max-height: 758px;
  min-height: 758px;
  padding: 198px, 150px, 108px, 150px;
  background-image: url(${mockupIMG});
  position: relative;
  p {
    max-width: 452px;
    position: absolute;
    top: 198px;
    left: 787px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    /* or 48px */

    /* Cinza/50 */

    color: #fafafa;
  }
`;

export const PortfolioSection2Container = styled.section`
  padding: 80px, 150px;
  
`;
