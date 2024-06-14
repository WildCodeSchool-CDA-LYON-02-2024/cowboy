const error = (err, res) => {
  switch (err.errno) {
    case 1062:
      res.json({ message: 'Email already exist' });
      break;
    default:
      res.json({ message: 'Unknow error' });
  }
};

export default error;
