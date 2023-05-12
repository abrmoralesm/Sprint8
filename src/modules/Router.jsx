import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Starships from "../pages/Starships/Starships";
import Starship from "../pages/Starship/Starship";
import Error from "../pages/Error/Error";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Logout from "../components/Logout/Logout";

const Router = () => {
  return (
    <Routes>
      <Route path={process.env.PUBLIC_URL}>
        <Route path='' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='logout' element={<Logout />} />
        <Route path='signup' element={<Signup />} />
        <Route path='starships' element={<Starships />} />
        <Route path='starships/:starshipId' element={<Starship />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Router;
