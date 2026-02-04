import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/home.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<div>About</div>} />
    </Routes>
  );
}

export default App
