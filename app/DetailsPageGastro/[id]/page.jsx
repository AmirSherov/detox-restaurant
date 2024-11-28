'use client';
import { useEffect, useState } from 'react';
import './gastroDetails.scss';
import { getProducts } from "../../geProductGastro/index.js";
import { useParams } from 'next/navigation';
import Header from "../../BusinesLunchs/BusinesMainItem/index.jsx"

export default function GastroDetails() {
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

    return (
        <>
            <div className="details-page-container">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="product-card">
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <div className="product-details">
                            <span>Белки: {product.proteins}</span>
                            <span>Жиры: {product.fats}</span>
                            <span>Углеводы: {product.carbs}</span>
                            <span>{product.calories} ккал</span>
                        </div>
                        <div className="product-price">
                            <span>{product.price} грн / 1 шт</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
