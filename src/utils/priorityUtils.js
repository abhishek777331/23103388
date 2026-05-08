const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const calculatePriorityScore = (notification) => {
  const currentTime = new Date().getTime();
  const notificationTime = new Date(notification.Timestamp).getTime();

  const minutesOld = (currentTime - notificationTime) / (1000 * 60);

  const recencyScore = Math.max(100 - minutesOld, 1);

  return weights[notification.Type] * 100 + recencyScore;
};

export const getTopPriorityNotifications = (
  notifications,
  limit = 10
) => {
  return [...notifications]
    .sort(
      (a, b) =>
        calculatePriorityScore(b) - calculatePriorityScore(a)
    )
    .slice(0, limit);
};