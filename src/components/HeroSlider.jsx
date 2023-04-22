import React, { useState } from "react";
import left from "../images/left.svg";
import right from "../images/right.svg";
import "../css/hero-slider-css.css";

import { HeroSliderData } from "./HeroSliderData";

export default function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <section className="slider">

{/* slider */}
      {HeroSliderData.map((slide, index) => {
        return (
          <div
            // className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.img}
                alt="cats"
                // width={250}
                // height={250}
                className="her-carousel-img"
              />
            )}
          </div>
        );
      })}

            {/* arrow */}
            <div className="carousel-arrow">
        <img src={left} className="left-arrow" onClick={prevSlide} />
        <img src={right} className="right-arrow" onClick={nextSlide} />
      </div>
    </section>
  );
}
