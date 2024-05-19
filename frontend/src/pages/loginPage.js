import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";

import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/dist/js/adminlte.min.js";
  


const LoginPage = () => {

  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('');
  const [showAlert,setShowAlert] = useState(false);


  const triggerError = (message) => {
    setError(message);
    setShowAlert(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

     

      const response = await axios.post('http://localhost:8080/authenticate', {email,password});
      if (response.data.success === true){
        localStorage.setItem('user', JSON.stringify(response.data.user));
        const userRole = response.data.user.role;

        if(userRole === 'admin'){
          navigate('/dashboard');
        }else if(userRole === 'staff'){
          navigate('/staff');
        }
        console.log(response.data.user.role)
  
      }else{
        alert(response.data.message);
      }
       
      }catch (error){
        if (email == "" || password == ""){
          triggerError("Some area are not filled-up!!")
        }else{
          triggerError('Invalid Email password');
        }
      }
      
  }
  const handleRegistration = () => {
    navigate('/registration');
  };



  return (
   <div className="hold-transition login-page">
 <div className="login-box">
  {/* /.login-logo */}
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="../../index2.html" className="h1"><b>Inventory</b> System</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      {showAlert &&<div className="alert alert-danger alert-dismissible">
  <button type="button" className="close" onClick={()=>setShowAlert(false)} aria-hidden="true">×</button>
  <h5><i className="icon fas fa-ban" /> Alert!</h5>
  {error}
</div>
}
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email"    value={email}
        onChange={(e) => setEmail(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password"  value={password}
        onChange={(e) => setPassword(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
          {/* /.col */}
        </div>
        
      </form>
      {/* /.social-auth-links */}
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a onClick= {handleRegistration} className="text-center">Register a new membership</a>
      </p>
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
</div>

   </div>





  )
}

export default LoginPage