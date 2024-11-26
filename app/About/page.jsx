import "./about.scss";
import AboutBegin from "./aboutBegin/index.jsx"
import GastroHistory from "./gastroHistory/index.jsx"
import GastroEasy from "./gastroEasy/index.jsx"
import FoodScrool from "../LandingItems/FoodPhoto/index.jsx"
import FAQ from "../LandingItems/FAQ/index.jsx"
export default function About() {
    return (
        <>
            <div className="about-container">
                <AboutBegin/>
                <GastroHistory/>
                <GastroEasy/>
                <FoodScrool/>
                <FAQ/>
            </div>
        </>
    );
}