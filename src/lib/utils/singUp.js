import { cercaUsuariSignUp } from "./cercaUsuari";

export const signUpF = (usuari, claudePas, dadesUsuaris, setDadesUsuaris, navega) => {
  const { usuaris } = dadesUsuaris;
  const index = cercaUsuariSignUp(usuaris, usuari);

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
    navega(process.env.PUBLIC_URL + "/starships");
    console.log(`New user ${usuari} has signed up!`);
    return null;
  } else {
    console.log(`User ${usuari} already exists!`);
    return `User ${usuari} already exists!`;
  }
};
