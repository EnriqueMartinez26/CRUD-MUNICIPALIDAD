import { Link } from 'react-router-dom';
import { Button, Card} from 'react-bootstrap';
import CRUD from '../images/CRUD.jpg';

const Gestion = () => (
  <div className="d-flex justify-content-center align-items-center vh-100" style={{ transform: 'translateY(-5%)' }}>
    <Card style={{ width: '90%', maxWidth: '800px' }} className="shadow-lg rounded border border-info">
      <Card.Img variant="top" src={CRUD} style={{ width: '100%', height: 'auto' }} />
      <Card.Body>
        <Card.Title className="text-center mb-4" style={{ color: '#363636', fontSize: '1.75rem' }}>
          Administra los empleados registrados en el sistema
        </Card.Title>
        <div className="d-flex justify-content-center gap-4">
          <Link to="/listado" className="text-decoration-none">
            <Button variant="primary" size="lg">Administrar Empleados</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  </div>
);

export default Gestion;
