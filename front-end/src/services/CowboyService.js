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

export const fetchAllCowboy = async (token) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/cowboy/dispo`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    // Limiter les résultats à 10
    return data.slice(0, 15);
  } catch (err) {
    console.error("Network error:", err);
    throw err;
  }
};

export const recruitCowboys = async (token, cowboyId) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/hiring/${cowboyId}`,
      {
        method: "POST",
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
