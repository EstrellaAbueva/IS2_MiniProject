import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu/Menu.js';
import SingleText from './Components/SingleText/SingleText.js';
import FileText from './Components/FileText/FileText';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="parent-bg">
        <NavBar />
        <div className="display">
          <Routes>
            <Route path= "/" element={<Menu />} />
            <Route path= "/single-text" element={<SingleText />} />
            <Route path= "/file-text" element={<FileText />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
