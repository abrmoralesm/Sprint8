import { useAutenticacioContext } from "../../context/autentitcacioContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contenidor } from "../Login/LoginStyled";
import { publish } from "../../lib/utils/cutomEvents";


const Login = () => {
  const [usuari, setUsuari] = useState("");
  const [claudePas, setClaudePas] = useState("");
  const { login } = useAutenticacioContext();
  const navega = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(usuari, claudePas);
  };

  useEffect(() => publish("none"),[]);

  return (
    <Contenidor>
      <div>
        <h2>Log in</h2>
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
          <button type='submit'>Open Session</button>
        </form>
        <div>
          <p>Create an account?</p>
          <button onClick={() => navega(process.env.PUBLIC_URL + "/auth/signup")}>
            Sign up
          </button>
        </div>
      </div>
    </Contenidor>
  );
};

export default Login;
