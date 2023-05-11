export const switchLinkNav = (state, action) => {
  switch (action.type) {
    case "homeClick":
      return { home: true, starShips: false };
    case "starShipsClick":
      return { home: false, starShips: true };
    default:
      return state;
  }
};
