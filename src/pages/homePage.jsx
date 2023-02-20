import Header from "../components/Header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import StatBox from "../components/dashboard/StatBox";
import GroupIcon from "@mui/icons-material/Group";
import { useSelector } from "react-redux";

const HomePage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const usersStat = useSelector((state) => { return state.users.length; });

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Box mt="50px" display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="40px">
        <Box gridColumn="span 4" bgcolor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox stat={usersStat} title="Users created">
            <GroupIcon sx={{ fontSize: 50, color: colors.blueAccent[200] }}/>
          </StatBox>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
