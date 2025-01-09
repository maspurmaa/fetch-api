import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

export default function SectionProducts() {
  // tempat menampung data product
  const [products, setProducts] = useState([]);

  // mendapatkan data product dari
  function getProducts() {
    // Could be GET or POST/PUT/PATCH/DELETE
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      });
  }

  // useEffect mounting, hanya dijalankan sekali
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold py-10">Section Products</h1>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product_satuan) => (
          <Link
            className="border border-gray-900 shadow-sm rounded-xl p-4 hover:bg-gray-100 duration-200  "
            key={product_satuan.id}
            to={`/product/${product_satuan.id}`}
          >
            <img
              src={product_satuan.thumbnail}
              alt=""
              className="hover:scale-110 duration-200 "
            />
            <p>{product_satuan.title} </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
