import { cercaUsuariLogIn } from "./cercaUsuari";
export const loginF = (usuari, claudePas, dadesUsuaris, setDadesUsuaris, navega) => {
  const { usuaris } = dadesUsuaris;
  const index = cercaUsuariLogIn(usuaris, usuari, claudePas);

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
    navega(process.env.PUBLIC_URL + "/starships");
    console.log(`User ${usuari} logged in!`);
    return null;
  } else {
    console.log(`User ${usuari} incorrect user name or password`);
    return `User ${usuari} incorrect user name or password!`;
  }
};
