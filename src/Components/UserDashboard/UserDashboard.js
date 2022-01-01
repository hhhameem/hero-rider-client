import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Navigation/Navigation";
import RiderInfo from "../RiderInfo/RiderInfo";

const UserDashboard = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState([]);
  const [fetched, setFetched] = useState(false);

  console.log(user.email);
  console.log(userData);
  useEffect(() => {
    console.log("fetching", user.email);
    axios
      .get(
        `https://secure-coast-12143.herokuapp.com/get-user?email=${user.email}`
      )
      .then(function (response) {
        setUserData(response.data);
        if (response.data === null) {
          setFetched(!fetched);
        }
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user.email, fetched]);

  return (
    <>
      <Navigation></Navigation>
      <RiderInfo type={userData?.type} userData={userData}></RiderInfo>
    </>
  );
};

export default UserDashboard;
