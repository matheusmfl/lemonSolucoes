import { Button } from "../Button";
import {
  PorftolioSectionContainer,
  PortfolioSection2Container,
} from "./styled";

export function PortfolioSection() {
  return (
    <>
      <PorftolioSectionContainer>
        <p>
          <strong>Responsividade</strong> é o termo que se dá quando um site é
          desenvolvido para{" "}
          <strong>todos os formatos de telas disponíveis</strong>, seja
          Computador, tablet ou celular, o designer tem que se ajustar ao
          tamanho da tela!
        </p>
      </PorftolioSectionContainer>

      <PortfolioSection2Container>
        <div>
          <span>
            Consulte nosso portfólio e avalie nossos projetos, o seu pode ser o
            próximo!
          </span>
          <Button>Veja nossos projetos</Button>
        </div>
      </PortfolioSection2Container>
    </>
  );
}
