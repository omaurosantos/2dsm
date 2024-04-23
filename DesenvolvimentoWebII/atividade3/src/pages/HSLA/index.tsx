import HSLAColor from "../../components/HSLAColor";
import { HSLAProvider } from "../../contexts/HSLAContext";

export default function HSLA() {
  return (
    <HSLAProvider>
        <HSLAColor />
    </HSLAProvider>
  );
}
