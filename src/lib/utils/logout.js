export const logoutF = (usuariLoguejat, usuaris, setDadesUsuaris) => {
  const usuari = usuaris[usuariLoguejat].usuari;
  setDadesUsuaris((prev) => {
    prev.usuariLoguejat = null;
    prev.usuaris[usuariLoguejat].loguejat = false;
    return { ...prev };
  });
  console.log(`User ${usuari} has logged out!`);
};
