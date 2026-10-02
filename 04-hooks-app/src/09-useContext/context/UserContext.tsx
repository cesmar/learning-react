import { createContext, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";
/*
interface UseContextProps {
  children: React.ReactNode;
}
*/

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  // state
  authStatus: AuthStatus;
  user: User | null;

  // Methods
  login: (userId: number) => boolean;
  logout: () => void;
}

// export const UserContext = createContext<UserContextProps>({});
export const UserContext = createContext({} as UserContextProps);

// HOC: High Order Component
// export const UserContextProvider = ({ children }: UseContextProps) => {
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`);
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }

    setUser(user);
    setAuthStatus("authenticated");
    return true;
  };

  const handleLogout = () => {
    console.log("Logout");
    setUser(null);
    setAuthStatus("not-authenticated");
  };

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        user: user,
        // login: (userId: number) => {
        //   return true;
        // },
        login: handleLogin,
        // logout: () => {},
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
