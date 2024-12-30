import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => (
  <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#3333' }}>
    <main className="text-center p-5 shadow-lg rounded" style={{ backgroundColor: '#ffffff', maxWidth: '800px', width: '90%' }}>
      <h1 className="display-4 mb-4 fw-bold" style={{ color: '#363636' }}>Bienvenido a la Municipalidad de SMT</h1>
      <p className="lead mb-4" style={{ color: '#333333' }}>PROYECTO - CRUD</p>
      <div className="d-flex justify-content-center gap-4">
        <Link to="/login" className="text-decoration-none">
          <Button variant="primary" size="lg">Iniciar Sesión</Button>
        </Link>
        <Link to="/register" className="text-decoration-none">
          <Button variant="primary" size="lg">Registrarse</Button>
        </Link>
      </div>
    </main>
  </div>
);

export default Home;
