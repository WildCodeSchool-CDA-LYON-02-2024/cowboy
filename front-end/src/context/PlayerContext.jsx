import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { jwtDecode } from 'jwt-decode';

const playerContext = createContext();

export function PlayerContextProvider({ children }) {
  const [playerData, setPlayerData] = useLocalStorage('player', null);
  const [decodedToken, setDecodedToken] = useState();
  const [slots, getSlots] = useState(null);

  const login = (userInfo) => {
    setPlayerData(userInfo);
    setDecodedToken(jwtDecode(playerData.token));
  };

  const logout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/logout`,
        {
          method: 'POST', // Change to "POST" if needed
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.status === 200) {
        localStorage.clear();
        setPlayerData(null);
      } else {
        console.error('Failed to logout. Please try again.');
      }
    } catch (err) {
      console.error('An error occurred during logout:', err);
    }
  };

  const contextValue = useMemo(() => {
    return {
      playerData,
      setPlayerData,
      login,
      logout,
      decodedToken,
      slots,
      getSlots,
    };
  }, [playerData]);

  return (
    <playerContext.Provider value={contextValue}>
      {children}
    </playerContext.Provider>
  );
}

export const usePlayerContext = () => useContext(playerContext);

PlayerContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
