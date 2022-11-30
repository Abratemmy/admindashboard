import React  from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import {FiMoreHorizontal} from "react-icons/fi";
import "./piechart.css"

const data01 = [
  { name: 'Group A', value: 400 , width:300},

];
const data02 = [
  { name: '25%', value: 100 },
  { name: '44%', value: 200 },
  { name: '19%', value: 100 },
  { name: '25%', value: 60 },
];

const COLORS = ['var(--blue)', 'var(--greenColor)', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Piechart = () => {
    return(
        <div className='piecontainer' >
            <div className='top'>
                <p>Activity <span>1 May - 13 May, 2022</span></p>
                <FiMoreHorizontal className='icon'/>
            </div>

            <div width="100%" height="100%">
                <PieChart width={300} height={200}>
                    {/* <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#fff" /> */}
                    <Pie
                        data={data02}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={90}
                        innerRadius={40}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data02.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                         
                    </Pie>
                </PieChart>
            </div>

            <div className='colorcontainer'>
                <div className='color'>
                    <div className='colorcode'>
                        <span ></span>
                        <p>Trasaction</p>
                    </div>

                    <div className='colorcode'>
                        <span className='color2'></span>
                        <p>Payouts</p>
                    </div>
                </div>

                <div className='color'>
                    <div className='colorcode'>
                        <span className='color3'></span>
                        <p>Active Users</p>
                    </div>

                    <div className='colorcode'>
                        <span className='color4'></span>
                        <p>Inactive Users</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Piechart