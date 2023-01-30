import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const x = [0, 0, 0, 0];
export default function Determinants() {
  const [numbers, setNumbers] = useState(x);
  const [open, setOpen] = useState(false);
  const [read, setRead] = useState(false);
  const [numberShow, setNumberShow] = useState(x);
  const [input, setInput] = useState(true);
  return (
    <>
      <div className="userInputs">
        {numbers.map((number, index) => (
          <input
            value={number}
            onChange={(e) => {
              numbers[index] = e.target.value;
              setNumbers([...numbers]);
            }}
            key={index}
            type="number"
          />
        ))}
      </div>

      {read && (
        <>
          <h1>{numbers.slice(0, 3)}</h1>
          <h1>{numbers.slice(3, 6)}</h1>
        </>
      )}
      <button
        disabled={numbers.length >= 6}
        onClick={() => setNumbers([...numbers, 0, 0], setRead(false))}
        style={{
          width: 100,
          height: 40,
          background: "teal",
          color: "antiquewhite",
        }}
      >
        3x2
      </button>
      <button
        disabled={numbers.length >= 9}
        onClick={() => setNumbers([...numbers, 0, 0, 0, 0, 0], setRead(true))}
        style={{
          width: 100,
          height: 40,
          background: "teal",
          color: "antiquewhite",
        }}
      >
        3x3
      </button>
    </>
  );
}
