import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
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
      const response = await axios.post('http://localhost:5002/api/login', {
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
    <Container className="d-flex justify-content-center align-items-start my-5">
      <Row className="justify-content-center w-100">
      <Col xs={12} sm={10} md={6} lg={5}>
          <div className="p-4 shadow-lg rounded bg-white">
            <h2 className="text-center mb-4" style={{ color: '#333' }}>Iniciar sesión</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
