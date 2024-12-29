import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TaskManager from './pages/tasks';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/login';
import Register from './pages/register';
import Home2 from './pages/home2';
import CrearUsuario from './pages/crearusuario';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/home2' element={<Home2 />} />
        <Route path='crearusuario' element={<CrearUsuario />} />  
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;