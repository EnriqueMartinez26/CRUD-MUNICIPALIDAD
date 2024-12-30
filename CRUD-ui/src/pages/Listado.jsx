import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Container,
  Row,
  Col,
  Form,
  Pagination,
} from "react-bootstrap";
import {
  getEmpleados,
  deleteEmpleado,
} from "../../../CRUD-sv/services/empleadoService";
import AgregarEmpleado from "../components/agregaremodal";
import EditarEmpleado from "../components/editaremodal";

const Listado = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(3);
  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [showModalAgregar, setShowModalAgregar] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  const filteredEmployees = empleados.filter(
    (empleado) =>
      empleado.nombre.toLowerCase().includes(search.toLowerCase()) ||
      empleado.apellido.toLowerCase().includes(search.toLowerCase()) ||
      empleado.correo.toLowerCase().includes(search.toLowerCase()) ||
      empleado.id.toString().includes(search)
  );

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

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
        setError("Error al obtener los empleados");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmpleados();
  }, []);

  const handleCloseModalAgregar = () => setShowModalAgregar(false);
  const handleShowModalAgregar = () => setShowModalAgregar(true);

  const handleCloseModalEditar = () => {
    setShowModalEditar(false);
    setEmpleadoSeleccionado(null);
  };

  const handleShowModalEditar = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setShowModalEditar(true);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmpleado(id);
      setEmpleados(empleados.filter((empleado) => empleado.id !== id));
      setMensaje("Empleado eliminado correctamente");
    } catch (err) {
      setError("Error al eliminar el empleado");
      console.error(err);
    }
  };

  if (loading) {
    return <div>Cargando empleados...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container
      fluid
      className="d-flex flex-column min-vh-100 justify-content-center align-items-center"
    >
      <main className="flex-grow-1 w-100">
        <Row className="justify-content-center mb-4">
          <Col md={12} className="pt-5">
            <h1 className="text-center mb-4 fw-bold fst-italic">
              Listado de Empleados
            </h1>
            <Form.Control
              type="text"
              placeholder="Buscar por ID, nombre, apellido o correo"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-25 mx-auto"
            />
          </Col>
        </Row>

        {/* Alert moved above the table with custom styling */}
        {mensaje && (
          <div className="alert alert-info mt-4 w-50 text-center mx-auto">
            {mensaje}
          </div>
        )}

        <Row className="justify-content-center">
          <Col md={12}>
            <Table striped bordered hover responsive className="text-center">
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th className="text-center">Nombre</th>
                  <th className="text-center">Apellido</th>
                  <th className="text-center">Correo</th>
                  <th className="text-center">Teléfono</th>
                  <th className="text-center">Área</th>
                  <th className="text-center">Sueldo</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentEmployees.map((empleado) => (
                  <tr key={empleado.id}>
                    <td className="text-center">{empleado.id}</td>
                    <td className="text-center">{empleado.nombre}</td>
                    <td className="text-center">{empleado.apellido}</td>
                    <td className="text-center">{empleado.correo}</td>
                    <td className="text-center">{empleado.telefono}</td>
                    <td className="text-center">{empleado.area}</td>
                    <td className="text-center">${empleado.sueldo}</td>
                    <td className="text-center">
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleShowModalEditar(empleado)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(empleado.id)}
                      >
                        Eliminar
                      </Button>
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
          <Col md={12} className="d-flex justify-content-center gap-3">
            <Button variant="dark" onClick={handleRefresh}>
              Refrescar
            </Button>
            <Button variant="success" onClick={handleShowModalAgregar}>
              Añadir empleado
            </Button>
            <Button variant="secondary" onClick={handleGoBack}>
              Volver
            </Button>
          </Col>
        </Row>
        <AgregarEmpleado
          show={showModalAgregar}
          handleClose={handleCloseModalAgregar}
          setMensaje={setMensaje}
        />
        <EditarEmpleado
          show={showModalEditar}
          handleClose={handleCloseModalEditar}
          empleado={empleadoSeleccionado}
          setEmpleados={setEmpleados}
          empleados={empleados}
          setMensaje={setMensaje}
        />
      </main>
    </Container>
  );
};

export default Listado;
