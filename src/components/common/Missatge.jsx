import { Contenidor } from "./MissatgeStyled";

const Missatge = ({ text, error }) => (
  <Contenidor>
    <span>
      {text} {error}
    </span>
  </Contenidor>
);

export default Missatge;
