const Header = () => (
    <header style={styles.header}>
      <h1 style={styles.h1}>Task Manager</h1>
    </header>
  );
  
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', 
      height: '100px', 
      backgroundColor: '#007bff',
      margin: 0,
      padding: 0, 
    },
    h1: {
      margin: 0,
      fontSize: '2.5em',
      color: '#ffffff',
    },
  };
  
  export default Header;
  