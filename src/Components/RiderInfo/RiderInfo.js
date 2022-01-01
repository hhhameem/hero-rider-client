import React from "react";
import LearningPackage from "../LearningPackage/LearningPackage";

const RiderInfo = ({ type, userData }) => {
  const { name, email, phone, nidImage, profilePicture, address } =
    userData || {};

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <div className='container centerDiv registration-form box-Shadow'>
        <div className='col-12 col-md-10 col-lg-8 mb-5'>
          <h1 className='mt-5 mb-5' style={{ color: "rgb(26, 126, 129)" }}>
            {type} Dashboard
          </h1>
          <div className='row g-2 g-md-4'>
            <div className='col-12 col-md-6 col-lg-4'>
              <div>
                <h4>Name: </h4>
                <h5>{name}</h5>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div>
                <h4>Email: </h4>
                <h5>{email}</h5>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div>
                <h4>Phone: </h4>
                <h5>{phone}</h5>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div>
                <h4>Address: </h4>
                <h5>{address}</h5>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div>
                <img
                  src={nidImage}
                  alt=''
                  style={{ height: "200px", width: "200px" }}
                />
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div>
                <img
                  src={profilePicture}
                  alt=''
                  style={{ height: "200px", width: "200px" }}
                />
              </div>
            </div>
            {type === "learner" && (
              <div className='row mt-5 mb-5 justify-content-center'>
                <LearningPackage></LearningPackage>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderInfo;
