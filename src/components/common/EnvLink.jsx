import { Link } from "react-router-dom";

const EnvLink = ({ to, ...props }) => (
  <Link {...props} to={process.env.PUBLIC_URL + to} />
);

export default EnvLink;
