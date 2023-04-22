import React from "react";
import { useState } from "react";
import "../css/services-styles.css";
import up from "../images/accordian_up.svg";
import down from "../images/accordian_down.svg";

export default function Accordian({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="acc">
            <h2 className="acc-heading">{title}</h2>
            <div className={isExpanded ? "icon expanded" : "icon"}>
              {isExpanded ? (
                <img src={up} alt="up" className="accordian_arrow" />
              ) : (
                <img src={down} alt="up" className="accordian_arrow" />
              )}
            </div>
          </div>
        </div>
        {isExpanded && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
}
