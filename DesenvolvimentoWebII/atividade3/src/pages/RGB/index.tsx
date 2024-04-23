import RGBColor from "../../components/RGBColor";
import { RGBProvider } from "../../contexts/RGBContext";

export default function RGB() {
  return (
    <RGBProvider>
        <RGBColor />
    </RGBProvider>
  );
}
