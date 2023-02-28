import React, { Children, createContext, useState } from "react";


export const DataContext = createContext({});

const dataFixed = {
  nombre: 'Hernán',
  edad: 26
}


export const DataProvider = ({children} : any) => {

    const [data2, setData2] = useState(dataFixed)   

    return(
      <DataContext.Provider value={{
        data2,
        setData2
      }}>
      {children}  
      </DataContext.Provider>
    )   
}

