import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [users,setUsers]=useState([])
  const [state, setState] = useState({
    username:"",
    email:"",
    password:"",
  });
  const addUser=(user)=>{
  setState(prev=>({...prev,user}))
  }
const createUser=(user)=>{
  setUsers(prev=>([...prev,user]))
}
  return (
    <AuthContext.Provider value={{ state, setState,addUser,users,createUser }}>
      {children}
    </AuthContext.Provider>
  );
};