import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usuario || !email || !password || !confirmPassword) {
      setError('Por favor complete todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setError('');

    try {
      const response = await axios.post('http://localhost:5002/api/register', {
        usuario,
        email,
        password,
      });
      if (response.data.success) {
        alert('Registro exitoso');
        navigate('/gestion'); // Redirige al apartado de gestión
      }
    } catch (err) {
      setError('Error en el registro, intente nuevamente');
      console.error('Error al registrar:', err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#3333', paddingBottom: '15%' }}>
      <main className="p-4 shadow-lg rounded border border-info" style={{ backgroundColor: '#ffffff', maxWidth: '500px', width: '90%' }}>
        <h2 className="mb-4 text-center" style={{ color: '#363636' }}>Registrarse</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit} className="text-start">
          <Form.Group controlId="usuario" className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
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
            Iniciar sesión
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Register;
