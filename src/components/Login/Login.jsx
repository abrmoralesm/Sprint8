import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./LoginStyled";
import { publish } from "../../lib/utils/cutomEvents";
import { useValidation } from "../../lib/hooks/useValidation";

const Login = () => {
  const [user, setUser] = useState("");
  const [keyPass, setKeyPass] = useState("");
  const id = "login";
  const { errorUser, errorKeyPass, errorInvalid, handleSubmit } = useValidation(
    user,
    setUser,
    keyPass,
    setKeyPass,
    id
  );
  const navega = useNavigate();

  useEffect(() => publish("none"), []);

  return (
    <Container>
      <div>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          {errorInvalid && <h3 className='missatge'>{errorInvalid}</h3>}
          <label htmlFor='user'>
            User
            <input
              type='text'
              id='user'
              name='user'
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </label>
          {errorUser && <p className='missatge'>{errorUser}</p>}
          <label htmlFor='keyPass'>
            Password
            <input
              type='password'
              id='keyPass'
              name='keyPass'
              onChange={(e) => setKeyPass(e.target.value)}
              value={keyPass}
            />
          </label>
          {errorKeyPass && <p className='missatge'>{errorKeyPass}</p>}
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
    </Container>
  );
};

export default Login;
