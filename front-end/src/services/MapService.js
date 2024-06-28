// Je recupere tous les slots de map
const fetchSlots = ( setSlots ) => {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/api/map/slot`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      console.log('res : ', res);
      return res.json();
    })
    .then((data) => {
      console.log('data :', data);
      setSlots(data);
    })
    .catch((err) => console.error(err));
};

export default fetchSlots;
