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

  test("Comprobar que se renderizan los elementos del texto", () => {
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/greetings/i)).toBeInTheDocument();
    expect(screen.getByText("starships")).toBeInTheDocument();
  });

  test("Comprobar que se renderizan las imágenes", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText(/starship wellcome/i)).toBeInTheDocument();
  });

  test("Comprobar que se renderitza el botón y el enlace a 'starships'", () => {
    expect(
      screen.getByRole("button", { name: "starships" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveClass("link");
  });

  test("Comprobar que el enlaza a 'starships' funciona", async () => {
    const botoStarships = screen.getByRole("link", { name: "starships" });
    userEvent.click(botoStarships);
    expect(await screen.botoStarships).not.toBeTruthy();
  });
});
