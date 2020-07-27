import React, {createContext, useCallback, useState, useContext} from 'react';

const AuthContext = createContext({});
const AuthProvider = ({children}) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@marvel:user');

    if (user) {
      return {
        user,
      };
    }

    return {};
  });

  const signIn = useCallback(({user}) => {
    localStorage.setItem('@marvel:user', user);

    setData({user});
  }, []);

  const signOut = () => {
    localStorage.removeItem('@marvel:user');
    localStorage.removeItem('@marvel:historic');

    setData({});
  };

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        historic: data.historic,
        auth: !!data.user,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const constext = useContext(AuthContext);

  if (!constext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return constext;
}

export {AuthProvider, useAuth};
