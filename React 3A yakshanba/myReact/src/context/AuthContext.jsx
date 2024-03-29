import { createContext, useContext, useState } from "react";

const backetContext = createContext();
export const ContextProvider = ({ children }) => {
  const [backet, setBacket] = useState([]);
  const addToBacket = (param) => {
    setBacket((prev) => [...prev, param]);
  };
  const handleDelete=(id)=>{
    const newArr=backet.filter((item)=>item.id !==id )
    setBacket(newArr)
    }
  return (
    <backetContext.Provider value={{ addToBacket, backet ,handleDelete}}>
      {children}
    </backetContext.Provider>
  );
};
export const useBacket = () => {
  const contex = useContext(backetContext);
  if (!contex) {
    throw new Error("Nima qilyapsan !!!");
  }
  return contex;
};
