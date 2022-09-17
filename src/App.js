import { Container, Row, Col } from 'react-bootstrap';
import { Addition } from './components/Addition';
import { Multiply } from './components/Multiply';
import SelectSymbol from './components/SelectSymbol';
import Timer from './components/Timer';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Timer />
          <SelectSymbol />
        </Col>
      </Row>
      <Row>{/* <Multiply /> */}</Row>
    </Container>
  );
};

export default App;
