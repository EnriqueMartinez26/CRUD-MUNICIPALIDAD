import { Link } from 'react-router-dom';
import LOGO from '../images/LOGO.png';

const Header = () => (
  <header style={styles.header}>
    <Link to="/" style={styles.link}>
      <img src={LOGO} alt="Logo" style={styles.image} />
      <div style={styles.textContainer}>
        <h2 style={styles.h2}>CIUDAD</h2>
        <h1 style={styles.h1}>San Miguel</h1>
        <h1 style={styles.h1}>de Tucumán</h1>
      </div>
    </Link>
  </header>
);

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100px',
    backgroundColor: '#ffffff',
    margin: 0,
    padding: '0 10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  h2: {
    margin: 0,
    fontSize: '1.2em',
    color: '#333333',
    fontWeight: '700',  
    textAlign: 'left',
    width: '100%',
  },
  h1: {
    margin: 0,
    fontSize: '1.5em',
    color: '#333333',
    fontWeight: '800',  
    textAlign: 'center',
  },
  image: {
    marginRight: '15px',
    height: '70px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
};

export default Header;
