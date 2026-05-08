import { Grid } from "@mui/material";
import NotificationCard from "./NotificationCard";

function NotificationList({ notifications, viewed, onView }) {
  return (
    <Grid container spacing={2}>
      {notifications.map((notification) => (
        <Grid item xs={12} md={6} lg={4} key={notification.ID}>
          <NotificationCard
            notification={notification}
            viewed={viewed.includes(notification.ID)}
            onView={onView}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default NotificationList;