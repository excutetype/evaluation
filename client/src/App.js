import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "pages/home/Home";
import Login from "pages/entry/Login";
import Register from "pages/entry/Register";
import Write from "pages/write/Write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
