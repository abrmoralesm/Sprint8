import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "../lib/constants/theme";
import AutenticacioContextProvider from '../context/autentitcacioContext';
import Logout from "../components/Logout/Logout";

beforeAll(() => {
	console.log("Inici tests Logout");
});

describe("Logout testing", () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<ThemeProvider theme={THEME}>
					<AutenticacioContextProvider>
						<Logout />
					</AutenticacioContextProvider>
				</ThemeProvider>
			</BrowserRouter>
		);
	});

	test("Comprovació del renderitzat de misstage de logout", async () => {
		expect(await screen.findByText(/logged out/i)).toBeInTheDocument();
	});
});
