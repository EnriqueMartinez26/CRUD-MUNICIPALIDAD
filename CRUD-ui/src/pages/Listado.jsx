import { useState, useEffect } from 'react';
import { Table, Button, Container, Row, Col, Form, Pagination } from 'react-bootstrap';
import { getEmpleados } from '../../../CRUD-sv/services/empleadoService'; 
import AgregarEmpleado from '../components/agregaremodal';

const Listado = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(3);
  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [mensaje, setMensaje] = useState(''); 
  const [showModal, setShowModal] = useState(false); 

  const filteredEmployees = empleados.filter(empleado =>
    empleado.nombre.toLowerCase().includes(search.toLowerCase()) ||
    empleado.apellido.toLowerCase().includes(search.toLowerCase()) ||
    empleado.correo.toLowerCase().includes(search.toLowerCase()) ||
    empleado.id.toString().includes(search)
  );

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const data = await getEmpleados();
        setEmpleados(data);
      } catch (err) {
        setError('Error al obtener los empleados');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmpleados();
  }, []);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleGoBack = () => {
    window.history.back(); 
  };

  if (loading) {
    return <div>Cargando empleados...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container fluid className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
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
        <Row className="justify-content-center mt-4">
          <Col md={12} className="d-flex justify-content-between">
            <Button variant="success" onClick={handleShowModal}>Añadir empleado</Button>
            <Button variant="secondary" onClick={handleGoBack}>Volver</Button>
          </Col>
        </Row>
        <AgregarEmpleado
          show={showModal}
          handleClose={handleCloseModal}
          setMensaje={setMensaje} 
        />
        {mensaje && <div className="alert alert-info mt-4">{mensaje}</div>} 
      </main>
    </Container>
  );
};

export default Listado;
