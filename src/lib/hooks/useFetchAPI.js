import { useEffect, useState } from "react";
import { fetchAPI } from "../utils/fetchAPI";

export const useFetchAPI = (url, page) => {
  const [starships, setStarships] = useState({
    dates: [],
    loading: true,
    error: false,
  });

  const setDades = (dates) =>
    setStarships((prev) => ({
      dates: [...prev.dates, ...dates.results],
      loading: false,
      error: false,
    }));

  const setError = (missatge) =>
    setStarships({
      dates: [],
      loading: false,
      error: missatge,
    });

  useEffect(() => {
    const controller = new AbortController();
    fetchAPI(url, page, setDades, setError, controller.signal);
    return () => controller.abort();
  }, [url, page]);

  return {
    dates: starships.dates,
    next: starships.next,
    loading: starships.loading,
    error: starships.error,
  };
};
