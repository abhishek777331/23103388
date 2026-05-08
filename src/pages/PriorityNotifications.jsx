import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";

import { useEffect, useState } from "react";

import { fetchNotifications } from "../api/notificationApi";

import Loader from "../components/Loader";
import PriorityNotificationList from "../components/PriorityNotificationList";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);

  const [viewed, setViewed] = useState(() => {
    return JSON.parse(localStorage.getItem("viewed")) || [];
  });

  const loadNotifications = async () => {
    try {
      setLoading(true);

      const data = await fetchNotifications(1, 50);

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
  }, []);

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
        Priority Inbox
      </Typography>

      <Stack direction="row" spacing={2} mb={3}>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Limit</InputLabel>

          <Select
            value={limit}
            label="Limit"
            onChange={(e) => setLimit(e.target.value)}
          >
            <MenuItem value={5}>Top 5</MenuItem>
            <MenuItem value={10}>Top 10</MenuItem>
            <MenuItem value={20}>Top 20</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <PriorityNotificationList
        notifications={notifications}
        viewed={viewed}
        onView={handleViewed}
        limit={limit}
      />
    </Container>
  );
}

export default PriorityNotifications;