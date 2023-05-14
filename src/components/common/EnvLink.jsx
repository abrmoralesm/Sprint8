import { Link } from "react-router-dom";
import { Container } from "./EnvLinkStyled";

const EnvLink = ({ to, ...props }) => (
  <Container className='link'>
    <Link {...props} to={process.env.PUBLIC_URL + to} />
  </Container>
);

export default EnvLink;
