import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

function NotificationCard({ notification, viewed, onView }) {
  const getColor = () => {
    switch (notification.Type) {
      case "Placement":
        return "success";
      case "Result":
        return "warning";
      case "Event":
        return "primary";
      default:
        return "default";
    }
  };

  return (
    <Card
      onClick={() => onView(notification.ID)}
      sx={{
        mb: 2,
        cursor: "pointer",
        borderLeft: viewed ? "5px solid gray" : "5px solid red",
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6">
            {notification.Message}
          </Typography>

          <Chip label={notification.Type} color={getColor()} />
        </Stack>

        <Typography color="text.secondary">
          {notification.Timestamp}
        </Typography>

        <Typography mt={1}>
          Status: {viewed ? "Viewed" : "New"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;