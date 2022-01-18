import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routers } from "./Routes";
import { ContextState } from "./Context/ContextState";

function App() {
  return (
    <div className="App">
      <ContextState>
        <Routers />
      </ContextState>
    </div>
  );
}

export default App;
