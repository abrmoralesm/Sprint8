import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "../lib/constants/theme";
import AutenticacioContextProvider from "../context/autentitcacioContext";
import LlistaStarships from "../components/LlistaStarships/LlistaStarships";
import axios from "axios";

jest.mock("axios");

beforeAll(() => {
	console.log("Inici tests LlistaStarships");
});

describe("Starships testing", () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<ThemeProvider theme={THEME}>
					<AutenticacioContextProvider>
						<LlistaStarships />
					</AutenticacioContextProvider>
				</ThemeProvider>
			</BrowserRouter>
		);
	});

	afterEach(() => axios.get.mockClear());

	test("Comprovació del renderitzat dels avisos de càrrega de dades", () => {
		expect(screen.getByText(/loading data/i)).toBeInTheDocument();
	});

	/* test("Comprovació del renderitzat de les dades", async () => {
		axios.get.mockReturnValueOnce({
			data: {
				data: {
					results: [
						{
							name: "CR90 corvette",
						},
					],
				},
			}
		});
		expect(await screen.findByText(/CR90 corvette/i)).toBeInTheDocument();
	}); */

	/* test("Comprovació del renderitzat del botó 'view more'", async () => {
		const button = await screen.findByRole("button");
		expect (button).toBeTruthy();
	}); */
});
