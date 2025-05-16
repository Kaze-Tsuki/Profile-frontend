import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Finance from "./pages/Finance";
import Program from "./pages/Program";
import Sidebar from "./controls/sidebar";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="Program" element={<Program />} />
          <Route path="Finance" element={<Finance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}