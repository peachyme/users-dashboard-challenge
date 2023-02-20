import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function StatBox({ stat, title, children }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>{children}</Box>
        <Box>
          <Typography variant="h2" color={colors.grey[100]} fontWeight="bold">
            {stat}
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default StatBox;
