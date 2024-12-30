import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

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
      const response = await axios.post('http://localhost:5002/login', {
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
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#3333', paddingBottom: '15%' }}>
      <main className="p-4 shadow-lg rounded border border-info" style={{ backgroundColor: '#ffffff', maxWidth: '500px', width: '90%' }}>
        <h2 className="mb-4 text-center" style={{ color: '#363636' }}>Iniciar sesión</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit} className="text-start">
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
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
