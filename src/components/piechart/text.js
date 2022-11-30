import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import {FiMoreHorizontal} from "react-icons/fi";
import "./piechart.css"

const data01 = [
  { name: 'Group A', value: 400 , width:300},

];
const data02 = [
  { name: 'A', value: 100 },
  { name: 'B', value: 300 },
  { name: 'C', value: 100 },
  { name: 'D', value: 80 },
];

const Piechart = () => {
    return(
        <div className='piecontainer' >
            <div className='top'>
                <p>Activity <span>1 May - 13 May, 2022</span></p>
                <FiMoreHorizontal className='icon'/>
            </div>
            <div width="100%" height="100%">
                <PieChart width={300} height={300}>
                <Pie data={data01} dataKey="value" 
                    cx="50%" cy="50%" outerRadius={60} 
                    fill="#fff" />
                <Pie data={data02} dataKey="value"
                cx="50%" cy="50%" innerRadius={70}
                 outerRadius={90} fill="#82ca9d" 
                 label />
                </PieChart>
            </div>
        </div>
    )
}



import React, { Component } from 'react'


export default Piechart