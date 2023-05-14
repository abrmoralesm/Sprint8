import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "../lib/constants/theme";
import AutenticacioContextProvider from "../context/autentitcacioContext";
import DetallsStarship from "../components/DetallsStarship/DetallsStarship";
import axios from "axios";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

beforeAll(() => {
	console.log("Inici tests DetallsStarship");
});

describe("Starship testing", () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<ThemeProvider theme={THEME}>
					<AutenticacioContextProvider>
						<DetallsStarship />
					</AutenticacioContextProvider>
				</ThemeProvider>
			</BrowserRouter>
		);
	});

	afterEach(() => axios.get.mockClear());

	test("Comprovació del renderitzat dels avisos de càrrega de dades", () => {
		expect(screen.getByText(/loading data/i)).toBeInTheDocument();
		expect(screen.getByText(/loading image/i)).toBeInTheDocument();
	});

	test("Comprovar que es renderitza el botó i link a 'starships'", async () => {
		expect(
			await screen.findByRole("button", { name: "starships" })
		).toBeTruthy();
		expect(await screen.findByRole("link", { name: "starships" })).toBeTruthy();
	});

	test("Comprovar que l'enllaç a 'starships' actua", async () => {
		const botoStarships = await screen.findByRole("link", {
			name: "starships",
		});
		expect(botoStarships).toBeTruthy();
		userEvent.click(botoStarships);
		expect(await screen.findByText("starships")).toBeTruthy();
	});
});
