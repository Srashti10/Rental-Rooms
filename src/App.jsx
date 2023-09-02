
import './App.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div >
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route element = { <Home /> } path='home' />
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
