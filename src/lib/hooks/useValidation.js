import { useState } from "react";
import { schema } from "../constants/validateSchema";
import { useAutenticacioContext } from "../../context/autentitcacioContext";

export const useValidation = (user, setUser, keyPass, setKeyPass, id) => {
  const [errors, setErrors] = useState({
    errorUser: "",
    errorKeyPass: "",
    errorInvalid: "",
  });
  const { signUp, login } = useAutenticacioContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ errorUser: "", errorKeyPass: "" });
    const validate = schema.validate({ user, keyPass });
    const errorsValidate = validate.some((errorValidate) => {
      if (errorValidate) {
        if (errorValidate.path === "user")
          setErrors((prev) => ({
            ...prev,
            errorUser: errorValidate.message,
          }));
        if (errorValidate.path === "keyPass")
          setErrors((prev) => ({
            ...prev,
            errorKeyPass: errorValidate.message,
          }));
        return true;
      } else {
        return false;
      }
    });
    if (!errorsValidate) {
      let errorInvalid;
      if (id === "signUp") errorInvalid = signUp(user, keyPass);
      else errorInvalid = login(user, keyPass);
      if (errorInvalid)
        setErrors((prev) => ({ ...prev, errorInvalid: errorInvalid }));
      setUser("");
      setKeyPass("");
    }
  };

  return {
    errorUser: errors.errorUser,
    errorKeyPass: errors.errorKeyPass,
    errorInvalid: errors.errorInvalid,
    handleSubmit,
  };
};
