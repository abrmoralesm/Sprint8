import axios from "axios";

export const fetchAPI = async (url, page, setDades, setError, signal) => {
  try {
    const resposta = await axios({
      method: "get",
      url: url,
      signal: signal,
      params: { page: page },
    });

    setDades(resposta.data);
    console.log(resposta);
    console.log("Dades carregades correctament");
  } catch (err) {
    setError(err.message);
    console.log("Error en la càrrega de dates");
  }
};
