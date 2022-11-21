import styled from "styled-components";

interface buttonProps {
  variant?: "yellow" | "gray";
}
export const ButtonContainer = styled.button<buttonProps>`
  height: 50px;
  cursor: pointer;
  border: none;
  width: 180px;
  background-color: ${(props) =>
    props.variant == "yellow" ? "#FACC15" : "#1F2937"};
  color: ${(props) => (props.variant == "yellow" ? "#1F2937" : "white")};

  border-radius: 4px;
  color: ${(props) => (props.variant == "yellow" ? "#1F2937" : "#FFFFFF")};
`;
