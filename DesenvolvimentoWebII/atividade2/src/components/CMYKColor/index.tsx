import useCMYK from "../../hooks/useCMYK";
import useHSLA from "../../hooks/useHSLA";
import Block from "../Block";
import Input from "../Input";
import Line from "../Line";
import Title from "../Title";

export default function CMYKColor() {
  const {
    cyan,
    magenta,
    yellow,
    black,
    setCyan,
    setMagenta,
    setYellow,
    setBlack,
    color,
  } = useCMYK();

  return (
    <Block color={color}>
      <Title> CMYK - Cyan, Magenta, Yellow, Black</Title>
      <Line>
        <Input 
        label="Ciano" 
        value={cyan} 
        setValue={setCyan} 
        min={0} 
        max={255} 
        />
        <Input
          label="Magenta"
          value={magenta}
          setValue={setMagenta}
          min={0}
          max={255}
        />
        <Input
          label="Amarelo"
          value={yellow}
          setValue={setYellow}
          min={0}
          max={255}
        />
        <Input
          label="Preto"
          value={black}
          setValue={setBlack}
          min={0}
          max={255}
        />
      </Line>
    </Block>
  );
}
