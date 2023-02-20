import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Header from "../components/Header";

function UsersPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      email: "Jon@gmail.com",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      email: "Cersei@gmail.com",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      email: "Jaime@gmail.com",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      email: "Stark@gmail.com",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
      email: "Targaryen@gmail.com",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      age: 150,
      email: "Melisandre@gmail.com",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      email: "Clifford@gmail.com",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      email: "Frances@gmail.com",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      email: "Roxie@gmail.com",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "email", headerName: "Email", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="USERS" subtitle="Managing the users" />
      <Box m="40px 0 0 0" height="70vh"
          sx={{ 
            "& .MuiDataGrid-root" : { border: "none" },
            "& .MuiDataGrid-cell" : { borderBottom: "none" },
            "& .MuiDataGrid-columnHeaders" : { bgcolor: colors.blueAccent[700], borderBottom: "none" },
            "& .MuiDataGrid-virtualScroller" : { bgcolor: colors.primary[400] },
            "& .MuiDataGrid-footerContainer" : { borderTop: "none", bgcolor: colors.blueAccent[700] },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text" : { color: `${colors.grey[100]} !important` },
            "& .MuiCheckbox-root" : { color: `${colors.greenAccent[200]} !important` },
            "& .name-column-cell" : { color: colors.greenAccent[300] }
            }}>
        <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} checkboxSelection />
      </Box>
    </Box>
  );
}

export default UsersPage;
