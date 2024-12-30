import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Gestion = () => (
  <Container className="mt-5">
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <h1 className="text-center mb-4 fw-bold fst-italic">Gestión</h1>
      </Col>
    </Row>

    <Row className="justify-content-center">
      <Col md={6} lg={5}>
        <Card border="primary">
          <Card.Header>Listado</Card.Header>
          <Card.Body>
            <Card.Title>Visualizá una lista con los empleados ya registrados</Card.Title>
            <Card.Text>
              (No editable)
            </Card.Text>
            <Button 
              variant="primary" 
              href="/listado" 
            >
              Ir a listado
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} lg={5}>
        <Card border="primary">
          <Card.Header>Administrar</Card.Header>
          <Card.Body>
            <Card.Title>Editá la lista de empleados</Card.Title>
            <Card.Text>
              (Requiere iniciar como administrador)
            </Card.Text>
            <Button 
              variant="success" 
              href="/listado" 
            >
              Ir a administrar
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Gestion;
