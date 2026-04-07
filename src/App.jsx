import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home.jsx";
import Detail from "./assets/pages/Detail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;