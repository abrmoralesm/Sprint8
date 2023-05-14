export const logoutF = (usuariLoguejat, datesUsers, setDatesUsers) => {
  const { usuaris } = datesUsers;
  const user = usuaris[usuariLoguejat].user;
  setDatesUsers((prev) => {
    datesUsers.usuariLoguejat = null;
    datesUsers.usuaris[usuariLoguejat].loguejat = false;
    localStorage.setItem("usuaris", JSON.stringify(datesUsers.usuaris));
    localStorage.setItem(
      "usuariLoguejat",
      JSON.stringify(datesUsers.usuariLoguejat)
    );
    return { ...datesUsers };
  });
  console.log(`User ${user} has logged out!`);
};
