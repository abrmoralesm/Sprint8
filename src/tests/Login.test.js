import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "../lib/constants/theme";
import AutenticacioContextProvider from "../context/autentitcacioContext";
import Login from "../components/Login/Login";
import { eventTests } from "../lib/utils/eventTests";
import { errorUsuari, errorClaudePas } from "../lib/constants/validateSchema";

beforeAll(() => {
	console.log("Inici tests Login");
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

	describe("Tests de valors inicials", () => {
		test("Comprovar inputs buits a l'inici", () => {
			expect(
				screen.getByRole("textbox", {
					name: /user/i,
				}).value
			).toBe("");
			expect(screen.getByLabelText(/password/i).value).toBe("");
		});

		test("Comprovar que tots els camps estan disponibles per rebre text", () => {
			const { usuariInput, claudePasInput } = eventTests({
				usuari: "Nom d'usuari X",
				password: "Clau de Pas X",
			});
			expect(usuariInput.value).toBe("Nom d'usuari X");
			expect(claudePasInput.value).toBe("Clau de Pas X");
		});
	});

	describe("Tests de validació", () => {
		test("Comprovar validació salta amb usuari incorrecte", () => {
			expect(screen.queryByText(errorUsuari)).not.toBeInTheDocument();
			eventTests(
				{
					usuari: "Nom d'usuari X........",
					submit: "submit",
				},
				/open session/i
			);
			expect(screen.getByText(errorUsuari)).toBeInTheDocument();
		});

		test("Comprovar validació salta amb clau de pas incorrecta", () => {
			expect(screen.queryByText(errorClaudePas)).not.toBeInTheDocument();
			eventTests(
				{
					usuari: "NomUsuari",
					password: "ClaudePas",
					submit: "submit",
				},
				/open session/i
			);
			expect(screen.getByText(errorClaudePas)).toBeInTheDocument();
		});

		test("Comprovar validació no salta amb dades correctes", () => {
			expect(screen.queryByText(errorUsuari)).not.toBeInTheDocument();
			expect(screen.queryByText(errorClaudePas)).not.toBeInTheDocument();
			eventTests(
				{
					usuari: "NomUsuarx",
					password: "ClaudPas",
					submit: "submit",
				},
				/open session/i
			);
			expect(screen.queryByText(errorUsuari)).not.toBeInTheDocument();
			expect(screen.queryByText(errorClaudePas)).not.toBeInTheDocument();
		});
	});
});
