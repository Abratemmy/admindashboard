import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Newsidebar from '../../components/newSidebar/newsidebar';
import Barchat from '../../components/barchart/barchat';

import Widget from '../../components/widget/widget';

import "./dashboard.css"
import Tablelist from '../../components/Table/Table';
import Piechart from '../../components/piechart/piechart';

function Dashboard() {
  return (
    <div className='home'>
        <Newsidebar />
        <div className="homeContainer">
          <Navbar />
          <div className='widgets'>
            <Widget type="users" />
            <Widget type="investment" />
            <Widget type="transaction" />
          </div>

          <div className='charts'>
            <div className='bar'> <Barchat/></div>
            <div className='pie'><Piechart /></div>
          </div>

          <div className='listContainer'>
            <div className='listTitle'>Payout</div>
            <span>1034 Payout</span>

            <Tablelist />
          </div>

          
        </div>
    </div>
  )
}

export default Dashboard