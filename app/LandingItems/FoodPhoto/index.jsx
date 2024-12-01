import "./FoodPhoto.scss";
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
            <div className={"galleryContainer-food"}>
                <h2 className={"header-images-food"}>{t("FoodPhoto.text-1")}</h2>
                <div className={"imageGrid-food"}>
                    {images.map((src, index) => (
                        <div key={index} className={"imageWrapper-food"}>
                            <img src={src} alt={`Food ${index + 1}`}  width={300}  />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}