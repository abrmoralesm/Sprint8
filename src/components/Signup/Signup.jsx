import { useAutenticacioContext } from "../../context/autentitcacioContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contenidor } from "./SignupStyled";

const SignUp = () => {
  const [usuari, setUsuari] = useState("");
  const [claudePas, setClaudePas] = useState("");
  const { signUp, usuaris, usuariLoguejat } = useAutenticacioContext();
  const navega = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(usuari, claudePas);
  };

  useEffect(() => {
    localStorage.setItem("usuaris", JSON.stringify(usuaris));
    localStorage.setItem("usuariLoguejat", JSON.stringify(usuariLoguejat));
  }, [usuaris, usuariLoguejat]);

  return (
    <Contenidor>
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='usuari'>
            User
            <input
              type='text'
              name='usuari'
              onChange={(e) => setUsuari(e.target.value)}
              required
            />
          </label>
          <label htmlFor='usuari'>
            Password
            <input
              type='text'
              name='claudePas'
              onChange={(e) => setClaudePas(e.target.value)}
              required
            />
          </label>
          <button type='submit'>Create User</button>
        </form>
        <div>
          <p>Already have an account?</p>
          <button onClick={() => navega(process.env.PUBLIC_URL + "/login")}>
            Log In
          </button>
        </div>
      </div>
    </Contenidor>
  );
};

export default SignUp;
