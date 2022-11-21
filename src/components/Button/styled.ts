import styled from "styled-components";

interface buttonProps {
  variant?: "yellow" | "gray";
}
export const ButtonContainer = styled.button<buttonProps>`
  height: 50px;
  width: 180px;
  background-color: ${(props) =>
    props.variant == "yellow" ? "#FACC15" : "#1F2937"};

  border-radius: 4px;
  color: ${(props) => (props.variant == "yellow" ? "#1F2937" : "#FFFFFF")};
`;
