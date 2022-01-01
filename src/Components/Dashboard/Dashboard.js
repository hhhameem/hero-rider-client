import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";

const Dashboard = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [userNumber, setUserNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [ageRange, setAgeRange] = useState("0");

  useEffect(() => {
    console.log(currentPage, searchText, ageRange);
    let url;
    if (searchText.length > 0) {
      url = `https://secure-coast-12143.herokuapp.com/get-all-user?pageNumber=${currentPage}&&searchText=${searchText}`;
      console.log(url);
    } else if (ageRange > "0") {
      url = `https://secure-coast-12143.herokuapp.com/get-all-user?pageNumber=${currentPage}&&ageRange=${ageRange}`;
      console.log(url);
    } else {
      url = `https://secure-coast-12143.herokuapp.com/get-all-user?pageNumber=${currentPage}`;
      console.log(url);
    }
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
        setAllUsers(response.data.result);
        const totalPage = Math.ceil(response.data.totalUsers / 10);
        setUserNumber(totalPage);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentPage, searchText, ageRange]);

  return (
    <div>
      <Navigation></Navigation>
      <h1>Registered Users List</h1>
      <div className=' container'>
        <SearchBar
          setSearchText={setSearchText}
          setCurrentPage={setCurrentPage}
          setAgeRange={setAgeRange}
        ></SearchBar>
        <div className='table-responsive'>
          <table className='table table-hover table-dark'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Phone</th>
                <th scope='col'>Age</th>
                <th scope='col'>Address</th>
                <th scope='col'>User Type</th>
                <th scope='col'>Profile Image</th>
                <th scope='col'>NID Image</th>
                <th scope='col'>DL Image</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((user) => (
                <tr key={user._id}>
                  <th scope='row'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value={user._id}
                        id='flexCheckDefault'
                      />
                    </div>
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.age}</td>
                  <td>{user.address}</td>
                  <td>{user.type}</td>
                  <td>
                    <a href={user.profilePicture} style={{ color: "white" }}>
                      {user.profilePicture.slice(0, 10)}
                    </a>
                  </td>
                  <td>
                    <a href={user.nidImage} style={{ color: "white" }}>
                      {user.nidImage.slice(0, 10)}
                    </a>
                  </td>
                  <td>
                    {user?.dlImage ? (
                      <a href={user.dlImage} style={{ color: "white" }}>
                        {user.dlImage.slice(0, 10)}
                      </a>
                    ) : (
                      "Not applicable"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <nav>
            <ul className='pagination pagination-sm'>
              {[...Array(userNumber).keys()].map((item) => (
                <li
                  className={
                    currentPage === item ? "page-item active" : "page-item"
                  }
                  aria-current='page'
                  key={item}
                  onClick={() => setCurrentPage(item)}
                >
                  <button className='page-link'>{item + 1}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
