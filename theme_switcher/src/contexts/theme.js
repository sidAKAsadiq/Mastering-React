import React, { useContext } from "react";
import { createContext } from "react";

                    //deciding all data i.e. var + funcs here only instead of declaring seperatly
export const Theme_context = createContext({
theme : "light",
dark_mode : ()=>{},
light_mode : ()=>{},
toggle_mode : ()=>{}
})

export const Theme_provider = Theme_context.Provider

//custom hook that returns data in context
export default function useTheme(){
    return useContext(Theme_context)
} 

