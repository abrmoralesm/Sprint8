import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const eventTests = ({ user, password, submit }, nameButton) => {
  const usuariInput = screen.getByRole("textbox", {
    name: /user/i,
  });
  const claudePasInput = screen.getByLabelText(/password/i);
  if (user) userEvent.type(usuariInput, user);
  if (password) userEvent.type(claudePasInput, password);
  if (submit) {
    const botoSubmit = screen.getByRole("button", { name: nameButton });
    userEvent.click(botoSubmit);
  }
  return { usuariInput, claudePasInput };
};
