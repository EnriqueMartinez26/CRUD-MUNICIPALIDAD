import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Modal, Button, Form } from "react-bootstrap";
import { actualizarEmpleado } from "../../../CRUD-sv/services/empleadoService";

const EditarEmpleado = ({ show, handleClose, empleado, setMensaje }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    area: "",
    sueldo: 0,
  });

  useEffect(() => {
    if (empleado) {
      setFormData({
        nombre: empleado.nombre,
        apellido: empleado.apellido,
        correo: empleado.correo,
        telefono: empleado.telefono,
        area: empleado.area,
        sueldo: empleado.sueldo,
      });
    }
  }, [empleado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await actualizarEmpleado(empleado.id, formData);
      setMensaje("Empleado actualizado correctamente");
      handleClose();
    } catch (error) {
      console.error("Error al actualizar el empleado", error);
      setMensaje("Error al actualizar el empleado");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Empleado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCorreo">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formArea">
            <Form.Label>Área</Form.Label>
            <Form.Control
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formSueldo">
            <Form.Label>Sueldo</Form.Label>
            <Form.Control
              type="number"
              name="sueldo"
              value={formData.sueldo}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Actualizar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

EditarEmpleado.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  empleado: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    correo: PropTypes.string,
    telefono: PropTypes.string,
    area: PropTypes.string,
    sueldo: PropTypes.number,
  }),
  setMensaje: PropTypes.func.isRequired,
};

export default EditarEmpleado;