import { Link } from 'react-router-dom';

const Home = () => (
  <main>
    <h2>Bienvenido a la Municipalidad de SMT</h2>
    <p>PROYECTO - CRUD</p>
    <div style={styles.buttons}>
      <Link to="/iniciarsesion" style={styles.link}>
        <button style={styles.button}>Iniciar Sesión</button>
      </Link>
      <Link to="/registro" style={styles.link}>
      <button style={styles.button}>Registrarse</button>
      </Link>
    </div>
  </main>
);

const styles = {
  h2: {
    color: '#000000',
    marginBottom: '0.5em',
  },
  p: {
    color: '#000000',
    fontSize: '1.2em',
    margin: '0.5em 0',
  },
  buttons: {
    marginTop: '1em',
    display: 'flex',
    justifyContent: 'center',
    gap: '1em',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '0.6em 1em',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
};

export default Home;
