import { cercaUsuari } from "./cercaUsuari";

export const signUpF = (
  usuari,
  claudePas,
  dadesUsuaris,
  setDadesUsuaris,
  navega
) => {
  const { usuaris } = dadesUsuaris;
  const index = cercaUsuari(usuaris, usuari, claudePas);

  if (index === -1) {
    setDadesUsuaris((prev) => {
      if (prev.usuaris)
        prev.usuaris.forEach((element) => (element.loguejat = false));
      dadesUsuaris.usuaris = [
        ...prev.usuaris,
        {
          usuari,
          claudePas,
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
    console.log(`New user ${usuari} has signed up!`);
    navega(process.env.PUBLIC_URL + "/starships");
  } else console.log(`User ${usuari} already exists!`);
};
