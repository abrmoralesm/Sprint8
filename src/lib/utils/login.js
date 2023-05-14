import { cercaUsuariLogIn } from "./cercaUsuari";
export const loginF = (user, keyPass, datesUsers, setDatesUsers, navega) => {
  const { usuaris } = datesUsers;
  const index = cercaUsuariLogIn(usuaris, user, keyPass);

  if (index !== -1) {
    setDatesUsers((prev) => {
      if (datesUsers.usuaris)
        datesUsers.usuaris.forEach((element) => (element.loguejat = false));
      datesUsers.usuariLoguejat = index;
      datesUsers.usuaris[index].loguejat = true;

      localStorage.setItem("usuaris", JSON.stringify(datesUsers.usuaris));
      localStorage.setItem(
        "usuariLoguejat",
        JSON.stringify(datesUsers.usuariLoguejat)
      );
      return { ...datesUsers };
    });
    navega(process.env.PUBLIC_URL + "/starships");
    console.log(`User ${user} logged in!`);
    return null;
  } else {
    console.log(`User ${user} incorrect user name or password`);
    return `User ${user} incorrect user name or password!`;
  }
};
