import { AboutUs } from "./components/AboutUs";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PortfolioSection } from "./components/PortfolioSection";
import { ProductIcons } from "./components/ProductsIcon";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Main />
      <ProductIcons />
      <AboutUs />
      <PortfolioSection />

      <GlobalStyle />
    </>
  );
}
