import { ReactNode } from "react";
import { ButtonContainer } from "./styled";

interface buttonContainerProps {
  children: ReactNode;
}
export function Button({ children }: buttonContainerProps) {
  return <ButtonContainer>{children}</ButtonContainer>;
}
