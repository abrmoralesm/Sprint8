import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "../lib/constants/theme";
import AutenticacioContextProvider from "../context/autentitcacioContext";
import ConfigStarship from "../components/ConfigStarship/ConfigStarship";
import axios from "axios";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

beforeAll(() => {
  console.log("Inicio tests ConfigStarship");
});

describe("Starship testing", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <AutenticacioContextProvider>
            <ConfigStarship />
          </AutenticacioContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => axios.get.mockClear());

  test("Comprobación del renderizado de los avisos de carga de fechas", () => {
    expect(screen.getByText(/loading data/i)).toBeInTheDocument();
    expect(screen.getByText(/loading image/i)).toBeInTheDocument();
  });

  test("Comprobando que se renderiza el botón y link a starships", async () => {
    expect(
      await screen.findByRole("button", { name: "starships" })
    ).toBeTruthy();
    expect(await screen.findByRole("link", { name: "starships" })).toBeTruthy();
  });

  test("Comprobar que el enlace a 'starships' funciona", async () => {
    const botoStarships = await screen.findByRole("link", {
      name: "starships",
    });
    expect(botoStarships).toBeTruthy();
    userEvent.click(botoStarships);
    expect(await screen.findByText("starships")).toBeTruthy();
  });
});
