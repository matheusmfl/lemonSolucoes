import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ProductIcons } from "./components/ProductsIcon";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Main />
      <ProductIcons />
      <GlobalStyle />
    </>
  );
}
