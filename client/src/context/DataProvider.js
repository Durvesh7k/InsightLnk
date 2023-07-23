import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const DataContext = createContext();



const DataProvider = ({ children }) => {


    const [account, setAccount] = useState({ 'name': " ", 'userName': " " });
    return (
        <DataContext.Provider value={{
            account,
            setAccount,
        }}>
            {children}
        </DataContext.Provider>
    )

}

export default DataProvider;