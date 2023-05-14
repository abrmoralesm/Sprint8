import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Starships from "../pages/Starships/Starships";
import Starship from "../pages/Starship/Starship";
import Error from "../pages/Error/Error";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Logout from "../components/Logout/Logout";
import Public from "./Public";
import Privat from "./Privat";

const Router = () => {
  return (
    <Routes>
      <Route path={process.env.PUBLIC_URL}>
        <Route path='' element={<Public />}>
          <Route index element={<Home />} />
          <Route path='auth/login' element={<Login />} />
          <Route path='auth/signup' element={<Signup />} />
          <Route path='*' element={<Error />} />
        </Route>

        <Route path='starships' element={<Privat />}>
          <Route index element={<Starships />} />
          <Route path='starship/:starshipId' element={<Starship />} />
          <Route path='auth/logout' element={<Logout />} />
        </Route>
      </Route>
    </Routes>
  );
};


export default Router;
