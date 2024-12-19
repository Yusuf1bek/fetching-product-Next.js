"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); 
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      <div className="flex items-center flex-wrap gap-[30px] justify-center">
        {products.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="border w-[300px] rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer duration-300"
            onClick={() => router.push(`/product/${product.id}`)}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-[300px] h-30 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleSeeMore}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 duration-300"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
