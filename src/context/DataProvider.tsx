import { createContext, useState, useEffect } from "react";
import api from "../services/index";
import Users from '../models/users'


export const DataContext = createContext< Users[]>([]);

export const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Users[]>([]);

  
  useEffect(() => {
    const loadUsers = async () => {
      try{
        const response = await api
        .get("api/?results=10")
        setData(response.data.results)
      } catch (error) {
        console.log(error)
      }
  };
    loadUsers();
  }, []);

 

  return (
    <DataContext.Provider value={ data }>{children}</DataContext.Provider>
  );
};
