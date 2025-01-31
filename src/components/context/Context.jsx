import { useContext, createContext, useState } from "react";


const Context = createContext();


export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  return (
    <Context.Provider value={{ userData, setUserData }}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
