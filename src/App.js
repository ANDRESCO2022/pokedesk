
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Pokedesk from "./Components/Pokedesk";
import PokedeskId from "./Components/PokedeskId";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedesk" element={<Pokedesk />} />
            <Route path="/pokedesk/:id" element={<PokedeskId />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
