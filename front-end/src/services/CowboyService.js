export const fetchPlayerCowboy = async (token) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/cowboy`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return await response.json();
  } catch (err) {
    console.error("Network error:", err);
    throw err;
  }
};
