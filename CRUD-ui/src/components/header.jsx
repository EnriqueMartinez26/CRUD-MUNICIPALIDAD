import { Link } from 'react-router-dom';
import LOGO from '../images/LOGO.png';

const Header = () => (
    <header style={styles.header}>
      <Link to="/" style={styles.link}>
        <img src={LOGO} alt="Logo" style={styles.image} />
      </Link>
      <h1 style={styles.h1}>CiDiTuc</h1>
    </header>
);

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '120px', 
    backgroundColor: '#ffffff',
    margin: 0,
    padding: '0 20px', // 
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  h1: {
    margin: 0,
    fontSize: '3em', 
    color: '#333333',
    fontWeight: 'bold',
  },
  image: {
    marginRight: '15px',
    height: '80px', //
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
  },
};

export default Header;
