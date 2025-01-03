import { useEffect } from "react";
import { useState } from "react";

export default function SectionProducts() {
  // tempat menampung data product
  const [products, setProducts] = [];

  // mendapatkan data product dari
  function getProducts() {
    // Could be GET or POST/PUT/PATCH/DELETE
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  // useEffect mounting, hanya dijalankan sekali
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h1 className=" font-bold">Section Products</h1>

      <div className="grid grid-cols-4 gap-4">
        <p>Nama Produk</p>
      </div>
    </div>
  );
}
