import { createContext, useState } from "react";
import { RGBContextProps } from "../types";

export const RGBContext = createContext({} as RGBContextProps);

export function RGBProvider({ children }: any) {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  const color = `rgb(${r}, ${g}, ${b})`;

  return (
    <RGBContext.Provider value={{ r, g, b, setR, setG, setB, color }}>
      {children}
    </RGBContext.Provider>
  );
}
