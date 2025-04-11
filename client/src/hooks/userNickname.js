// hooks/useNickname.js
import { useState, useEffect } from 'react';

const useIsLogin = () => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('verifico si esta logeado');
    
    const stored = localStorage.getItem('nickname');
    if (stored) {
      setNickname(stored);
    }
  }, []);
  console.log(nickname);
  
  return nickname;
};

export default useIsLogin;