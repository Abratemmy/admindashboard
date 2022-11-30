import React,{useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Newsidebar from '../../components/newSidebar/newsidebar';
import Datatable from './datatable/datatable';
import Filter from './filter/filter';
import "./users.css"

function Users() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) =>{
      setToggleState(index);
  }

  return (
    <div className='user'>
      <Newsidebar />
      <div className='userContainer'>
        <Navbar />
        <div className='userpage'>
          <div className="title">Users</div>
          <p>In the users details section, tou can review and manage all transactions with their details. Tou can view and delete many information as you want</p>
        
          <div className="bloc-tabs">
              <div className={toggleState ===1 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(1)}>All Users</div>
              <div className={toggleState ===2 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(2)}>Individual User</div>
              <div className={toggleState ===3 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(3)}>Corporate User</div>
              <div className={toggleState ===4 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(4)}>Joint User</div>
          </div>

          <div className="content-tabs">
            <div className={toggleState ===1 ?"content active-content" : "content"}>
              <Filter />
              <Datatable />
            </div>

            <div className={toggleState === 2 ?"content active-content" : "content"}>
            <Filter />
            <Datatable />
            </div>
            <div className={toggleState === 3 ?"content active-content" : "content"}>
            <Filter />
            <Datatable />
            </div>
            <div className={toggleState === 4 ?"content active-content" : "content"}>
            <Filter />
            <Datatable />
            </div>
          </div>
        
        </div>
        
      </div>
    </div>
  )
}

export default Users