import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/home.tsx";
import Layout from "./components/layout.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Layout><div>about</div></Layout>} />
    </Routes>
  );
}

export default App
