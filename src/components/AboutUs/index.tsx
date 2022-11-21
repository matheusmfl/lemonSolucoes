import aboutUsIMG from "../../assets/aboutUsIMG.png";
import medalha from "../../assets/medalha.svg";
import ferramenta from "../../assets/ferramentaIcon.svg";
import { AboutUsContainer } from "./styled";
import { Button } from "../Button";

export function AboutUs() {
  return (
    <AboutUsContainer>
      <div className="firstSection">
        <h1>Porquê nos escolher?</h1>
        <p>
          Nós da Lemon trabalhamos incansavelmente para entregar um produto
          optimizado para nosso cliente, são anos de estudo e preparação que
          chegam até você por um preço acessível, fugimos de fáceis soluções,
          como WordPress, nossos web sites são totalmente personalizáveis e de
          fácil manutenção, também é possível escalar conforme a demanda da sua
          empresa cresce, isso significa que futuramente continuaremos aplicando
          melhorias e ferramentas no seu projeto.
        </p>
        <Button variant="yellow">Solicitar cotação</Button>
      </div>
      <img
        src={aboutUsIMG}
        alt="Mulher segurando celular enquanto homem observa atentamente"
      />
      <div className="lastSection">
        <div>
          <img src={medalha} alt="ícone de uma medalha" />
          <span>Equipe qualificada</span>
          <p>
            A nossa equipe é composta por profissionais de diversas áreas da
            tecnologia, design e linguística, o que nos permite elaborar
            projetos bem estruturados de ponta a ponta.
          </p>
        </div>
        <div>
          <img
            src={ferramenta}
            alt="ícone de uma ferramenta de apertar parafuso chamada Chave inglesa"
          />
          <span>Suporte contínuo</span>
          <p>
            Tenha sempre a nossa garantia para possíveis manutenções,
            atualizações e implementações de novas funcionalidades.
          </p>
        </div>
      </div>
    </AboutUsContainer>
  );
}
