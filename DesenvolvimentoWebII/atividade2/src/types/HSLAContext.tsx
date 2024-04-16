export interface HSLAContextProps {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
    setHue: (value:number) => void;
    setSaturation: (value:number) => void;
    setLightness: (value:number) => void;
    setAlpha: (value:number) => void;
    color: string;
}
