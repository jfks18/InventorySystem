import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes,Route} from 'react-router-dom';


import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import Dashboard from './pages/dashboard';





function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<LoginPage/>}/>
      <Route path='/registration' element= {<RegisterPage/>}/>
      <Route path='/dashboard' element = {<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
