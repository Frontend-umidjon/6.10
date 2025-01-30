import { useContext, createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Context.Provider value={{ name, setName, email, setEmail, password, setPassword }}>
            {children}
        </Context.Provider>
    );
}

export const useStateValue = () => useContext(Context);