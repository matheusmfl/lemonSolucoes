import { MainContainer } from "./styled";
import wave from "../../assets/Wave.svg";
import { Button } from "../Button";

export function Main() {
  return (
    <MainContainer>
      <div className="mainText">
        <h1>Agora ficou fácil colocar o seu negócio no mercado digital</h1>
        <span>
          Em 2022 empresas que investiram no digital alcançaram até 63% de
          clientes a mais na média.
        </span>
        <Button>Quero ser digital</Button>
      </div>

      <img src={wave} alt="" />
    </MainContainer>
  );
}
