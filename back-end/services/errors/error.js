const error = (err, res) => {
  switch (err.errno) {
    case 1062:
      res.status(409).json({ message: `${err.sqlMessage}` });
      break;
    default:
      res.json({ message: 'Unknow error' });
  }
};

export default error;
