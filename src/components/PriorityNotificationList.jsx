import NotificationList from "./NotificationList";
import { getTopPriorityNotifications } from "../utils/priorityUtils";

function PriorityNotificationList({
  notifications,
  viewed,
  onView,
  limit,
}) {
  const priorityNotifications = getTopPriorityNotifications(
    notifications,
    limit
  );

  return (
    <NotificationList
      notifications={priorityNotifications}
      viewed={viewed}
      onView={onView}
    />
  );
}

export default PriorityNotificationList;