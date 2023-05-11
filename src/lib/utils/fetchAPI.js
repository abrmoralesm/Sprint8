import axios from "axios";

export const fetchAPI = async (
  url,
  pagina,
  setData,
  setError,
  signal
) => {
  try {
    const resposta = await axios(
      {
        method: "get",
        url: url,
        params: { page: pagina },
      },
      { signal }
    );
    setData(resposta.data);
    console.log("Dades carregades correctament");
  } catch (err) {
    setError(err.message);
    console.log("Error en la càrrega de dades");
  }
};
