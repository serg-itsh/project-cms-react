// import { Suspense } from 'react';

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./widgets/Header";
// import Table from "./pages/Table";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";



function App() {
  return (
    <div>
      <>
        <Header />
      
        <Routes>
      
          {/* <Route path="/" element={<Table />} /> */}
          {/* <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} /> */}

          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
         
          </Routes>
       
      </>
    </div>
  );
}

export default App;
