import axios from "axios";

const API = axios.create({
  baseURL: "http://4.224.186.213/evaluation-service",
});

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhYmhpc2hlazc3N2Rlb2RhQGdtYWlsLmNvbSIsImV4cCI6MTc3ODIzNDkxNSwiaWF0IjoxNzc4MjM0MDE1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMDkyYmU4ZTQtMTNhNS00MjNlLTgyYTUtMjYzYTE3ZjgzMGFjIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYWJoaXNoZWsga3VtYXIiLCJzdWIiOiI3MzI2MjdhOC0wYzNkLTQ3MDMtODM1NS1iZjc2NDg0ZjJlOTMifSwiZW1haWwiOiJhYmhpc2hlazc3N2Rlb2RhQGdtYWlsLmNvbSIsIm5hbWUiOiJhYmhpc2hlayBrdW1hciIsInJvbGxObyI6IjIzMTAzMzg4IiwiYWNjZXNzQ29kZSI6Ik1kcHJoRSIsImNsaWVudElEIjoiNzMyNjI3YTgtMGMzZC00NzAzLTgzNTUtYmY3NjQ4NGYyZTkzIiwiY2xpZW50U2VjcmV0IjoibW5iblJHa0JXRVl6Q1RycCJ9.2Q_KyHj_G1fAOc7rJWG3soY_yWzwkSlWAHHCLD37QH8";

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    const response = await API.get("/notifications", {
      params: {
        page,
        limit,
        notification_type: type || undefined,
      },

      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    console.log(response.data);

    return response.data.notifications || [];
  } catch (error) {
    console.log("API ERROR:", error);

    return [];
  }
};