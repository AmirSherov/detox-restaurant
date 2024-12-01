import "./FoodPhoto.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function FoodPhoto() {
    const { t } = useTranslation();
    const images = [
        "/images/photofood1.png",
        "/images/photofood2.png",
        "/images/photofood3.png",
        "/images/photofood4.png"
    ]
    return (
        <>
            <div className={"galleryContainer"}>
                <h2 className={"header-images"}>{t("FoodPhoto.text-1")}</h2>
                <div className={"imageGrid"}>
                    {images.map((src, index) => (
                        <div key={index} className={"imageWrapper"}>
                            <Image src={src} alt={`Food ${index + 1}`} layout="responsive" width={300} height={200} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}