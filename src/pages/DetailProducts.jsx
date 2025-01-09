/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/block/Navbar";
import Footer from "../components/block/Footer";
export default function DetailProducts() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  //   function get product detail
  function getProductDetail() {
    // Could be GET or POST/PUT/PATCH/DELETE
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }

  useEffect(() => {
    // jalankan fungsi getProducts
    getProductDetail();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container flex justify-items-start gap-4 py-10 h-screen">
        <div className="h-1/2 w-1/2 flex justify-center items-center">
          {product.images
            ? product.images.map((image, index) => (
                <img
                  className="object-cover hover:scale-110 duration-200 "
                  key={index}
                  src={image}
                  alt=""
                />
              ))
            : "Kosong"}
        </div>

        <div className="">
          <h1 className="font-bold text-3xl">{product.title}</h1>
          <div className="flex justify-start gap-5">
            <p>⭐ {product.rating} </p>
            <p>Stock : {product.stock}</p>
          </div>
          <h2 className="font-bold text-3xl">${product.price}</h2>
          <p>{product.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
