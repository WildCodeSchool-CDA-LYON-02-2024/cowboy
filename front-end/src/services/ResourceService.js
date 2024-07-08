export const fetchGlobalResource = async (token) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/resource`,
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

export const resourceTiers = [
  { level: 1, wood: 25, stone: 10, metal: 9, gold: 2 },
  { level: 2, wood: 30, stone: 25, metal: 10, gold: 5 },
  { level: 3, wood: 40, stone: 30, metal: 17, gold: 7 },
  { level: 4, wood: 47, stone: 33, metal: 20, gold: 9 },
  { level: 5, wood: 60, stone: 45, metal: 33, gold: 11 },
  { level: 6, wood: 80, stone: 50, metal: 42, gold: 13 },
  { level: 7, wood: 95, stone: 57, metal: 49, gold: 15 },
  { level: 8, wood: 125, stone: 80, metal: 54, gold: 17 },
  { level: 9, wood: 190, stone: 95, metal: 59, gold: 19 },
  { level: 10, wood: 280, stone: 100, metal: 67, gold: 35 },
];
