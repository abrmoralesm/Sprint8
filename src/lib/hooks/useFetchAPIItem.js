import { useEffect, useState } from "react";
import { fetchAPIItemData, fetchAPIItemImg } from '../utils/fetchApiItem';

export const useFetchAPIItem = (urlItem, urlItemImg) => {

  const [item, setItem] = useState({
    dades: [],
    loading: true,
    error: false,
  });
  const [img, setImg] = useState({
    src: "",
    loading: true,
    error: false,
  });

const setDadesItem = (dades) =>
  setItem({
    dades,
    loading: false,
    error: false,
  });

const setErrorDadesItem = (error) =>
  setItem({
    dades: [],
    loading: false,
    error: error.message,
  });

const setImgItem = (src) =>
  setImg({
    src,
    loading: false,
    error: false,
  });

const setErrorImgItem = (srcNoImg) =>
  setImg({
    src: srcNoImg,
    loading: false,
    error: true,
  });

  useEffect(() => {
    const controller = new AbortController();
    fetchAPIItemData(urlItem, setDadesItem, setErrorDadesItem, controller.signal);
    return () => controller.abort();
  }, [urlItem]);

    useEffect(() => {
    const controller = new AbortController();
    fetchAPIItemImg(urlItemImg, setImgItem, setErrorImgItem, controller.signal);
    return () => controller.abort();
  }, [urlItemImg]);

  return {
    dadesItem: item.dades,
    loadingItem: item.loading,
    errorItem: item.error,
    imgItem: img.src,
    loadingImg: img.loading,
    errorImg: img.error,
    
  };
};
