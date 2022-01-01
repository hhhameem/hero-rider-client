import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAdminPanelSettings, MdPerson } from "react-icons/md";
import { BiCycling, BiLogIn } from "react-icons/bi";
import "./Auth.css";

const Auth = () => {
  return (
    <div className='container fullHeight centerDiv'>
      <div className='col-12 col-md-6 linkContainer box-Shadow'>
        <div className='p-3'>
          <h4 className='h4'>
            <Link to='/admin-login'>
              <MdOutlineAdminPanelSettings /> Login As An Admin
            </Link>
          </h4>
          <h4 className='h4'>
            <Link to='/rider-registration'>
              <BiCycling /> Register a a Rider
            </Link>
          </h4>
          <h4 className='h4'>
            <Link to='/learner-registration'>
              <MdPerson /> Register as a Learner
            </Link>
          </h4>
          <h4 className='h4'>
            <Link to='/user-login'>
              <BiLogIn /> Login
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Auth;
