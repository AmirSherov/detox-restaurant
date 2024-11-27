'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link.js";
import { useParams } from "next/navigation";
import { getProducts } from "../../getProductModule/index.js";
import "./details.scss";

function DetailsPage() {
  const [product, setProduct] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    if (!id) return; 

    const fetchData = async () => {
      try {
        const fetchedProduct = await getProducts(id);
        if (Array.isArray(fetchedProduct) && fetchedProduct.length > 0) {
          setProduct(fetchedProduct[0]); 
        } else {
          setProduct(null); 
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  const { img, text, title } = product;  

  return (
    <div className="details-container">
      <div className="details-content">
        <div className="details-image">
          <img src={img} alt={title || "Product Image"} />
        </div>
        <div className="details-text">
          <p>{text}</p> 
        </div>
      </div>

      <button className="back-button" >
        <Link href="/Blog">Назад</Link>
      </button>
    </div>
  );
}

export default DetailsPage;
