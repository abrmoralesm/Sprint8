import { Link } from "react-router-dom";
import { Contenidor } from "./EnvLinkStyled"

const EnvLink = ({ to, ...props }) => (
  <Contenidor>
    <Link {...props} to={process.env.PUBLIC_URL + to}/>
  </Contenidor>
);

export default EnvLink;
