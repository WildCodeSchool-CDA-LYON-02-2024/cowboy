import { jwtDecode } from 'jwt-decode';
import { funcAudioBuild } from '../components/audioClick/audioClick.js';

export const fetchGlobalResource = async (token) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/resource`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // Récupération des données JSON

    return data; // Retourner les données récupérées
  } catch (err) {
    console.error('Network error:', err);
    throw err;
  }
};

export const fetchResourceOnSlot = (id, setSlotResource) => {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/api/resource/slot/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setSlotResource(data);
    })
    .catch((err) => console.error(err));
};

export const collectResource = (playerId, resource, colonyId) => {
  fetch(
    `${
      import.meta.env.VITE_BACKEND_URL
    }/api/resource/player/${playerId}/take-resources`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resource, playerId, colonyId }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log('data : ', data);
    })
    .catch((err) => console.error(err));
};

export const buildRessource = (
  playerId,
  colonyId,
  slotId,
  setMessage,
  setBuildAuthorisation,
  setModal,
  setPlayerSlot
) => {
  fetch(
    `${
      import.meta.env.VITE_BACKEND_URL
    }/api/resource/player/${playerId}/add-colony`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ playerId, colonyId, slotId }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.message === 'Il y a déjà une colonie sur cet emplacement') {
        setMessage(data.message);
        setBuildAuthorisation(false);
        setModal(true);
      } else if (data.message != "You don't have enough gold") {
        funcAudioBuild();
        setBuildAuthorisation(true);
        setPlayerSlot((prevSlots) => [...prevSlots, data.slot[0]]);
        setModal(false);
      } else {
        setMessage("Tu n'as pas assez d'argent");
        setBuildAuthorisation(false);
        setModal(true);
      }
    })
    .catch((err) => console.error(err));
};

export const fetchPlayerSlots = (playerId, setPlayerSlot) => {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/api/map/slot/${playerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setPlayerSlot(data);
    })
    .catch((err) => console.error(err));
};

export const subscribeToResourceUpdates = (token, onMessage, onError) => {
  const eventSourceUrl = `${
    import.meta.env.VITE_BACKEND_URL
  }/api/resource/SSE?token=${encodeURIComponent(token)}`;

  const eventSource = new EventSource(eventSourceUrl);

  eventSource.onmessage = (event) => {
    const newData = JSON.parse(event.data);
    onMessage(newData);
  };

  eventSource.onerror = (err) => {
    console.error('EventSource error:', err);
    if (onError) {
      onError(err);
    }
    eventSource.close();
  };

  return eventSource;
};

export const updatePlayerResources = async (token, updatedResources) => {
  const decodedToken = jwtDecode(token);
  const colonyId = decodedToken.payload.sub.colonyId;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/resource/${colonyId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedResources),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to update player resources');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating player resources:', error);
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
      message: 'Niveau max atteint, aucune amélioration possible.',
    };
  }

  const hasEnoughResources = Object.keys(requiredResources).every((key) => {
    if (key === 'level') {
      return true;
    }
    const requiredAmount = requiredResources[key];
    const resourceId = parseInt(key, 10);
    const playerResource = playerResources.find((res) => res.id === resourceId);
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
    message: 'Amélioration possible.',
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
    console.error('Cannot find required resources for next level upgrade.');
    return null;
  }

  // MAJ DES RESSOURCES
  const updatedResources = playerResources.map((resource) => {
    const resourceId = resource.id;
    const resourceName = resource.name;
    const requiredAmount = requiredResources[resourceId];

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

  return updatedResources;
};
