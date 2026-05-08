import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="60vh"
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;