import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Loader from './components/Loader';
import { useRef, useState } from 'react';
import background from './components/assets/images/1-grain.jpg';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const backgroundRef = useRef<HTMLImageElement>(null)

  const onBackgroundLoad = () => {
    backgroundRef.current!.style.display = 'block';
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }
  
  return (
    <div className="App">
      <img className='background' src={background} alt="background" onLoad={onBackgroundLoad} ref={backgroundRef}/>
      {isLoading ? <Loader /> : <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/work' element={<Work/>} />
      </Routes>}
    </div>
  );
}

export default App;
