import React, { useState, useRef, useEffect } from "react";
import "./Geogra.scss";
const removeElementAtIndex = (array, element) => {
  const elementIndex = array.indexOf(element);
  return [...array.slice(0, elementIndex), ...array.slice(elementIndex + 1)];
};
const data = [
  {
    question: "Unde se afla Campia Londrei?",
    variants: [
      { text: "Italia", isCorect: false, selectable: true },
      { text: "Franta", isCorect: false, selectable: true },
      { text: "Marea Britanie", isCorect: true, selectable: true },
    ],
  },
  {
    question: "Unde se afla Muntii Apenini?",
    variants: [
      { text: "Marea Britanie", isCorect: false, selectable: true },
      { text: "Romania", isCorect: false, selectable: true },
      { text: "Italia", isCorect: true, selectable: true },
    ],
  },
  {
    question: "Unde se afla Muntii Anzi?",
    variants: [
      { text: "Marea Britanie", isCorect: false, selectable: true },
      { text: "SUA", isCorect: false, selectable: true },
      { text: "Italia", isCorect: true, selectable: true },
    ],
  },
];
export default function Geography() {
  // const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState([]);
  const [correctAnswers, setCorectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  function getCorect() {
    const hasCorrectAnswer = data[initialIndex].variants.every((variant) => {
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
    setInitialIndex(initialIndex + 1);
  }

  // useEffect(() => {
  //   fetch("http://localhost:3001/questions")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);

  return (
    <>
      <div className="App">
        <div className="counter">
          <h3 style={{ color: "red", fontSize: 25 }}>{wrongAnswers}</h3>
          <h3 style={{ color: "green", fontSize: 25 }}>{correctAnswers}</h3>
        </div>
        <div className="question">
          <h1>{data[initialIndex]?.question}</h1>
        </div>

        <div className="variants">
          {data[initialIndex]?.variants.map((e, index) => (
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
        {initialIndex === data.length && (
          <h1 style={{ alignSelf: "center", textAlign: "center" }}>
            Scorul tau este
            <br />
            {(correctAnswers / data.length) * 100}%
          </h1>
        )}

        <div className="buttons">
          <button
            style={{ backgroundColor: "antiquewhite", color: "green" }}
            className="btn"
            onClick={() => window.location.reload()}
            // disabled={initialIndex === 0}
          >
            Restart Test
          </button>
          <button
            className="btn"
            onClick={() => getCorect()}
            disabled={initialIndex === data.length}
          >
            TRIMITE
          </button>
          <h1></h1>
        </div>
      </div>
    </>
  );
}
