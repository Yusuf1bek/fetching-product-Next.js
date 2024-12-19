"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const unwrappedParams = use(params);

  useEffect(() => {
    if (unwrappedParams?.id) {
      const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${unwrappedParams.id}`);
        const data = await response.json();
        setProduct(data);
        
      };
      fetchProduct();
    }
  }, [unwrappedParams?.id]);

  if (!product) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="p-6">
      <button
        onClick={() => router.back()}
        className="text-blue-500 hover:underline mb-4"
      >
        Go Back
      </button>
      <div className="w-[800px] mx-auto border-slate-400 rounded-xl border-[1px] p-[20px]">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
      <div className="flex justify-center items-start gap-[30px]">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-80 h-80 object-cover rounded"
        />
        <ul>
            <li className="mb-[15px]">
                <strong className="mb-[5px]">Description</strong>
                <p className="text-gray-700">{product.description}</p>
            </li>
            <li className="flex items-center gap-[7px]">
                <strong className="font-[500] text-[18px]">Category:</strong>
                <p className="text-gray-700">{product.category}</p>
            </li>
            <li className="flex items-center gap-[7px]">
                <strong className="font-[500] text-[18px]">Rating:</strong>
                <p className="text-gray-700">{product.rating}</p>
            </li>
            <li className="flex items-center gap-[7px]">
                <strong className="font-[500] text-[18px]">Stock:</strong>
                <p className="text-gray-700">{product.stock}</p>
            </li>
            <li className="flex items-center gap-[7px]">
                <strong className="font-[500] text-[18px]">Brand:</strong>
                <p className="text-gray-700">{product.brand}</p>
            </li>
            <div className="flex items-center gap-[20px]">
                <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
                <button className="w-[100px] p-[10px] bg-green-500 rounded-lg text-white">Buy now</button>
            </div>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
