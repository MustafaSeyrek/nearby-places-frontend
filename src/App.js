import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Map from "./components/Map/Map";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
