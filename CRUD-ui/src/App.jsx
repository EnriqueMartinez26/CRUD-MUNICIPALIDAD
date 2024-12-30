import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TaskManager from './pages/tasks';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/login';
import Register from './pages/register';
import Gestion from './pages/gestion';
import CrearUsuario from './pages/crearusuario';
import ListarUsuarios from './pages/listarusuarios';
import Listado from './pages/Listado';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/gestion' element={<Gestion />} />
        <Route path='/crear-usuario' element={<CrearUsuario />} />  
        <Route path='/listar-usuarios' element={<ListarUsuarios />} />
        <Route path='/listado' element={<Listado />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;