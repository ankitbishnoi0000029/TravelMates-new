import React, { useEffect, useState } from 'react';

const AuthGuard = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    setIsLoggedIn(!!token); 

//     if (!isLoggedIn) {
//       router.push('/login'); 
//     }
  }, []);

  return isLoggedIn ?  null : children; 
};

export default AuthGuard;