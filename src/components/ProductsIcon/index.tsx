import { ProductIconsContainer } from "./styled";
import siteInstitucional from "../../assets/iconSiteInstitucional.svg";
import landingPage from "../../assets/iconLandingpage.svg";
import identidadeVisual from "../../assets/iconIdentidadeVisual.svg";
import siteAcessoria from "../../assets/iconAcessoria.svg";

export function ProductIcons() {
  return (
    <ProductIconsContainer>
      <div>
        <h2>Confira nossos produtos</h2>
        <span>Soluções digitais para todo tipo de empresa</span>
      </div>

      <article>
        <div>
          <img
            src={siteInstitucional}
            alt="icone de 3 páginas descrevendo um site institucional"
          />
          <span>site institucional</span>
          <p>
            Tem como objetivo a comunicação da empresa com seu público, fazendo
            a apresentação da marca, produtos e serviços oferecidos.
          </p>
        </div>
        <div>
          <img
            src={landingPage}
            alt="icone de 3 páginas descrevendo um site institucional"
          />
          <span>Landing pages</span>
          <p>
            É um site de uma única página, são voltadas para ações de Marketing
            e costumam converter muitos clientes.
          </p>
        </div>
        <div>
          <img
            src={identidadeVisual}
            alt="icone de 3 páginas descrevendo um site institucional"
          />
          <span>Identidade visual</span>
          <p>
            É o conjunto de elementos gráficos que comunicam ao público a ideia,
            os valores, o propósito e a missão de uma empresa.
          </p>
        </div>
        <div>
          <img
            src={siteAcessoria}
            alt="icone de 3 páginas descrevendo um site institucional"
          />
          <span>Acessoria VIP</span>
          <p>
            Atendimento especializado com nossos especialistas para criar ações
            de marketing, reuniões de capacitação, desenvolvimento de e-mail
            marketings e outros
          </p>
        </div>
      </article>
    </ProductIconsContainer>
  );
}
