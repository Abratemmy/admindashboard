import React from 'react';
import "./newsidebar.css";
import {MdDashboard, MdDirectionsTransit} from "react-icons/md"
import {TbUsers} from "react-icons/tb"
import {BiCategoryAlt, BiBox} from "react-icons/bi"
import {FaChartLine} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Newsidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebartop'><span className='logo'>PAC ASSET LOGO </span></div>
        <hr />
        <div className='sidebarcenter'>
            <ul className='active'>
                <li><NavLink  to="/" className={(navData) => navData.isActive ? "sidebar-nav active" : "sidebar-nav" } ><MdDashboard className='icon' /><span>Dashboard</span></NavLink></li>
                <li><NavLink  to="/users" className="sidebar-nav"><TbUsers className='icon' /><span>Users</span></NavLink></li>
                <li><NavLink exact to="/products"className="sidebar-nav" ><BiBox className='icon' /><span>Products</span></NavLink></li>
                <li><NavLink exact to="/category" className="sidebar-nav" activeClassName="active"><BiCategoryAlt className='icon' /><span>Category</span></NavLink></li>
                <li><NavLink exact to="/investment" className="sidebar-nav" activeClassName="active"><FaChartLine className='icon' /><span>Investment</span></NavLink></li>
                <li><NavLink exact to="/transaction" className="sidebar-nav" activeClassName="active"><MdDirectionsTransit className='icon' /><span>Transaction</span></NavLink></li>
            </ul>
        </div>
        <div className='sidebarbottom'>
            <div>
                Copyright {new Date().getFullYear()} &copy; PAC
            </div>
            
        </div>
    </div>
  )
}

export default Newsidebar