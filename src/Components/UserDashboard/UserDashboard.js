import React from "react";
import LearningPackage from "../LearningPackage/LearningPackage";
import Navigation from "../Navigation/Navigation";
import RiderInfo from "../RiderInfo/RiderInfo";

const UserDashboard = () => {
  const usertype = localStorage.getItem("userLoggedIn");
  return (
    <div>
      <Navigation></Navigation>
      {usertype === "rider" ? (
        <RiderInfo></RiderInfo>
      ) : (
        <LearningPackage></LearningPackage>
      )}
    </div>
  );
};

export default UserDashboard;
