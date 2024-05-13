import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";

import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/dist/js/adminlte.min.js";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const RegisterPage = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
        fullName: "",
    });



      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userData.email || !userData.password) {
         console.log('Error');
        }
        try {
          // Make POST request to register endpoint
          const response = await axios.post('http://localhost:8080/register', userData);
          console.log(response.data); // Log response data (optional)
          // Redirect or handle success as needed
        } catch (error) {
          console.error('Error registering user:', error);
          // Handle error (e.g., display error message)
        }
      };

    const handleHasAccount = () =>{
        navigate('/');
    }




  return (
    <>
      <div className="hold-transition register-page">
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h2">
                <b>Inventory</b> System
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Register a new membership</p>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    name="fullName"
                    value={userData.fullName}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                      type="email"
                      name="email"
                    className="form-control"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        defaultValue="agree"
                      />
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              
              <a onClick={handleHasAccount} style={{cursor:'pointer'}} className="text-center">
                I already have a membership
              </a>
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
