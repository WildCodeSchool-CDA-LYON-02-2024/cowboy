const error = (err, res) => {
  switch (err.errno) {
    case 1062:
      console.log('err :', err);
      res.json({ message: `${err.sqlMessage}` });
      break;
    default:
      res.json({ message: 'Unknow error' });
  }
};

export default error;
