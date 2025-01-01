import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import IMAGE from '../images/189-Preview-1.webp'; 

const Gestion = () => (
  <Container className="d-flex flex-column">
    <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Col md={6} lg={5} className="d-flex justify-content-center" style={{ marginBottom: '20%' }}>
        <Card className="border border-info" style={{ width: '40rem' }}> {/* Utilizando clases de Bootstrap */}
          <Card.Img variant="top" src={IMAGE} alt="Card image" />
          <Card.Header className="text-center" style={{ fontSize: '1.5em' }}>Administrar</Card.Header> 
          <Card.Body className="text-center">
            <Card.Title style={{ fontSize: '2em' }}>Editá la lista de empleados</Card.Title>
          </Card.Body>
          <Card.Body className="text-center">
            <Button variant="primary" href="/listado" style={{ fontSize: '1.2em', padding: '10px 20px' }}>Administrar</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Gestion;
