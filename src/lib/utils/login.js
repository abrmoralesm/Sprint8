import { cercaUsuari } from "./cercaUsuari";

export const loginF = (usuari, claudePas, usuaris, setDadesUsuaris) => {
  const index = cercaUsuari(usuaris, usuari, claudePas);
  if (index !== -1) {
    setDadesUsuaris((prev) => {
      if (prev.usuaris)
        prev.usuaris.forEach((element) => (element.loguejat = false));
      prev.usuariLoguejat = index;
      prev.usuaris[index].loguejat = true;
      return { ...prev };
    });
    console.log(`User ${usuari} logged in!`);
  } else {
    console.log(`User ${usuari} doesn't exist!`);
  }
};
