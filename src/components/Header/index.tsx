import { HeaderContainer } from "./styled";
import logo from "../../assets/logoLemon.png";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="logomarca, o desenho é um limão e o nome em seguida é Lemon"
      />

      <ul>
        <li>home</li>
        <li>serviços</li>
        <li>portfólio</li>
        <li>blog</li>
        <li>contato</li>
      </ul>
    </HeaderContainer>
  );
}
