import { Login } from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import { Dashboard } from "./Dashboard";

function App() {
  const [id, setId] = useLocalStorage("id");

  return (
    <div className="App">
      {id ? <Dashboard id={id} /> : <Login onIdsubmit={setId} />}
    </div>
  );
}

export default App;
