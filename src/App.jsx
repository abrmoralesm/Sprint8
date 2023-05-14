import { THEME } from "./lib/constants/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import Navegador from "./components/Navegador/Navegador";
import Footer from "./components/Footer/Footer";
import AutenticacioContextProvider from "./context/autentitcacioContext";
import Router from "./Router/Router";

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <AutenticacioContextProvider>
        <header>
          <Header />
          <Navegador />
        </header>
        <main>
          <Router />
        </main>
        <footer>
          <Footer />
        </footer>
      </AutenticacioContextProvider>
    </ThemeProvider>
  );
};

export default App;
