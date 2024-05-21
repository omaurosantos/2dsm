import { createContext, useEffect, useState } from "react";
import { MenuProps, RandonContextProps } from "../types";
import { darkTheme, lightTheme } from "../styles/theme";


export const RandomContext = createContext({} as RandonContextProps)

export function RandomProvider({children}:MenuProps){
    const[theme,setTheme] = useState(lightTheme);
    const [numbers, setNumbers] = useState<string[]>([])
    
    useEffect(()=>{
        const storage = localStorage.getItem("theme");
        if(storage){
            setTheme(JSON.parse(storage));
        }
        randomize();
    },[])
    
    function toggleTheme (){
        if(theme.name ==="light"){
            setTheme(darkTheme);
            localStorage.setItem("theme",JSON.stringify(darkTheme));
        }
        else{
           setTheme(lightTheme);
           localStorage.setItem("theme", JSON.stringify(lightTheme));
        }
    }
    function randomize(){
        const temp:any[] = [];
        for(let i = 0; i < 6;i++){
            temp[i] = Math.floor(Math.random() * 100)
        }
        temp.sort((a,b)=> a - b);
        for(let i = 0; i < 6;i++){
            temp[i] = temp[i] < 10? "0"+ temp[i]:temp[i].toString();
        }
        setNumbers(temp)
    }
    function increment(index:number){
        const temp:any[] = [...numbers];
        for(let i = 0; i < 6;i++){
            temp[i] = parseInt(temp[i]);
        }
        temp[index]++;
        temp.sort((a,b)=> a-b);
        for(let i = 0; i < 6;i++){
            temp[i] = temp[i] < 10? "0"+ temp[i]:temp[i].toString();
        }
        setNumbers(temp)
    }
    return(
        <RandomContext.Provider value={{increment,numbers,theme,toggleTheme,randomize}}>
            {children}
        </RandomContext.Provider>
    )
}