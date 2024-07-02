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

    return await response.json();
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
