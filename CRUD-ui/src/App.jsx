import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TaskManager from './pages/tasks';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;