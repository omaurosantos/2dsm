export interface RGBContextProps {
    r: number;
    g: number;
    b: number;
    setR: (value:number) => void;
    setG: (value:number) => void;
    setB: (value:number) => void;
    color: string;
}

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

export interface InputProps {
    label: string;
    value: number;
    setValue: (value:number) => void;
    min: number;
    max: number;
}

export interface CMYKContextProps {
    cyan: number;
    magenta: number;
    yellow: number;
    black: number;
    setCyan: (value:number) => void;
    setMagenta: (value:number) => void;
    setYellow: (value:number) => void;
    setBlack: (value:number) => void;
    color: string;
}
