import React from 'react';

const AuthContext = React.createContext(null);
//const [user, setUser] = { role: 'admin', uid: null, authenticate: false };

const AuthProvider = (props) => {
  return (
    <AuthContext.Provider
      value={{ role: 'admin', uid: null, authenticated: false }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
