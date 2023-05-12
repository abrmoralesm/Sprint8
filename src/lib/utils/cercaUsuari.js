export const cercaUsuari = (usuaris, usuari, claudePas) => {
  return usuaris.findIndex(
    (usuariItem) =>
      usuariItem.usuari === usuari && usuariItem.claudePas === claudePas
  );
};
