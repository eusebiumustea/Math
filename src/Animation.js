import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
export default function Animation() {
  const [expand, setExpand] = useState(false);

  const props = useSpring({
    width: expand ? 500 : 50,
    height: expand ? 600 : 50,
    borderRadius: expand ? 0 : 50,
  });

  return (
    <div className="frame">
      <animated.img
        className={"animation"}
        style={props}
        alt=""
        src="https://www.travelsewhere.net/wp-content/uploads/2017/03/DSC_0531-2-1024x683.jpg"
        onClick={() => setExpand(!expand)}
      />
    </div>
  );
}
