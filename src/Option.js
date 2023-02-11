import React, { useState, useRef } from "react";
import "./Geogra.scss";
import { useSpring, animated, to } from "@react-spring/web";
import { useDrag, useGesture } from "@use-gesture/react";
export default function Option(props) {
  const [rev, setReverse] = useState(true);
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,

    delay: 0,
    immediate: true,
  }));
  const imgMove = useGesture({
    onDrag: ({ down, offset: [x, y] }) =>
      api.start(
        {
          x,
          y,
          immediate: down,
        },
        HeightAdd()
      ),
  });
  const [imageWidth, changeWidth] = useState(400);
  const [imageHeight, changeHeight] = useState(200);

  function WidthAdd() {
    return changeWidth(imageWidth + 1);
  }
  function HeightAdd() {
    return changeHeight(-imageHeight + 1);
  }
  return (
    <>
      <animated.div
        className="top&bottom"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: imageHeight,
          position: "relative",
        }}
      >
        <animated.div
          className="topBar"
          style={{
            width: imageWidth,
            height: 10,
            background: "red",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <animated.div
            style={{
              width: 10,
              height: 10,
              background: "blue",
            }}
          />

          <animated.div
            style={{
              width: 10,
              height: 10,
              background: "blue",
            }}
          />
        </animated.div>
        <animated.div
          className="bottomBar"
          style={{
            width: imageWidth,
            height: 10,
            background: "red",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <animated.div
            style={{
              width: 10,
              height: 10,
              background: "blue",
            }}
          />

          <animated.div
            style={{
              width: 10,
              height: 10,
              background: "blue",
            }}
          />
        </animated.div>
      </animated.div>
      <animated.div
        className="left&right"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: imageWidth,
          translateY: -imageHeight + 10,
          height: imageHeight,
        }}
      >
        <animated.div
          className="leftBar"
          style={{
            width: 10,
            height: imageHeight - 20,
            background: "red",
            cursor: "e-resize",
          }}
        />
        <animated.div
          className="rightBar"
          style={{
            width: 10,
            height: imageHeight - 20,
            background: "red",
            cursor: "e-resize",
          }}
        />
      </animated.div>
      <animated.div
        style={{
          width: 50,
          height: 50,
          background: "blue",
          x,
          y,
        }}
        {...imgMove()}
      />
      <img style={{ width: imageWidth, height: imageHeight }} />
    </>
  );
}
