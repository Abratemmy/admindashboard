import React from 'react';
import "./navbar.css";
import {FiSearch} from "react-icons/fi"
import {MdNotifications} from "react-icons/md";
import person from "../../assets/avatar.jpg"

function Navbar() {
  return (
    <div className='navbar11'>
      <div className='wrapper'>
        <div className='title'>Dashboard Overview </div>

        <div className='search'>
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        <div className='nav-end'>
          <div><MdNotifications className="notification" /></div>
          <div className='person'>
            <img src={person} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar