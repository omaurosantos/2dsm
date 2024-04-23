import { createContext, useState } from "react";
import { HSLAContextProps } from "../types";

export const HSLAContext = createContext({} as HSLAContextProps);

export function HSLAProvider({ children }: any) {
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [lightness, setLightness] = useState(0);
  const [alpha, setAlpha] = useState(0);
  const color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;

  return (
    <HSLAContext.Provider
      value={{
        hue,
        saturation,
        lightness,
        alpha,
        setHue,
        setSaturation,
        setLightness,
        setAlpha,
        color,
      }}
    >
      {children}
    </HSLAContext.Provider>
  );
}
