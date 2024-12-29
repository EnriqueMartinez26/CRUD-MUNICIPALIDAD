import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Gestion = () => (
  <div className="home-container">
    <header className="home-header">
      <h1 className="home-title">Bienvenido a la Gestión de Usuarios</h1>
      <p className="home-subtitle">Accede a las funcionalidades de la aplicación.</p>
    </header>

    <div className="home-buttons">
      <Link to="/crear-usuario" className="home-link">
        <button className="home-button">Crear Usuario</button>
      </Link>
      <Link to="/listar-usuarios" className="home-link">
        <button className="home-button">Lista de Usuarios</button>
      </Link>
    </div>


    <div className="home-card">
      <Card>
        <Card.Header as="h5" className="bg-secondary text-white">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default Gestion;
