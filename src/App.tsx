import './App.css';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import About from './components/About';
import Work from './components/Work';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
