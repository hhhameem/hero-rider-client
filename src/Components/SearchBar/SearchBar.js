import React from "react";

const SearchBar = ({ setAgeRange, setCurrentPage, setSearchText }) => {
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(0);
    setAgeRange("0");
  };
  const handleFilterInput = (e) => {
    setAgeRange(e.target.value);
    setSearchText("");
    setCurrentPage(0);
  };
  return (
    <div className='row justify-content-center'>
      <div className='col-12 col-md-6'>
        <div className='row'>
          <div className='col-auto mb-2'>
            <input
              type='text'
              className='form-control'
              id='searchInput'
              placeholder='Name, email or password'
              onBlur={handleSearchInput}
            />
          </div>
          <div className='col-auto mb-2'>
            <button type='button' className='btn btn-primary mb-3'>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-6'>
        <div className='row'>
          <div className='col-auto mb-2'>
            <select className='form-select' onChange={handleFilterInput}>
              <option value='0'>Select Age range</option>
              <option value='1'>18-25 Years of Age</option>
              <option value='2'>26-35 Years of Age</option>
              <option value='3'>35+ Years of Age</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
