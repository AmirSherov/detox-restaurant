'use client';
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getProducts } from "../../getProductBlog/index.js";
import "./details.scss";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
function DetailsPage() {
  const [product, setProduct] = useState(null); 
  const { id } = useParams();
  const { t } = useTranslation();
  const router = useRouter();
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

      <button onClick={() => router.push("/Blog")} className="back-button" >
        {t("DetailsPageBlog.text-1")}
      </button>
    </div>
  );
}

export default DetailsPage;
