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
  console.log(
    'playerId : ',
    playerId,
    'resource :',
    resource,
    'colonyId : ',
    colonyId
  );
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
  setSlotNewColony,
  setMessage,
  setBuildAuthorisation,
  setModal
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
        setBuildAuthorisation(true);
        setSlotNewColony((prevSlots) => [...prevSlots, data.slot[0]]);
        setModal(false);
      } else {
        setMessage("Tu n'as pas assez d'argent");
        setBuildAuthorisation(false);
        setModal(true);
      }
    })
    .catch((err) => console.error(err));
};
