import logo from './logo.svg';
import './App.css';
import NavBAr from './components/NavBAr';
import Home from './components/Home';
import Dashboard from './Dashboard'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>




    </Routes>
    
    
    
    
    
    
    
    </BrowserRouter>
    </>

    
  );
}

export default App;
