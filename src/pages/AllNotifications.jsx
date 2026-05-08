import {
  Box,
  Container,
  Typography,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";

import { useEffect, useState } from "react";

import { fetchNotifications } from "../api/notificationApi";
import NotificationList from "../components/NotificationList";
import Loader from "../components/Loader";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");

  const [viewed, setViewed] = useState(() => {
    return JSON.parse(localStorage.getItem("viewed")) || [];
  });

  const loadNotifications = async () => {
    try {
      setLoading(true);

      const data = await fetchNotifications(page, 10, type);

      setNotifications(data || []);
    } catch (error) {
      console.log("Error fetching notifications:", error);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, [page, type]);

  const handleViewed = (id) => {
    if (!viewed.includes(id)) {
      const updated = [...viewed, id];

      setViewed(updated);

      localStorage.setItem("viewed", JSON.stringify(updated));
    }
  };

  if (loading) return <Loader />;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3}>
        All Notifications
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        mb={3}
      >
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter</InputLabel>

          <Select
            value={type}
            label="Filter"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Placement">Placement</MenuItem>
            <MenuItem value="Result">Result</MenuItem>
            <MenuItem value="Event">Event</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <NotificationList
        notifications={notifications}
        viewed={viewed}
        onView={handleViewed}
      />

      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={10}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </Container>
  );
}

export default AllNotifications;