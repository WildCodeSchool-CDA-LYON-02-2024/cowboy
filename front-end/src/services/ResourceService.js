import { jwtDecode } from "jwt-decode";

export const fetchGlobalResource = async (token) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/resource/simple`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response, "REPONSE");

    return await response.json();
  } catch (err) {
    console.error("Network error:", err);
    throw err;
  }
};
export const updatePlayerResources = async (token, updatedResources) => {
  console.log(updatedResources, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  const decodedToken = jwtDecode(token);
  const colonyId = decodedToken.payload.sub.colonyId;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/resource/${colonyId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedResources),
      }
    );
    console.log(
      `Request URL: ${
        import.meta.env.VITE_BACKEND_URL
      }/api/resource/${colonyId}`
    );

    if (!response.ok) {
      throw new Error("Failed to update player resources");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating player resources:", error);
    throw error; // Gérer l'erreur selon votre logique d'application
  }
};

export const resourceTiers = [
  { level: 1, 4: 25, 3: 10, 2: 9, 1: 2 },
  { level: 2, 4: 30, 3: 25, 2: 10, 1: 5 },
  { level: 3, 4: 40, 3: 30, 2: 17, 1: 7 },
  { level: 4, 4: 47, 3: 33, 2: 20, 1: 9 },
  { level: 5, 4: 60, 3: 45, 2: 33, 1: 11 },
  { level: 6, 4: 80, 3: 50, 2: 42, 1: 13 },
  { level: 7, 4: 95, 3: 57, 2: 49, 1: 15 },
  { level: 8, 4: 125, 3: 80, 2: 54, 1: 17 },
  { level: 9, 4: 190, 3: 95, 2: 59, 1: 19 },
  { level: 10, 4: 280, 3: 100, 2: 67, 1: 35 },
];

//verif des ressources
export const checkIfCanUpgrade = (playerResources, buildingLevel) => {
  const nextLevel = buildingLevel + 1;
  const requiredResources = resourceTiers.find(
    (tier) => tier.level === nextLevel
  );

  if (!requiredResources) {
    return {
      canUpgrade: false,
      message: "Niveau max atteint, aucune amélioration possible.",
    };
  }

  const hasEnoughResources = Object.keys(requiredResources).every((key) => {
    if (key === "level") {
      return true;
    }
    const requiredAmount = requiredResources[key];
    const resourceId = parseInt(key, 10);
    const playerResource = playerResources.find((res) => res.id === resourceId);
    console.log(playerResource, "PLAYER RESSOURCE");
    return playerResource && playerResource.quantity >= requiredAmount;
  });

  if (!hasEnoughResources) {
    return {
      canUpgrade: false,
      message: "Resources insuffisante pour l'amélioration.",
    };
  }

  return {
    canUpgrade: true,
    message: "Amélioration possible.",
  };
};

export const removeResourcesForUpgrade = (
  playerResources,
  buildingLevel,
  resourceTiers
) => {
  const nextLevel = buildingLevel + 1;
  const requiredResources = resourceTiers.find(
    (tier) => tier.level === nextLevel
  );

  if (!requiredResources) {
    console.error("Cannot find required resources for next level upgrade.");
    return null;
  }

  // MAJ DES RESSOURCES
  const updatedResources = playerResources.map((resource) => {
    const resourceId = resource.id;
    const resourceName = resource.name;
    const requiredAmount = requiredResources[resourceId];

    console.log("REQUIRED AMOUNT:", resourceName, requiredAmount);

    if (requiredAmount && resource.quantity >= requiredAmount) {
      return {
        id: resourceId,
        name: resourceName,
        quantity: resource.quantity - requiredAmount,
      };
    } else {
      return resource;
    }
  });

  console.log("RESOURCES APRES AMELIORATION:", updatedResources);
  return updatedResources;
};
