export const getStarshipId = (starshipUrl) => {
  const starshipId = starshipUrl.split("/")[5];
  return starshipId;
};
