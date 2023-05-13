import { useAutenticacioContext } from "../context/autentitcacioContext";
import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
  const { usuariLoguejat } = useAutenticacioContext();

  if (usuariLoguejat !== null) {
    return <Navigate to={process.env.PUBLIC_URL + "/starships"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Public;
