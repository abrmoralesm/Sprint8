import { cercaUsuariLogIn } from "./cercaUsuari";
export const loginF = (
  user,
  keyPass,
  dadesUsuaris,
  setDadesUsuaris,
  navega
) => {
  const { usuaris } = dadesUsuaris;
  const index = cercaUsuariLogIn(usuaris, user, keyPass);

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
    console.log(`User ${user} logged in!`);
    return null;
  } else {
    console.log(`User ${user} incorrect user name or password`);
    return `User ${user} incorrect user name or password!`;
  }
};
