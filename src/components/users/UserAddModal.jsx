import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import UserAddForm from "./UserAddForm";

function UserAddModal({ open, onClose }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: colors.primary[400],
    boxShadow: 24,
    borderRadius: 1,
    p: 2,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
      >
        <Box sx={style}>
          <UserAddForm onClose={onClose} />
        </Box>
      </Modal>
    </div>
  );
}

export default UserAddModal;
