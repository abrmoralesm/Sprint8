export const cercaUsuariSignIn = (usuaris, usuari, claudePas) => {
  return usuaris.findIndex(
    (usuariItem) =>
      usuariItem.usuari === usuari && usuariItem.claudePas === claudePas
  );
};

export const cercaUsuariSignUp = (usuaris, usuari) => {
  return usuaris.findIndex((usuariItem) => usuariItem.usuari === usuari);
};
