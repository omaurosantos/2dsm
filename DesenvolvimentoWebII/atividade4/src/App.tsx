import { RandomProvider } from "./contexts/RandomContext";
import Main from "./pages/Main";

export default function App() {
  return (
    <RandomProvider>
      <Main />
    </RandomProvider>
  );
}

