import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import DetailProducts from "./pages/DetailProducts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* routing dinamis, products */}
        <Route path="/product/:id" element={<DetailProducts />} />
      </Routes>
    </BrowserRouter>
  );
}
