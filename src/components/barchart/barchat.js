import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./barchart.css";

const data = [
  {
    name: "Jan",
    uv: 0,
    pv: 4,
    amt: 5
  },
  {
    name: "Feb",
    uv: 0,
    pv: 6,
    amt: 6
  },
  {
    name: "March",
    uv: 0,
    pv: 9,
    amt: 9
  },
  {
    name: "Apr",
    uv: 5,
    pv: 6,
    amt: 11
  },
  {
    name: "May",
    uv:0,
    pv: 15,
    amt: 15
  },
  {
    name: "Jun",
    uv: 0,
    pv:27,
    amt: 27
  },
  {
    name: "Jul",
    uv: 0,
    pv: 7,
    amt: 7
  },
  {
    name: "Aug",
    uv: 10,
    pv: 14,
    amt: 24
  },
  {
    name: "Sep",
    uv: 7,
    pv: 14,
    amt: 22
  },
  {
    name: "Oct",
    uv: 0,
    pv: 19,
    amt: 19
  },
  {
    name: "Nov",
    uv: 0,
    pv: 10,
    amt: 10
  },
  {
    name: "Dec",
    uv: 0,
    pv: 3,
    amt: 3
  }
];


const Barchat = () => {
  return (
    <div>
      <div className='title'>Analytics</div>
      <div className='barchart'>
        <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 50,
          left: 10,
          bottom: 0
        }}
        barSize={27}
        // barCategoryGap={10}
        // style={{ stroke: '#fff', strokeWidth: 10 }}
        
        borderRadius={ 60}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis dataKey="amt"/>
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="pv" stackId="a" fill="var(--blue)" radius={[50, 50, 0, 0]} />
        <Bar dataKey="uv" stackId="a" fill="var(--line)" radius={[50, 50, 0, 0]}/>
      </BarChart>
      </div>
    </div>
  )
}

export default Barchat