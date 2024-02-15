import React from 'react'


const UserContext = React.createContext({ email: '', auth: false, name: '' });

// @function  UserProvider
// Create function to provide UserContext
const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({ email: '', auth: false,name:'' });

  const loginContext = (email,token,name) => {
    setUser((user) => ({
      email: email,
      auth: true,
      name: name
    }));
    localStorage.setItem("token", token)
    localStorage.setItem('email', email)
    localStorage.setItem('name', name)
  };

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    setUser((user) => ({
      email: '',
      auth: false,
      name: ''
    }));
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider}