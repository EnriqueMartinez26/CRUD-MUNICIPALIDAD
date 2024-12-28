import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homeome';
import TaskManager from './pages/taskmanagerr';
import Header from './components/header';
import Footer from './components/footerooter';

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