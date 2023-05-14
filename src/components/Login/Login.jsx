import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contenidor } from "./LoginStyled";
import { publish } from "../../lib/utils/cutomEvents";
import { useValidacio } from "../../lib/hooks/useValidacio";


const Login = () => {
  const [usuari, setUsuari] = useState("");
  const [claudePas, setClaudePas] = useState("");
  const id = "login";
  const { errorUsuari, errorClaudePas, errorInvalid, handleSubmit } =
    useValidacio(usuari, setUsuari, claudePas, setClaudePas, id);
  const navega = useNavigate();

  useEffect(() => publish("none"), []);

  return (
    <Contenidor>
      <div>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          {errorInvalid && <h3>{errorInvalid}</h3>}
          <label htmlFor='usuari'>
            User
            <input
              type='text'
              name='usuari'
              onChange={(e) => setUsuari(e.target.value)}
              value={usuari}
            />
          </label>
          {errorUsuari && <p>{errorUsuari}</p>}
          <label htmlFor='usuari'>
            Password
            <input
              type='pasword'
              name='claudePas'
              onChange={(e) => setClaudePas(e.target.value)}
              value={claudePas}
            />
          </label>
          {errorClaudePas && <p>{errorClaudePas}</p>}
          <button type='submit'>Open Session</button>
        </form>
        <div>
          <p>Create an account?</p>
          <button
            onClick={() => navega(process.env.PUBLIC_URL + "/auth/signup")}
          >
            Sign up
          </button>
        </div>
      </div>
    </Contenidor>
  );
};

export default Login;
