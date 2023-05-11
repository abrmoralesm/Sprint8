import axios from "axios";
import { endPointsAPI } from "../constants/endPointsAPI";

export const fetchAPIItemData = async (
  urlItem,
  setItemData,
  setErrorItemData,
  signal
) => {
  try {
    const respostaItem = await axios(
      {
        method: "get",
        url: urlItem,
      },
      { signal }
    );
    setItemData(respostaItem.data);
    console.log("Dades item carregades correctament");
  } catch (err) {
    setErrorItemData(err.message);
    console.log("Error en la càrrega de dades item");
  }
};

export const fetchAPIItemImg = async (
  urlItemImg,
  setItemImg,
  setErrorItemImg,
  signal
) => {
  try {
    const respostaItem = await axios(
      {
        method: "get",
        url: urlItemImg,
      },
      { signal }
    );
    setItemImg(urlItemImg);
    console.log(respostaItem.data);
    console.log("Dades img item carregades correctament");
  } catch (err) {
    setErrorItemImg(endPointsAPI.starshipNoImgAlt);
    console.log("Error en la càrrega de dades img item");
  }
};
