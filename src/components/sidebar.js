import React, {useState} from 'react';
import "./sidebar.css";
import {SidebarData} from "../Data/data"

function Sidebar() {
    const [selected, setSelected] = useState(0)

  return (
    <div className='sidebar'>
        <div className='logo'>
            <img src="" alt="LOGO" />
        </div>

        <div className='menu'>
           {SidebarData.map((item, index) => {
            return(
                //if selected is true, return the classname with the active class
                <div className = {selected === index ? 'menuItem active' : 'menuItem'}
                    key={index}
                    onClick={() => setSelected(index)}
                >
                    <item.icon />
                    <span>{item.heading}</span>
                </div>
            )
           })}


           <div className='menuItem'>
                <div>
                    Copyright {new Date().getFullYear()} &copy; PAC
                </div>
           </div>
        </div>
    </div>
  )
}

export default Sidebar