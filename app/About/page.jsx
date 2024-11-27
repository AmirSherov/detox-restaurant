// import "./about.scss";
// import AboutBegin from "./aboutBegin/index.jsx"
// import GastroHistory from "./gastroHistory/index.jsx"
// import GastroEasy from "./gastroEasy/index.jsx"
// import FoodScrool from "../LandingItems/FoodPhoto/index.jsx"
// import FAQ from "../LandingItems/FAQ/index.jsx"
// export default function About() {
//     return (
//         <>
//             <div className="about-container">
//                 <AboutBegin/>
//                 <GastroHistory/>
//                 <GastroEasy/>
//                 <FoodScrool/>
//                 <FAQ/>
//             </div>
//         </>
//     );
// }
'use client';
import { useEffect } from "react";
import "./about.scss";
import AboutBegin from "./aboutBegin/index.jsx";
import GastroHistory from "./gastroHistory/index.jsx";
import GastroEasy from "./gastroEasy/index.jsx";
import FoodScrool from "../LandingItems/FoodPhoto/index.jsx";
import FAQ from "../LandingItems/FAQ/index.jsx";

export default function About() {
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
      <div className="about-container">
        <div className="fade-default">
          <AboutBegin />
        </div>
        <div className="fade-in">
          <GastroHistory />
        </div>
        <div className="fade-in">
          <GastroEasy />
        </div>
          <FoodScrool />
        <div className="fade-in">
          <FAQ />
        </div>
      </div>
    </>
  );
}
