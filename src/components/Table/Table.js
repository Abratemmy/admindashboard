import "./table.css";
import { useState } from "react";
import { usersData } from "../../Data/usersdata";
import { DataGrid } from "@mui/x-data-grid";
import {RiArrowDownSLine} from "react-icons/ri"
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';import { Link } from "react-router-dom";
;
// import Dropdown from 'muicss/lib/react/dropdown';
// import DropdownItem from 'muicss/lib/react/dropdown-item';

// import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const Tablelist = () => {
  const[selection, setselection] = useState(1)
  const handleChange = (value) =>setselection(value);


  const[showdropdown, setshowdropdown] = useState(false)
  const handleshowdropdown = (value) =>setshowdropdown(!showdropdown);

  const column = [
    {
      field: "name",
      headerName: "User Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className=" cellWrapper">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            <span className="tabletext">{params.row.name}</span>
          </div>
        );
      },
    },
    {
        field: "date",
        headerName: "Date",
        width: 120,
        renderCell: (params) => {
          return (
            <div className="tabletext">
              {params.row.date}
            </div>
          );
        },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="tabletext tableamount">
            {params.row.amount}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email Address",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="tabletext">
            {params.row.email}
          </div>
        );
      },
    },
    {
        field: "accountType",
        headerName: "Account Type",
        width: 120,
        renderCell: (params) => {
          return (
            <div className="tabletext">
              {params.row.accountType}
            </div>
          );
        },
    },
  
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className={`tablecellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ]

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
         
         <Link to="/users/test" className='table-action'onClick={handleshowdropdown}>Details <span><RiArrowDownSLine /></span></Link>
           
            {/* {
                    showdropdown === true ? (
                        <div className='performaction'>
                            <Link to="/users/test" style={{ textDecoration: "none" }}>
                                <div className="viewButton">View</div>
                            </Link>

                            <div
                                className="deleteButton"
                                
                                >
                                Delete
                            </div>
                        </div>
                    ) : null
                } */}
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ height: 350, width: '100%', margin:"30px 0px" }}>
      <DataGrid
        rows={usersData}
        columns={column.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Tablelist;