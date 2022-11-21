import { ReactNode } from "react";
import { ButtonContainer } from "./styled";

interface buttonContainerProps {
  children: ReactNode;
  variant?: "yellow" | "gray";
}
export function Button({ children, variant }: buttonContainerProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>;
}
