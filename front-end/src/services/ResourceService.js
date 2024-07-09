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

    return await response.json();
  } catch (err) {
    console.error("Network error:", err);
    throw err;
  }
};

export const subscribeToResourceUpdates = (token, onMessage, onError) => {
  const eventSourceUrl = `${
    import.meta.env.VITE_BACKEND_URL
  }/api/resource?token=${encodeURIComponent(token)}`;

  const eventSource = new EventSource(eventSourceUrl);

  eventSource.onmessage = (event) => {
    const newData = JSON.parse(event.data);
    onMessage(newData);
  };

  eventSource.onerror = (err) => {
    console.error("EventSource error:", err);
    if (onError) {
      onError(err);
    }
    eventSource.close();
  };

  return eventSource;
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

//verif des ressources
export const checkIfCanUpgrade = (playerResources, buildingLevel) => {
  const nextLevel = buildingLevel + 1;
  const requiredResources = resourceTiers.find(
    (tier) => tier.level === nextLevel
  );

  if (!requiredResources) {
    return {
      canUpgrade: false,
      message: "Maximum level reached, cannot upgrade further.",
    };
  }

  const hasEnoughResources = Object.keys(requiredResources).every(
    (resource) => {
      if (resource === "level") {
        return true;
      }
      const requiredAmount = requiredResources[resource];
      const playerResource = playerResources.find(
        (res) => res.name === resource
      );
      return playerResource && playerResource.quantity >= requiredAmount;
    }
  );

  if (!hasEnoughResources) {
    return {
      canUpgrade: false,
      message: "Insufficient resources to upgrade.",
    };
  }

  return {
    canUpgrade: true,
    message: "Ready to upgrade.",
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
    throw new Error("Cannot find required resources for next level upgrade.");
  }

  // Déduire les ressources nécessaires des ressources actuelles du joueur
  const updatedResources = playerResources.map((resource) => {
    const resourceName = resource.name;
    console.log(resourceName, "RESOURCE NAME");
    const requiredAmount = requiredResources[resourceName];
    if (requiredAmount && resource.quantity >= requiredAmount) {
      return {
        name: resourceName,
        quantity: resource.quantity - requiredAmount,
      };
    } else {
      return resource;
    }
  });

  return updatedResources;
};
