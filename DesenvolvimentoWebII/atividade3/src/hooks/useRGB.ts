import { useContext } from "react";
import { RGBContext } from "../contexts/RGBContext";

export default function useRGB(){
    return useContext(RGBContext);
}