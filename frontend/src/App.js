import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes,Route} from 'react-router-dom';


import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import Dashboard from './pages/dashboard';
import StaffPage from './pages/staffPage';
import ProtectedRoute from './components/protectedRoute';
import InventoryPage from './pages/AdminPage/inventoryPage';
import ProductPage from './pages/AdminPage/productPage';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<LoginPage/>}/>
      <Route path='/registration' element= {<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
