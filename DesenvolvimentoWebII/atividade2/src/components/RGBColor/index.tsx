import useRGB from "../../hooks/useRGB";
import Block from "../Block";
import Input from "../Input";
import Line from "../Line";
import Title from "../Title";

export default function RGBColor (){
    const {r,g,b,setR,setG,setB,color} = useRGB();
    return (
        <Block color={color}>
            <Title> RGB - Red, Green, Blue</Title>
            <Line>
                <Input label="R" value={r} setValue={setR} min={0} max={255}/>
                <Input label="G" value={g} setValue={setG} min={0} max={255}/>
                <Input label="B" value={b} setValue={setB} min={0} max={255}/>
            </Line>
        </Block>
    )
}