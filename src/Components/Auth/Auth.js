import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  return (
    <div className='container fullHeight centerDiv'>
      <div
        className='col-12 col-md-6 linkContainer'
        style={{ border: "1px solid red" }}
      >
        <h4>
          <Link to='/adminlogin'>Login As An Admin</Link>
        </h4>
        <h4>
          <Link to='/rider-registration'>Register a a Rider</Link>
        </h4>
        <h4>
          <Link to='/learner-registration'>Register as a Learner</Link>
        </h4>
      </div>
    </div>
  );
};

export default Auth;
