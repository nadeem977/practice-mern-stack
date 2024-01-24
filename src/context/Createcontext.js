import {createContext, useState } from "react";


export const Appcontext = createContext({})

export const CreateContexts = ({children}) =>{

const[settingBar ,setSettinBar] = useState(false)
const[settindTitle , setSettindTitle] = useState('')
const[savetmpl , setSavetmpl] = useState(false)
const[resblockwdt , setResblockwdt] = useState(false)
const[data ,setData]= useState({})


    return(
       <Appcontext.Provider 
      value={{
        data ,setData,
        settingBar ,setSettinBar,
        settindTitle , setSettindTitle,
        savetmpl , setSavetmpl,
        resblockwdt , setResblockwdt
      }}
       >
         {children}
       </Appcontext.Provider>
    )
}

