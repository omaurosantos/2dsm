import { useEffect } from "react";
import loteria from "./services/Loteria";
import { Provider } from "./contexts";
import Principal from "./pages/Principal";

export default function App() {

  return (
    <Provider>
      <Principal/>
    </Provider>
  );
}