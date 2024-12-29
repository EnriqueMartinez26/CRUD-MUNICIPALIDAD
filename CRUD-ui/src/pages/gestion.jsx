import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Gestion = () => (
  <Container className="mt-5">
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <h1 className="text-center mb-4">Bienvenido a la Gestión de Usuarios</h1>
        <Card className="shadow">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Gestion;
