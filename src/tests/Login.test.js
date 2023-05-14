import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "../lib/constants/theme";
import AutenticacioContextProvider from "../context/autentitcacioContext";
import Login from "../components/Login/Login";
import { eventTests } from "../lib/utils/eventTests";
import { errorUser, errorKeyPass } from "../lib/constants/validateSchema";

beforeAll(() => {
  console.log("Inicio tests Login");
});

describe("Login testing", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <AutenticacioContextProvider>
            <Login />
          </AutenticacioContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  describe("Tests de valores iniciales", () => {
    test("Comprobar inputs vacíos al inicio", () => {
      expect(
        screen.getByRole("textbox", {
          name: /user/i,
        }).value
      ).toBe("");
      expect(screen.getByLabelText(/password/i).value).toBe("");
    });

    test("Comprobar que todos los inputs están disponibles para escribir text", () => {
      const { userInput, claudePasInput } = eventTests({
        user: "Nombre de usuario X",
        password: "Contraseña de X",
      });
      expect(userInput.value).toBe("Nombre de usuario X");
      expect(claudePasInput.value).toBe("Contraseña de X");
    });
  });

  describe("Tests de validación", () => {
    test("Comprobar validación se activa con user incorrecto", () => {
      expect(screen.queryByText(errorUser)).not.toBeInTheDocument();
      eventTests(
        {
          user: "Nombre de usuario X........",
          submit: "submit",
        },
        /open session/i
      );
      expect(screen.getByText(errorUser)).toBeInTheDocument();
    });

    test("Comprobar validación se activa con contraseña incorrecta", () => {
      expect(screen.queryByText(errorKeyPass)).not.toBeInTheDocument();
      eventTests(
        {
          user: "NomUser",
          password: "Password",
          submit: "submit",
        },
        /open session/i
      );
      expect(screen.getByText(errorKeyPass)).toBeInTheDocument();
    });

    test("Comprobar validación no se actica con datos correctos", () => {
      expect(screen.queryByText(errorUser)).not.toBeInTheDocument();
      expect(screen.queryByText(errorKeyPass)).not.toBeInTheDocument();
      eventTests(
        {
          user: "NomUsuarx",
          password: "Password",
          submit: "submit",
        },
        /open session/i
      );
      expect(screen.queryByText(errorUser)).not.toBeInTheDocument();
      expect(screen.queryByText(errorKeyPass)).not.toBeInTheDocument();
    });
  });
});
