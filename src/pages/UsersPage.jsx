import { useState } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Header from "../components/Header";
import UserAddModal from "../components/users/UserAddModal";
import { useSelector } from "react-redux";

function UsersPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const rows = useSelector((state) => { return state.users; });

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "lastName",
      headerName: "Last Name",
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


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box m="20px">
      <Header title="USERS" subtitle="Managing the users" />
      <Box display="flex" justifyContent="right" mb="-20px">
        <Button variant="contained" color="secondary" onClick={handleOpen}>Create new user</Button>
        <UserAddModal open={open} onClose={handleClose} />
      </Box>
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
