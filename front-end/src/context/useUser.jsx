import { useContext } from 'react';
import { UserContext } from './UserProvider.jsx';

// Création de mon hook personnalisé
const useUser = () => {
  const r = useContext(UserContext);
  console.log(r, 'USE CONTEXT RESULT ');
  return r;
};

export default useUser;
