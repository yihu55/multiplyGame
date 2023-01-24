import { Container, Row, Col } from "react-bootstrap";
import SelectSymbol from "./components/SelectSymbol";
import Timer from "./components/Timer";

const App = () => {
  return (
    <Container>
      <Row>
        <Timer />
      </Row>
      <Row>
        <SelectSymbol />
      </Row>
    </Container>
  );
};

export default App;
