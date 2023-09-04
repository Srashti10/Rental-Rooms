
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Signup from './components/SignUp';
import Login from './components/Login';
import AddRentProperty from './components/AddRentProperty';
import BrowseSpace from './components/BrowseSpace';
import ManageSpace from './components/ManageSpaces';
import { UserProvider } from './components/UserContext';




function App() {
  return (
    <div >
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Signup />} path='signup' />
            <Route element={<Login />} path='login' />
            <Route element={<AddRentProperty />} path='addrentproperty' />
            <Route element={<BrowseSpace />} path='browsespace' />
            <Route element={<ManageSpace />} path='managespace' />
          </Routes>
        </UserProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
