import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Finance from "./finance/Finance";
import Program from "./program/Program";
import Sidebar from "./template/sidebar";
import ProgramSubPage from "./program/programSub";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="Program" element={<Program />} />
          <Route path="Program/:exhibitId" element={<ProgramSubPage />} />
          <Route path="Finance" element={<Finance />} />
          <Route path="About" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}