import React from "react";
import { BiLogIn } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";

const UserLogin = () => {
  const { userLogin, handleUserEmailChange, handleUserPassChange } = useAuth();
  return (
    <div className='container fullHeight centerDiv'>
      <div className='col-12 col-md-5 linkContainer box-Shadow'>
        <h4>Login As An User</h4>
        <form className='formContainer'>
          <div className='form-floating mb-3'>
            <input
              type='email'
              name='email'
              className='form-control'
              id='floatingInput'
              placeholder='Your Email'
              onBlur={handleUserEmailChange}
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
              onBlur={handleUserPassChange}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          <div className='d-grid mt-3'>
            <button
              className='btn btn-primary'
              type='button'
              onClick={userLogin}
            >
              <BiLogIn style={{ marginTop: "-3px" }} /> Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
