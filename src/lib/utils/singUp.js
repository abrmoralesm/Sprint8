import { cercaUsuariSignUp } from "./cercaUsuari";

export const signUpF = (user, keyPass, datesUsers, setDatesUsers, navega) => {
  const { usuaris } = datesUsers;
  const index = cercaUsuariSignUp(usuaris, user);

  if (index === -1) {
    setDatesUsers((prev) => {
      if (prev.usuaris)
        prev.usuaris.forEach((element) => (element.loguejat = false));
      datesUsers.usuaris = [
        ...prev.usuaris,
        {
          user,
          keyPass,
          loguejat: true,
        },
      ];
      datesUsers.usuariLoguejat = datesUsers.usuaris.length - 1;
      localStorage.setItem("usuaris", JSON.stringify(datesUsers.usuaris));
      localStorage.setItem(
        "usuariLoguejat",
        JSON.stringify(datesUsers.usuariLoguejat)
      );
      return { ...datesUsers };
    });
    navega(process.env.PUBLIC_URL + "/starships");
    console.log(`New user ${user} has signed up!`);
    return null;
  } else {
    console.log(`User ${user} already exists!`);
    return `User ${user} already exists!`;
  }
};
