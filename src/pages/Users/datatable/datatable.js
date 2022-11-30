import React from 'react';
import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import {userColumns, userRows} from "../datasource";
import {RiArrowDownSLine} from "react-icons/ri"

function Datatable() {

    const[showdropdown, setshowdropdown] = useState(false)
    const handleshowdropdown = () =>setshowdropdown(!showdropdown);

    

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

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
                                onClick={() => handleDelete(params.row.id)}
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
    <div className='datatable'>
        <DataGrid
            className="datagrid"
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[5]}
            pagination
            checkboxSelection
        />
    </div>
  )
}

export default Datatable