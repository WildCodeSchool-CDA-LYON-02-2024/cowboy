const verifyRegister = (req, res, next) => {
  const { username, email, password } = req.body;
  const errors = [];

  if (username === undefined || username.trim() === '') {
    errors.push({
      field: 'username',
      message: "Un nom d'utilisateur est requis",
    });
  }
  if (email === undefined || email.trim() === '') {
    errors.push({ field: 'email', message: 'Une adresse email est requise' });
  }

  if (password === undefined || password.trim() === '') {
    errors.push({ field: 'password', message: 'Un mot de passe est requis' });
  }

  if (errors.length > 0) {
    return res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

const verifyLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (email === undefined || email.trim() === '') {
    errors.push({ field: 'email', message: 'Une adresse email est requise' });
  }

  if (password === undefined || password.trim() === '') {
    errors.push({ field: 'password', message: 'Un mot de passe est requis' });
  }
  if (errors.length > 0) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

export { verifyRegister, verifyLogin };
