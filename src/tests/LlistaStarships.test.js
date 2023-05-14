import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "../lib/constants/theme";
import AutenticacioContextProvider from "../context/autentitcacioContext";
import ListStarships from "../components/ListStarships/ListStarships";
import axios from "axios";

jest.mock("axios");

beforeAll(() => {
  console.log("Inicio test Starships");
});

describe("Starships testing", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <AutenticacioContextProvider>
            <ListStarships />
          </AutenticacioContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => axios.get.mockClear());

  test("Comprobación del renderitzat de los avisos de carga de dates", () => {
    expect(screen.getByText(/loading data/i)).toBeInTheDocument();
  });
});
