import { useValidation } from "../../lib/hooks/useValidation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./SignupStyled";
import { publish } from "../../lib/utils/cutomEvents";

const SignUp = () => {
  const [user, setUser] = useState("");
  const [keyPass, setKeyPass] = useState("");
  const id = "signUp";
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
        <h2>Sign Up</h2>
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
          <button name='submit' id='submit'>
            Create User
          </button>
        </form>
        <div>
          <p>Already have an account?</p>
          <button
            onClick={() => navega(process.env.PUBLIC_URL + "/auth/login")}
          >
            Log In
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
