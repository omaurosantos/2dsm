import { useContext } from "react";
import { CMYKContext } from "../contexts/CMYKContext";

export default function useCMYK(){
    return useContext(CMYKContext);
}