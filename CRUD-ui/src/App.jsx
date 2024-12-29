import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TaskManager from './pages/tasks';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/login';
import Register from './pages/register';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;