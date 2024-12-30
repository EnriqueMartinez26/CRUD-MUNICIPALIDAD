import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor complete todos los campos');
      return;
    }

    setError('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/login`, {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert('Iniciado sesión con éxito');
        navigate('/gestion');
      }
    } catch (err) {
      setError('Credenciales incorrectas o error en el servidor');
      console.error('Error al iniciar sesión:', err);
    }
  };

  return (
    <div className="login-container">
      <main className="form-signin">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}

          <Button variant="primary" type="submit" size="lg" className="w-100">
            Iniciar sesión
          </Button>
        </Form>

        <p className="mt-3 text-center">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" style={{ textDecoration: 'none', color: '#007bff' }}>
            Registrarse
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Login;