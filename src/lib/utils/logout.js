export const logoutF = (usuariLoguejat, dadesUsuaris, setDadesUsuaris) => {
  const { usuaris } = dadesUsuaris;
  const user = usuaris[usuariLoguejat].user;
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
  console.log(`User ${user} has logged out!`);
};
