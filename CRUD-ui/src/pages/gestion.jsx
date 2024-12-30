import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
  <footer className="text-center py-3 mt-4 bg-light w-100">
    <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
  </footer>
);

const Gestion = () => (
  <Container className="d-flex flex-column min-vh-100">
    <Row className="justify-content-center flex-grow-1">
      <Col md={8} lg={6}>
        <h1 className="text-center mb-4 fw-bold fst-italic">Gestión</h1>
      </Col>
    </Row>

    <Row className="justify-content-center flex-grow-1">
      <Col md={6} lg={5}>
        <Card border="info" className="mb-4">
          <Card.Header>Listado</Card.Header>
          <Card.Body>
            <Card.Title>Visualizá una lista con los empleados ya registrados</Card.Title>
            <Card.Text>(No editable)</Card.Text>
            <Button variant="primary" href="/listado">Listado</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} lg={5}>
        <Card border="primary" className="mb-4">
          <Card.Header>Administrar</Card.Header>
          <Card.Body>
            <Card.Title>Editá la lista de empleados</Card.Title>
            <Card.Text>(Requiere iniciar como administrador)</Card.Text>
            <Button variant="success" href="/listado">Administrar</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Footer />
  </Container>
);

export default Gestion;
