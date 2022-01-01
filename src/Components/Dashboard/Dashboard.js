import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";

const Dashboard = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [userNumber, setUserNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [ageRange, setAgeRange] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-all-user?pageNumber=${currentPage}`)
      .then(function (response) {
        console.log(response.data);
        setAllUsers(response.data.result);
        const totalPage = Math.ceil(response.data.totalUsers / 1);
        setUserNumber(totalPage);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentPage]);

  const handle

  return (
    <div>
      <Navigation></Navigation>
      <h1>Registered Users List</h1>
      <div className=' container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            <div className='row'>
              <div class='col-auto'>
                <input
                  type='text'
                  class='form-control'
                  id='searchInput'
                  placeholder='Name, email or password'
                />
              </div>
              <div class='col-auto'>
                <button type='button' class='btn btn-primary mb-3'>
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='row'>
              <div class='col-auto'>
                <select class='form-select' aria-label='Default select example'>
                  <option value='0'>Select Age range</option>
                  <option value='1'>18-25 Years of Age</option>
                  <option value='2'>35-30 Years of Age</option>
                  <option value='3'>30+ Years of Age</option>
                </select>
              </div>
              <div class='col-auto'>
                <button type='button' class='btn btn-primary mb-3'>
                  Filter by Age
                </button>
              </div>
            </div>
          </div>
        </div>

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
