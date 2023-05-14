import { cercaUsuariSignUp } from "./cercaUsuari";

export const signUpF = (
  user,
  keyPass,
  dadesUsuaris,
  setDadesUsuaris,
  navega
) => {
  const { usuaris } = dadesUsuaris;
  const index = cercaUsuariSignUp(usuaris, user);

  if (index === -1) {
    setDadesUsuaris((prev) => {
      if (prev.usuaris)
        prev.usuaris.forEach((element) => (element.loguejat = false));
      dadesUsuaris.usuaris = [
        ...prev.usuaris,
        {
          user,
          keyPass,
          loguejat: true,
        },
      ];
      dadesUsuaris.usuariLoguejat = dadesUsuaris.usuaris.length - 1;
      localStorage.setItem("usuaris", JSON.stringify(dadesUsuaris.usuaris));
      localStorage.setItem(
        "usuariLoguejat",
        JSON.stringify(dadesUsuaris.usuariLoguejat)
      );
      return { ...dadesUsuaris };
    });
    navega(process.env.PUBLIC_URL + "/starships");
    console.log(`New user ${user} has signed up!`);
    return null;
  } else {
    console.log(`User ${user} already exists!`);
    return `User ${user} already exists!`;
  }
};
