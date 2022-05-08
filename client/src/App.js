import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "pages/home/Home";
import Write from "pages/write/Write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
