import "../scss/Datatable.scss";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import { users } from "../lib/data";

const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
      </div>
    ),
  },
];

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/single" className="link">
              <button className="viewButton">View</button>
            </Link>

            <Link to="/" className="link">
              <button className="deleteButton">Delete</button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <span>Add New user</span>
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={users}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            // Set the initial page size
            paginationModel: { pageSize: 8, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 25, { value: -1, label: "All" }]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
