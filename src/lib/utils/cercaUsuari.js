export const cercaUsuariLogIn = (usuaris, user, keyPass) => {
  return usuaris.findIndex(
    (usuariItem) => usuariItem.user === user && usuariItem.keyPass === keyPass
  );
};

export const cercaUsuariSignUp = (usuaris, user) => {
  return usuaris.findIndex((usuariItem) => usuariItem.user === user);
};
