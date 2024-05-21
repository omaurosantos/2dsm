import { ReactNode } from "react";

export interface ThemeProps {
    name: string;
    bgMain: string;
    button: {
        bg: string;
        text: string;
        bgHover: string;
    }
}  
export interface RandonContextProps {
    theme: ThemeProps;
    toggleTheme: () => void;
    randomize: () => void;
    numbers: any[];
    increment: (value:number) => void;
}
export interface ButtonProps {
    children: ReactNode;
    action: () => void;
}
export interface MenuProps {
    children: ReactNode;
}