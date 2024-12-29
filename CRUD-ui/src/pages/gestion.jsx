  import Card from 'react-bootstrap/Card';
  import CardComponent from '../components/card1';

const Gestion = () => (
  <div>
    <h1 className="home-title">Bienvenido a la Gestión de Usuarios</h1>
    <Card bg="primary" text="white" style={{ width: '18rem' }} className="mb-2">
      <Card.Header>Gestión</Card.Header>
      <Card.Body>
        <Card.Title>Card Título</Card.Title>
        <Card.Text>
          Este es un ejemplo de una tarjeta con el color de fondo primary. Puedes
          personalizar su contenido según tus necesidades.
        </Card.Text>
      </Card.Body>
    </Card>
    <CardComponent></CardComponent>
  </div>
);

export default Gestion;
