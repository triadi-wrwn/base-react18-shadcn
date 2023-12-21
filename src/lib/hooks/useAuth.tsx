import { CurrentUser, Role } from 'lib/types/currentuser.type';
import { useState } from 'react';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [role, setRole] = useState<Role>();
  const [currentUser, setCurrentUser] = useState<CurrentUser>();

  return {
    authenticated,
    role,
    currentUser,
    setAuthenticated,
    setRole,
    setCurrentUser,
  }
};

export default useAuth;
