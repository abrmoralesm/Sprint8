import { useEffect, useState } from "react";
import { fetchAPI } from "../utils/fetchAPI";

export const useFetchAPI = (url, pagina) => {
  const [starships, setStarships] = useState({
    dades: [],
    loading: true,
    error: false,
  });

  const setDades = (dades) =>
    setStarships((prev) => ({
      dades: [...prev.dades, ...dades.results],
      loading: false,
      error: false,
    }));

  const setError = (missatge) =>
    setStarships({
      dades: [],
      loading: false,
      error: missatge,
    });

  useEffect(() => {
    const controller = new AbortController();
    fetchAPI(url, pagina, setDades, setError, controller.signal);
    return () => controller.abort();
  }, [url, pagina]);

  return {
    dades: starships.dades,
    next: starships.next,
    loading: starships.loading,
    error: starships.error,
  };
};
