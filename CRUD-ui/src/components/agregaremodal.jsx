import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';

const AgregarEmpleado = ({ show, handleClose, setMensaje }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sueldo, setSueldo] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5002/api/empleados', {
        nombre,
        apellido,
        correo,
        telefono,
        sueldo,
        area
      });
      setMensaje('Empleado agregado exitosamente');
      setNombre('');
      setApellido('');
      setCorreo('');
      setTelefono('');
      setSueldo('');
      setArea('');
      handleClose();
    } catch (error) {
      setMensaje('Error al agregar el empleado');
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Empleado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="correo">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese el correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="telefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="sueldo">
            <Form.Label>Sueldo</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese el sueldo"
              value={sueldo}
              onChange={(e) => setSueldo(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="area">
            <Form.Label>Área</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el área"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Agregar Empleado
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

AgregarEmpleado.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  setMensaje: PropTypes.func.isRequired,
};

export default AgregarEmpleado;
