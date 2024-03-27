import { useEffect, useRef, useState } from "react";
import MainTitle from "./MainTitle";
import people from "../assets/numbers/people.svg";
import note from "../assets/numbers/note.svg";
import location from "../assets/numbers/location.svg";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Numbers() {
  const numbersSection = useRef();
  const router = useLocation();
  const goalsContainer = useRef();
  useEffect(() => {
    if (!router.pathname == "/") {
      return;
    }

    let goals = goalsContainer.current.querySelectorAll(".goal");

    document.addEventListener("scroll", () => {
      if (numbersSection.current && (window.scrollY > numbersSection.current.offsetTop - 700)) {
        goals.forEach((goal) => {
          let goalNumber = parseInt(goal.dataset.target);
          let currentNumber = parseInt(goal.textContent);
          const increment = Math.ceil(goalNumber / 80); // Calculate the increment
          if (currentNumber < goalNumber) {
            setInterval(() => {
              currentNumber += increment;
              if (currentNumber >= goalNumber) {
                currentNumber = goalNumber; // Ensure the final value is exact
              }
              goal.textContent = currentNumber;
            }, 120);
          }
        });
      }
    });
  }, []);
  const { t } = useTranslation();

  return (
    <div ref={numbersSection} className="numbers pt-4 pb-5">
      <MainTitle classes="margin white" color="#fff">
        {t("numbers_section_title")}
      </MainTitle>
      <div
        ref={goalsContainer}
        className="boxes d-flex gap-2 gap-md-5 mt-5 mx-auto"
      >
        <div className="box">
          <img src={note} alt="LOGO" />
          <div className="title goal" data-target="28">
            0
          </div>
          <div className="text">{t("num_1")}</div>
        </div>
        <div className="box">
          <img src={people} alt="LOGO" />
          <div className="title goal" data-target="111035">
            50000
          </div>
          <div className="text">{t("num_2")}</div>
        </div>
        <div className="box">
          <img src={location} alt="LOGO" />
          <div className="title goal" data-target="3">
            0
          </div>
          <div className="text">{t("num_3")}</div>
        </div>
      </div>
    </div>
  );
}
