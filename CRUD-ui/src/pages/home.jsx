import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-page">
    <main className="home-main">
      <h1 className="home-title">Bienvenido a la Municipalidad de SMT</h1>
      <p className="home-subtitle">PROYECTO - CRUD</p>
      <div className="home-buttons">
        <Link to="/login" className="home-link">
          <button className="home-button">Iniciar Sesión</button>
        </Link>
        <Link to="/registro" className="home-link">
          <button className="home-button">Registrarse</button>
        </Link>
      </div>
    </main>
  </div>
);

export default Home;
