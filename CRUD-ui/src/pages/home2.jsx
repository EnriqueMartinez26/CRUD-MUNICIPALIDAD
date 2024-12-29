import { Link } from 'react-router-dom';

const Home2 = () => (
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
  </div>
);

export default Home2;
