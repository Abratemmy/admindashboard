import React from 'react';
import "./widget.css";
import {BsGraphUp, BsGraphDown} from "react-icons/bs";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

function Widget({type}) {
    let data;

    switch (type) {
        case "users":
            data={
                title: "Total users",
                isMoney: false,
                icon: <BsGraphUp />,
                number: "6, 325",
                text: "Compared to (4233 last year)",
                percent: "+7, 24%",
                isLoss: false,
                progressbar: <CircularProgressbar value={75} text={"75%"} strokeWidth={3} className="bar bar1"
                    styles={{
                        path: {
                            // Path color
                            stroke: 'var(--blue)',
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                            // Customize transition animation
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            // Rotate the path
                            transform: 'rotate(1.25turn)',
                            transformOrigin: 'center center',
                        }
                    }}/>
            }
            break;

            case "investment":
                data={
                title: "Total investment",
                isMoney: false,
                icon: <BsGraphDown />,
                number: "2, 000",
                text: "Compared to (1000 last year)",
                percent: "-40.55%",
                isLoss: true,
                progressbar: <CircularProgressbar value={75} text={"25%"} strokeWidth={3}className="bar bar2"
                styles={{
                    path: {
                        // Path color
                        stroke: 'gold',
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Customize transition animation
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        // Rotate the path
                        transform: 'rotate(1.25turn)',
                        transformOrigin: 'center center',
                    }
                }}/>
            }
            break;

            case "transaction":
            data={
                title: "Total transaction",
                isMoney: true,
                icon: <BsGraphUp />,
                number: "12, 34.00",
                text: "Compared to (1233 last year)",
                percent: "+14.53%",
                isLoss: false,
                progressbar: <CircularProgressbar value={75} text={"50%"} strokeWidth={3} className="bar bar3"
                styles={{
                    path: {
                        // Path color
                        stroke: 'rgb(26, 180, 103)',
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Customize transition animation
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        // Rotate the path
                        transform: 'rotate(1.25turn)',
                        transformOrigin: 'center center',
                    }
                }}/>
            }
            break;

    
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className='left'>
            <div className='progressbar'>
            {data.progressbar}
            </div>
        </div>
        <div className='right'>
            <div className='title'>{data.title}</div>
            <div className='number'>{data.isMoney && "$"}{data.number}</div>
            <div className='text'>{data.text}</div>
            <div className={data.isLoss ? 'lost' : 'green' }>
                {data.icon}
                <span>{data.percent}</span>
            </div>
        </div>
    </div>
  )
}

export default Widget