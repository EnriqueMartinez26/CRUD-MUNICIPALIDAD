import { Link } from 'react-router-dom';

const Home = () => (
  <div style={styles.homePage}>
    <main style={styles.homeMain}>
      <h1 style={styles.homeTitle}>Bienvenido a la Municipalidad de SMT</h1>
      <p style={styles.homeSubtitle}>PROYECTO - CRUD</p>
      <div style={styles.homeButtons}>
        <Link to="/login" style={styles.homeLink}>
          <button style={styles.homeButton}>Iniciar Sesión</button>
        </Link>
        <Link to="/register" style={styles.homeLink}>
          <button style={styles.homeButton}>Registrarse</button>
        </Link>
      </div>
    </main>
  </div>
);

const styles = {
  homePage: {
    backgroundColor: '#e0f7fa',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  homeMain: {
    backgroundColor: '#ffffff',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    maxWidth: '800px',
    width: '90%',
  },
  homeTitle: {
    color: '#333333',
    fontSize: '2.5em',
    marginBottom: '0.5em',
  },
  homeSubtitle: {
    color: '#333333',
    fontSize: '1.4em',
    margin: '1em 0',
  },
  homeButtons: {
    marginTop: '2em',
    display: 'flex',
    justifyContent: 'center',
    gap: '2em',
  },
  homeLink: {
    textDecoration: 'none',
  },
  homeButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '0.8em 1.5em',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.2em',
    transition: 'background-color 0.3s ease',
  },
  homeButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Home;
