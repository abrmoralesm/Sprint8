import { cercaUsuari } from "./cercaUsuari";
export const loginF = (
  usuari,
  claudePas,
  dadesUsuaris,
  setDadesUsuaris,
  navega
) => {
  const { usuaris } = dadesUsuaris;
  const index = cercaUsuari(usuaris, usuari, claudePas);

  if (index !== -1) {
    setDadesUsuaris((prev) => {
      if (dadesUsuaris.usuaris)
        dadesUsuaris.usuaris.forEach((element) => (element.loguejat = false));
      dadesUsuaris.usuariLoguejat = index;

      dadesUsuaris.usuaris[index].loguejat = true;

      localStorage.setItem("usuaris", JSON.stringify(dadesUsuaris.usuaris));
      localStorage.setItem(
        "usuariLoguejat",
        JSON.stringify(dadesUsuaris.usuariLoguejat)
      );
      return { ...dadesUsuaris };
    });
    console.log(`User ${usuari} logged in!`);
    navega(process.env.PUBLIC_URL + "/starships");
  } else {
    console.log(`User ${usuari} doesn't exist!`);
  }
};