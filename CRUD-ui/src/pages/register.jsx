import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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
  
    try {
      await axios.post('http://localhost:5002/api/register', {
        name,
        email,
        password,
      });
  
      setSuccess('Usuario registrado exitosamente');
      setTimeout(() => navigate("/login"), 2000); 
    } catch (err) {
      setError('Error al registrar el usuario. Inténtalo nuevamente.');
      console.error(err);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-start my-5">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} md={6} lg={5}>
          <div className="p-4 shadow-lg rounded bg-white">
            <h2 className="text-center mb-4" style={{ color: '#333' }}>Registrarse</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

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

              <Form.Group controlId="confirmPassword" className="mb-3">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" size="lg" className="w-100">
                Registrarse
              </Button>
            </Form>

            <p className="mt-3 text-center">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" style={{ textDecoration: 'none', color: '#007bff' }}>
                Inicia sesión
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
