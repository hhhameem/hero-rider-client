import React from "react";
import useAuth from "../../hooks/useAuth";
import "./AdminLogin.css";

const AdminLogin = () => {
  const { adminLogin, handleAdminEmailChange, handleAdminPassChange } =
    useAuth();

  return (
    <div className='container fullHeight centerDiv'>
      <div
        className='col-12 col-md-5 linkContainer'
        style={{ border: "1px solid red" }}
      >
        <h4>Login As An Admin</h4>
        <form className='formContainer'>
          <div className='form-floating mb-3'>
            <input
              type='email'
              name='email'
              className='form-control'
              id='floatingInput'
              placeholder='Your Email'
              onBlur={(e) => handleAdminEmailChange(e)}
            />
            <label htmlFor='floatingInput'>Email address</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              name='pass'
              className='form-control'
              id='floatingPassword'
              placeholder='Your Password'
              onBlur={(e) => handleAdminPassChange(e)}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          <div className='d-grid mt-3'>
            <button
              className='btn btn-primary'
              type='button'
              onClick={adminLogin}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
