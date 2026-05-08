import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Campus Notifications
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} to="/">
            All Notifications
          </Button>

          <Button color="inherit" component={Link} to="/priority">
            Priority Inbox
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;