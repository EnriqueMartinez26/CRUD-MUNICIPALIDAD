import { Link } from 'react-router-dom';
import LOGO from '../images/LOGO.png';

const Header = () => (
    <header style={styles.header}>
      <Link to="/">
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
    height: '100px',
    backgroundColor: '#ffffff',
    margin: 0,
    padding: 0,
  },
  h1: {
    margin: 0,
    fontSize: '2.5em',
    color: '#333333',
  },
  image: {
    marginRight: '10px',
    height: '60px',
    cursor: 'pointer',  
  },
};

export default Header;
