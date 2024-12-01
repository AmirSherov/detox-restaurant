'use client';
import { useEffect, useState } from 'react';
import './gastroDetails.scss';
import { getProducts } from "../../geProductGastro/index.js";
import { useParams } from 'next/navigation';
import Header from "../../BusinesLunchs/BusinesMainItem/index.jsx"
import { useTranslation } from "react-i18next";
export default function GastroDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const { t } = useTranslation();
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

    return (
        <>
        <Header/>
            <div className="details-page-container-gastro">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="product-card-gastro">
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <div className="product-details-gastro">
                            <span>{t("DetailsPageGastro.text-1")} {product.proteins}</span>
                            <span>{t("DetailsPageGastro.text-2")} {product.fats}</span>
                            <span>{t("DetailsPageGastro.text-3")} {product.carbs}</span>
                            <span>{product.calories} {t("DetailsPageGastro.text-4")}</span>
                        </div>
                        <div className="product-price-gastro">
                            <span>{product.price} {t("DetailsPageGastro.text-5")}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
