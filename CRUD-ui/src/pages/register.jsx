import { useState } from 'react';
import { process } from 'react-native-dotenv';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
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

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/register`, {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        alert('Registro exitoso');
        navigate('/login');
      } else {
        setError(response.data.error || 'Error en el registro, intente nuevamente');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Error en el registro, intente nuevamente');
    }
  };

  return (
    <div className="register-container">
      <main className="form-signin">
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

          <Form.Group controlId="confirmPassword" className="mb-3">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}

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