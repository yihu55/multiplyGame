import { Container, Row, Col } from 'react-bootstrap';
import { Multiply } from './components/Multiply';
import Timer from './components/Timer';

const App = () => {
  return (
    <Container fluid justify-content-center>
      <Row>
        <Col>
          <Timer />
        </Col>
      </Row>
      <Row>
        <Multiply />
      </Row>
    </Container>
  );
};

export default App;
