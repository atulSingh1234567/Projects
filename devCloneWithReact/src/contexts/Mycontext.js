import React, { createContext, useContext } from "react";

export const HamburgerContext = createContext({showMenu : false , hamClick: ()=>{} , closeHamMenu: ()=>{}});

export const HamburgerContextProv = HamburgerContext.Provider;

export const useHamburgerContext = ()=>{
    return useContext(HamburgerContext);
}