import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name || !email || !password || !confirmPassword) {
      setError('Por favor complete todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setError('');
    setSuccess('Registro exitoso');

    console.log("Usuario registrado:", { name, email, password });

 
    setTimeout(() => navigate("/login"), 2000);
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.h2}>Registrarse</h2>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
        
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="confirmPassword" style={styles.label}>Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>Registrarse</button>
        <p style={styles.text}>
          ¿Ya tienes una cuenta?{' '}
          <span style={styles.link} onClick={handleLoginRedirect}>
            Inicia sesión
          </span>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  h2: {
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  label: {
    fontSize: '1em',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    marginTop: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1em',
  },
  button: {
    padding: '0.8rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.2em',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  error: {
    color: 'red',
    fontSize: '1em',
    marginBottom: '1rem',
  },
  success: {
    color: 'green',
    fontSize: '1em',
    marginBottom: '1rem',
  },
  text: {
    marginTop: '1rem',
    fontSize: '0.9em',
    textAlign: 'center',
    color: '#333',
  },
  link: {
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Register;
