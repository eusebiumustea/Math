import React, { useState, useRef } from "react";
import "./Geogra.scss";
import { useSpring, animated } from "@react-spring/web";
const data = [
  {
    question: "Unde se afla Campia Londrei?",
    variants: [
      { text: "Italia", isCorect: false, selectable: true },
      { text: "Franta", isCorect: false, selectable: true },
      { text: "Marea Britanie", isCorect: true, selectable: true },
    ],
  },
];

const removeElementAtIndex = (array, element) => {
  const elementIndex = array.indexOf(element);
  return [...array.slice(0, elementIndex), ...array.slice(elementIndex + 1)];
};
export default function Geography() {
  const [open, setOpen] = useState(false);

  const [selectedVariant, setSelectedVariant] = useState([]);
  const [correctAnswers, setCorectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  function getCorect() {
    const hasCorrectAnswer = data[0].variants.every((variant) => {
      if (!variant.isCorect) {
        return !selectedVariant.includes(variant);
      }
      return selectedVariant.includes(variant);
    });

    if (hasCorrectAnswer) {
      setCorectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
    setSelectedVariant([]);
  }

  return (
    <>
      <div className="App">
        <div className="counter">
          <h3 style={{ color: "red", fontSize: 25 }}>{wrongAnswers}</h3>
          <h3 style={{ color: "green", fontSize: 25 }}>{correctAnswers}</h3>
        </div>
        {data.map((e) => (
          <div className="question">
            <h1>{e.question}</h1>
          </div>
        ))}

        <div className="variants">
          {data[0].variants.map((e, index) => (
            <>
              {!selectedVariant.includes(e) && (
                <button
                  key={e.text}
                  className={"box"}
                  onClick={() => setSelectedVariant([...selectedVariant, e])}
                >
                  <h1>{e.text}</h1>
                </button>
              )}
              {selectedVariant.includes(e) && (
                <button
                  key={index}
                  className={"boxSelected"}
                  onClick={() =>
                    setSelectedVariant(removeElementAtIndex(selectedVariant, e))
                  }
                >
                  <h1>{e.text}</h1>
                </button>
              )}
            </>
          ))}
        </div>

        <div className="buttons">
          <button className="btn" onClick={() => getCorect()}>
            TRIMITE
          </button>
          <h1></h1>
        </div>
      </div>
    </>
  );
}
