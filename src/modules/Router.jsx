import { Routes, Route } from "react-router-dom";
import Starships from "../pages/Starships/Starships";
import Starship from "../pages/Starship/Starship";
import Error from "../pages/Error/Error";

const Router = () => (
  <Routes>
    <Route path={process.env.PUBLIC_URL}>
      <Route path="" element={<Starships />} />
      <Route path="starships/:starshipId" element={<Starship />} />
      <Route path="*" element={<Error />} />
    </Route>
  </Routes>
);

export default Router;
