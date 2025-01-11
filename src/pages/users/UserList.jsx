import React from "react";
import { userRow } from "../../data";
import { useState } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Link } from "react-router";
import DeleteIcon from '@mui/icons-material/Delete';
export default function UserList() {
  const [userDatas, setUserDatas] = useState(userRow);
  const userDelete =userId=>{
    setUserDatas(userDatas.filter(user=>user.id !=userId))
  }
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img src={params.row.anatar} className="userListimg" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: 'email',
      headerName:'Email',
      width:200
    },
    {
      field:"status",
      headerName:"status",
      width:200
    },
    {
      field:"teansaction",
      headerName:"Teansaction",
      width:200
    },
    {

      field:"action",
      headerName:"Action",
      width:200,
      renderCell : (params)=>{
        return(
          <>
          <Link to={`/user/${params.row.id}`}>
          <button className="userListEdit">
            Edit
          </button>
          </Link>
          <DeleteIcon className="userListDelet"
          onClick={()=>userDelete(params.row.id)}/>
        </>
      )
    }
  },

  ];
  return (
    <div className="userList"> 
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableRowSelectionOnClick
        pageSize= {5}
      />
    </div>
  );
}
