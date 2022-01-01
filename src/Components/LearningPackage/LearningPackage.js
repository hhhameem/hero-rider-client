import React from "react";
import { Link } from "react-router-dom";
import "./LearningPackage.css";

const LearningPackage = () => {
  return (
    <>
      <h1 className='mt-5'>We Have Two offer for you.</h1>
      <h6 className='mb-5'>You can choose between this two</h6>
      <div className='col-10 col-md-4 mb-2'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Car Driving Teaching</h5>
            <p className='card-text'>
              We offer Car Driving offer at your convenient time.
            </p>
          </div>
          <div className='card-footer cardFooter'>
            <h5 className='text-muted'>$200</h5>
            <Link to='/user-dashboard/pay/2'>
              <button type='button' className='btn btn-dark'>
                Pay $200
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='col-10 col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Bike Driving Teaching</h5>
            <p className='card-text'>
              We offer Bike Driving offer at your convenient time.
            </p>
          </div>
          <div className='card-footer cardFooter'>
            <h5 className='text-muted'>$100</h5>
            <Link to='/user-dashboard/pay/1'>
              <button type='button' className='btn btn-dark'>
                Pay $100
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningPackage;
