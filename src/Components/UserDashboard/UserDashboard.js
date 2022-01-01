import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Navigation/Navigation";
import RiderInfo from "../RiderInfo/RiderInfo";

const UserDashboard = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState([]);

  console.log(user.email);
  console.log(userData);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-user?email=${user.email}`)
      .then(function (response) {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user.email, userData?.type]);

  return (
    <>
      <Navigation></Navigation>
      <RiderInfo type={userData?.type} userData={userData}></RiderInfo>
    </>
  );
};

export default UserDashboard;
