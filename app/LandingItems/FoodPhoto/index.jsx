import "./FoodPhoto.scss";
import Image from "next/image";

export default function FoodPhoto() {
    const images = [
        "/images/photofood1.png",
        "/images/photofood2.png",
        "/images/photofood3.png",
        "/images/photofood4.png"
    ];

    return (
        <>
            <div className="galleryContainer">
                <h2 className="header">Фото блюд</h2>
                <div className="imageGrid">
                    {images.map((src, index) => (
                        <div key={index} className="imageWrapper">
                            <Image 
                                src={src} 
                                alt={`Food ${index + 1}`} 
                                width={300} 
                                height={200} 
                                style={{ objectFit: "cover" }} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
