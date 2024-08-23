import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layouts from "./layouts/Layouts";
import ProductList from "./pages/ProductList";
import FormValide from "./pages/form/FormValide";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<ProductList />} />
            <Route path="contact" element={<FormValide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
