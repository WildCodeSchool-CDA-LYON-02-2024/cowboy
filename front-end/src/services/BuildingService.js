import { jwtDecode } from "jwt-decode";

export const fetchBuildingLevel = async (token) => {
  const decodedToken = jwtDecode(token);
  const colonyId = decodedToken.payload.sub.colonyId;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/building/${colonyId}}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (err) {
    console.error("Network error:", err);
    throw err;
  }
};
