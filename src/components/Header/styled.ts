import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #facc15;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1f2937;
  width: 100%;

  box-shadow: 0px 9px 15px rgba(0, 0, 0, 0.05);

  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;

    li {
      cursor: pointer;
      position: relative;
      &::after {
        content: "";
        width: 0%;
        height: 3px;
        background-color: white;
        position: absolute;
        bottom: -0.3rem;
        left: 0;
      }

      &:hover {
        color: white;
      }
      &:hover::after {
        width: 100%;
        transition: all ease 0.6s;
      }
    }
  }

  padding: 1rem 9.375rem;
`;
