import { Container } from "./MessgeStyled";

const Message = ({ text, error }) => (
  <Container>
    <span>
      {text} {error}
    </span>
  </Container>
);

export default Message;
