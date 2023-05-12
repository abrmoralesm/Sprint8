import { cercaUsuari } from "./cercaUsuari";

export const signUpF = (usuari, claudePas, usuaris, setDadesUsuaris) => {
  const index = cercaUsuari(usuaris, usuari, claudePas);
  if (index === -1) {
    setDadesUsuaris((prev) => {
      if (prev.usuaris)
        prev.usuaris.forEach((element) => (element.loguejat = false));
      prev.usuaris = [
        ...prev.usuaris,
        {
          usuari,
          claudePas,
          loguejat: true,
        },
      ];
      prev.usuariLoguejat = prev.usuaris.length - 1;
      return { ...prev };
    });
    console.log(`New user ${usuari} has signed up!`);
  } else console.log(`User ${usuari} already exists!`);
};
