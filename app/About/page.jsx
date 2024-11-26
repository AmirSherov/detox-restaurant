import "./about.scss";
import AboutBegin from "./aboutBegin/index.jsx"
import GastroHistory from "./gastroHistory/index.jsx"
export default function About() {
    return (
        <>
            <div className="about-container">
                <AboutBegin/>
                <GastroHistory/>
            </div>
        </>
    );
}