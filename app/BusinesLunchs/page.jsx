'use client'
import { useEffect } from "react";
import "./busines.scss"
import Item from "./Item"
import FoodPhoto from "../LandingItems/FoodPhoto"
import Header from "./BusinesMainItem/index.jsx"
export default function BusinesLunchs() {
    useEffect(() => {

        const handleScroll = () => {
            const elements = document.querySelectorAll(".fade-in");

            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top >= 0 && rect.top + 250 <= windowHeight) {
                    if (!element.classList.contains("active")) {
                        element.classList.add("active");
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className="busines-lunch-container">
                <Header />
                <div className="items-container">
                    <div className="fade-in">
                        <Item imagePath="./images/busines1.png" />
                        <Item imagePath="./images/busines2.png" />
                        <Item imagePath="./images/busines1.png" />
                    </div>
                    <div className="fade-in">
                        <Item imagePath="./images/busines2.png" />
                        <Item imagePath="./images/busines1.png" />
                        <Item imagePath="./images/busines2.png" />
                    </div>
                </div>
                <FoodPhoto />
            </div>
        </>
    )
}