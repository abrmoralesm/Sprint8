import { useState } from "react";
import { schema } from "../constants/validateSchema";
import { useAutenticacioContext } from "../../context/autentitcacioContext";

export const useValidacio = (
  usuari,
  setUsuari,
  claudePas,
  setClaudePas,
  id
) => {
  const [errors, setErrors] = useState({
    errorUsuari: "",
    errorClaudePas: "",
    errorInvalid: "",
  });
  const { signUp, login } = useAutenticacioContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ errorUsuari: "", errorClaudePas: "" });
    const validacio = schema.validate({ usuari, claudePas });
    const errorsValidacio = validacio.some((errorValidacio) => {
      if (errorValidacio) {
        if (errorValidacio.path === "usuari")
          setErrors((prev) => ({
            ...prev,
            errorUsuari: errorValidacio.message,
          }));
        if (errorValidacio.path === "claudePas")
          setErrors((prev) => ({
            ...prev,
            errorClaudePas: errorValidacio.message,
          }));
        return true;
      } else {
        return false;
      }
    });
    if (!errorsValidacio) {
      let errorInvalid;
      if (id === "signUp") errorInvalid = signUp(usuari, claudePas);
      else errorInvalid = login(usuari, claudePas);
      if (errorInvalid)
        setErrors((prev) => ({ ...prev, errorInvalid: errorInvalid }));
      setUsuari("");
      setClaudePas("");
    }
  };

  return {
    errorUsuari: errors.errorUsuari,
    errorClaudePas: errors.errorClaudePas,
    errorInvalid: errors.errorInvalid,
    handleSubmit,
  };
};
