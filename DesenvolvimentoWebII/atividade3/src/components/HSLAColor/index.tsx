import Input from "../Input";
import useHSLA from "../../hooks/useHSLA";
import Title from "../Title";
import Line from "../Line";
import Block from "../Block";

export default function HSLAColor() {
  const {
    hue,
    saturation,
    lightness,
    alpha,
    setHue,
    setSaturation,
    setLightness,
    setAlpha,
    color,
  } = useHSLA();
  
  return (
    <Block color={color}>
      <Title>HSLA - Hue, Saturation, Lightness, Alpha</Title>
      <Line>
        <Input label="Matiz" value={hue} setValue={setHue} min={0} max={360} />
        <Input label="Saturação" value={saturation} setValue={setSaturation} min={0} max={100} />
        <Input label="Luminosidade" value={lightness} setValue={setLightness} min={0} max={100} />
        <Input label="Transparência" value={alpha} setValue={setAlpha} min={0} max={1} />
      </Line>
    </Block>
  );
}