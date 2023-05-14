import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "../lib/constants/theme";
import AutenticacioContextProvider from "../context/autentitcacioContext";
import Wellcome from "../components/Wellcome/Wellcome";

beforeAll(() => {
  console.log("Inici tests Wellcome");
});

describe("Wellcome testing", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <AutenticacioContextProvider>
            <Wellcome />
          </AutenticacioContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  test("Comprovar que es renderitzen els elements de text", () => {
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/greetings/i)).toBeInTheDocument();
    expect(screen.getByText("starships")).toBeInTheDocument();
  });

  test("Comprovar que es renderitza la imatge", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText(/starship benvinguda/i)).toBeInTheDocument();
  });

  test("Comprovar que es renderitza el botó i l'enllaç a 'starships'", () => {
    expect(
      screen.getByRole("button", { name: "starships" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveClass("link");
  });

  test("Comprovar que l'enllaç a 'starships' actua", async () => {
    const botoStarships = screen.getByRole("link", { name: "starships" });
    userEvent.click(botoStarships);
    expect(await screen.botoStarships).not.toBeTruthy();
  });
});
