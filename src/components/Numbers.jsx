import { useEffect, useRef, useState } from "react";
import MainTitle from "./MainTitle";
import people from '../assets/numbers/people.svg'
import note from '../assets/numbers/note.svg'
import location from '../assets/numbers/location.svg'
import { useLocation } from "react-router-dom";

export default function Numbers() {
  const numbersSection = useRef();
  const router = useLocation()

  useEffect(() => {
    const goals = document.querySelectorAll(".goal")
    if(!router.pathname == "/") {
      return;
    }

    document.addEventListener('scroll', () => {
      if (window.scrollY > numbersSection.current.offsetTop - 700) {
        goals.forEach(goal => {
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
        })
      }
    })
  }, [])

  return (
    <div ref={numbersSection} className="numbers pt-4 pb-5">
      <MainTitle classes="margin white" color="#fff">الأوقاف في أرقام</MainTitle>
      <div className="boxes d-flex gap-2 gap-md-5 mt-5 mx-auto">
        <div className="box">
          <img src={note} alt="LOGO" />
          <div className="title goal" data-target="28">0</div>
          <div className="text">عدد سنوات الوقف</div>
        </div>
        <div className="box">
          <img src={people} alt="LOGO" />
          <div className="title goal" data-target="111035">50000</div>
          <div className="text">عدد اجمالي الحجاج</div>
        </div>
        <div className="box">
          <img src={location} alt="LOGO" />
          <div className="title goal" data-target="3">0</div>
          <div className="text">عدد الاوقاف</div>
        </div>
      </div>
    </div>
  );
}