import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

const empleados = [
  { id: 1, nombre: 'Juan', apellido: 'Pérez', correo: 'juan.perez@hotmail.com', sueldo: 500000, telefono: '+54381 456-7890', area: 'Ventas' },
  { id: 2, nombre: 'María', apellido: 'Gómez', correo: 'maria.gomez@hotmail.com', sueldo: 600000, telefono: '+54381 765-4321', area: 'Marketing' },
  { id: 3, nombre: 'Carlos', apellido: 'Rodríguez', correo: 'carlos.rod@hotmail.com', sueldo: 550000, telefono: '+54381 123-7890', area: 'IT' },
  { id: 4, nombre: 'Ana', apellido: 'López', correo: 'ana.lopez@hotmail.com', sueldo: 580000, telefono: '+54381 654-0987', area: 'Recursos Humanos' },
  { id: 5, nombre: 'Laura', apellido: 'Martínez', correo: 'laura.martinez@hotmail.com', sueldo: 450000, telefono: '+54381 321-6547', area: 'Ventas' },
];

const Listado = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(3); // Número de empleados por página

  // Filtrar empleados según la búsqueda (incluyendo búsqueda por ID)
  const filteredEmployees = empleados.filter(empleado =>
    empleado.nombre.toLowerCase().includes(search.toLowerCase()) ||
    empleado.apellido.toLowerCase().includes(search.toLowerCase()) ||
    empleado.correo.toLowerCase().includes(search.toLowerCase()) ||
    empleado.id.toString().includes(search) // Añadir búsqueda por ID
  );

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Resetear la página cuando cambia la búsqueda
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center mb-4">
        <Col md={12}>
          <h1 className="text-center mb-4 fw-bold fst-italic">Listado de Empleados</h1>
          <Form.Control
            type="text"
            placeholder="Buscar por ID, nombre, apellido o correo"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={12}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Área</th>
                <th>Sueldo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.map((empleado) => (
                <tr key={empleado.id}>
                  {/* Mostrar el ID real del empleado */}
                  <td>{empleado.id}</td>
                  <td>{empleado.nombre}</td>
                  <td>{empleado.apellido}</td>
                  <td>{empleado.correo}</td>
                  <td>{empleado.telefono}</td>
                  <td>{empleado.area}</td>
                  <td>${empleado.sueldo}</td>
                  <td>
                    <Button variant="warning" size="sm" className="me-2">Editar</Button>
                    <Button variant="danger" size="sm">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={12}>
          <Pagination>
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default Listado;
