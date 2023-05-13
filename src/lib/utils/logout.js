export const logoutF = (usuariLoguejat, dadesUsuaris, setDadesUsuaris) => {
  const { usuaris } = dadesUsuaris;
  const usuari = usuaris[usuariLoguejat].usuari;
  setDadesUsuaris((prev) => {
    dadesUsuaris.usuariLoguejat = null;
    dadesUsuaris.usuaris[usuariLoguejat].loguejat = false;
    localStorage.setItem("usuaris", JSON.stringify(dadesUsuaris.usuaris));
    localStorage.setItem(
      "usuariLoguejat",
      JSON.stringify(dadesUsuaris.usuariLoguejat)
    );
    return { ...dadesUsuaris };
  });
  console.log(`User ${usuari} has logged out!`);
};
