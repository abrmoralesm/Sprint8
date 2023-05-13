export const getItemId = (starshipUrl) => {
  const starshipId = starshipUrl.split("/")[5];
  return starshipId;
};
