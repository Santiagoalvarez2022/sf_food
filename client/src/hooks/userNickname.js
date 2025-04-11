// hooks/useNickname.js
import { useState, useEffect } from 'react';

const useIsLogin = () => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('nickname');
    if (stored) {
      setNickname(stored);
    }
  }, []);
  return nickname;
};

export default useIsLogin;