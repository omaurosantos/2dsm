import { useContext } from "react";
import { HSLAContext } from "../contexts/HSLAContext";

export default function useHSLA(){
    return useContext(HSLAContext);
}