import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu/Menu.js';
import SingleText from './Components/SingleText/SingleText.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
