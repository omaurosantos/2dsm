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
