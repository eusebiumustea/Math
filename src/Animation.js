import React, { useState } from "react";
import { animated, useTransition, useSpringRef } from "@react-spring/web";
export default function Animation() {
  const [expand, setExpand] = useState(false);
  const springRef = useSpringRef(1, 2, 3);
  const [transition, api] = useTransition(springRef, () => ({
    ref: springRef,
    from: {
      width: 50,
      height: 50,
      borderRadius: 50,
      position: "absolute",
      bottom: 50,
    },
    enter: {
      width: 500,
      height: 600,
      borderRadius: 0,
      position: "relative",
    },
    leave: {
      width: 500,
      height: 600,
      borderRadius: 0,
      position: "relative",
    },
  }));
  //   const [animation, api] = useSpring(
  //     {
  //       from: {
  //         width: 50,
  //         height: 50,
  //         borderRadius: 50,
  //         position: "absolute",
  //         bottom: 50,
  //       },
  //       to: { width: 500, height: 600, borderRadius: 0, position: "relative" },
  //     },
  //     []
  //   );
  return (
    <animated.div className="frame">
      {/* <animated.div
        style={{ width: 50, height: 50, borderRadius: 50 }}
        onClick={() => setExpand(true)}
      >
        <animated.img
          alt=""
          src="https://www.travelsewhere.net/wp-content/uploads/2017/03/DSC_0531-2-1024x683.jpg"
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
      </animated.div> */}
      <animated.img
        alt=""
        src="https://www.travelsewhere.net/wp-content/uploads/2017/03/DSC_0531-2-1024x683.jpg"
        style={
          expand
            ? { display: "none" }
            : {
                width: 50,
                height: 50,
                borderRadius: 50,
                position: "absolute",
                opacity: 1,
                backgroundColor: "red",
              }
        }
        onClick={() => setExpand(true)}
      />
      {expand && (
        <animated.img
          className={"animation"}
          style={transition}
          alt=""
          src="https://www.travelsewhere.net/wp-content/uploads/2017/03/DSC_0531-2-1024x683.jpg"
          onDragEnd={() => setExpand(false)}
        />
      )}
    </animated.div>
  );
}
