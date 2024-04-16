export interface RGBContextProps {
    r: number;
    g: number;
    b: number;
    setR: (value:number) => void;
    setG: (value:number) => void;
    setB: (value:number) => void;
    color: string;
}
