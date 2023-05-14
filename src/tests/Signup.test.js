import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "../lib/constants/theme";
import AutenticacioContextProvider from "../context/autentitcacioContext";
import { eventTests } from "../lib/utils/eventTests";
import SignUp from "../components/Signup/Signup";
import { errorUser, errorKeyPass } from "../lib/constants/validateSchema";

beforeAll(() => {
  console.log("Inici tests Signup");
});

describe("Signup testing", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <AutenticacioContextProvider>
            <SignUp />
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

    test("Comprobar que todos los campos están disponbles para recibir  texto", () => {
      const { userInput, claudePasInput } = eventTests({
        user: "Nombre user X",
        password: "Password X",
      });
      expect(userInput.value).toBe("Nombre user X");
      expect(claudePasInput.value).toBe("Password X");
    });
  });

  describe("Tests de validación", () => {
    test("Comprobar que vadilación se activa con datos incorrectos", () => {
      expect(screen.queryByText(errorUser)).not.toBeInTheDocument();
      eventTests(
        {
          user: "Nombre de usuario X",
          submit: "submit",
        },
        /create user/i
      );
      expect(screen.getByText(errorUser)).toBeInTheDocument();
    });

    test("Comprobar que vadilación se activa con contraseña incorrecta", () => {
      expect(screen.queryByText(errorKeyPass)).not.toBeInTheDocument();
      eventTests(
        {
          user: "Nombre User",
          password: "Password",
          submit: "submit",
        },
        /create user/i
      );
      expect(screen.getByText(errorKeyPass)).toBeInTheDocument();
    });

    test("Comprobar que vadilación no se activa con datos incorrectos", () => {
      expect(screen.queryByText(errorUser)).not.toBeInTheDocument();
      expect(screen.queryByText(errorKeyPass)).not.toBeInTheDocument();
      eventTests(
        {
          user: "Nombre Usuer",
          password: "Password",
          submit: "submit",
        },
        /create user/i
      );
      expect(screen.queryByText(errorUser)).not.toBeInTheDocument();
      expect(screen.queryByText(errorKeyPass)).not.toBeInTheDocument();
    });
  });
});
