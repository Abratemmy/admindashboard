import React from 'react';
import './filter.css';
import {TiArrowSortedDown} from "react-icons/ti";
import {RiArrowGoForwardFill} from "react-icons/ri";
import {FiSearch} from "react-icons/fi"

function Filter() {
  return (
    <form>
      <div className='filterpage'>
          <div className='left'>
              <div className='filtersearch filterSelect'><span><FiSearch className='icon1'/></span>
                <input type="text" placeholder="Search for username, or something..." className='input' />
              </div>
              <div className='filter-content'>
                <div className='text filterSelect'>
                <select name="date" id="date">
                  <option value="date">Date</option>
                  <option value="saab">new date</option>
                </select>
              </div>
              <div className='text filterSelect'>
                <select name="usertype" id="usertype">
                  <option value="type1">User Type</option>
                  <option value="type1">Approved</option>
                  <option value="type2">Update</option>
                </select>
              </div>
              <div className='text filterSelect'>
                <select name="usertype" id="usertype">
                    <option value="type1">KYC Status</option>
                    <option value="type1">Approved</option>
                    <option value="type2">Update</option>
                  </select> 
              </div>
              </div>
          </div>
          <div className='right'>
              <div className='generatepost'><span><RiArrowGoForwardFill className="icon2"/></span> Generate Report</div>
          </div>
      </div>
    </form>
  )
}

export default Filter