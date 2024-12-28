import { Link } from 'react-router-dom';

const Home = () => (
  <main style={styles.main}>
    <h2>Welcome to the Task Manager</h2>
    <p>Manage your tasks effectively and efficiently.</p>
    <div style={styles.buttons}>
      <Link to="/tasks" style={styles.link}>
        <button style={styles.button}>Go to Task Manager</button>
      </Link>
      <button style={styles.button}>Learn More</button>
    </div>
  </main>
);

const styles = {
  main: {
    padding: '2em',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '2em auto',
    maxWidth: '600px',
  },
  buttons: {
    marginTop: '2em',
    display: 'flex',
    justifyContent: 'center',
    gap: '1em',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '0.8em 1.2em',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
  link: {
    textDecoration: 'none',
  },
};

export default Home;
