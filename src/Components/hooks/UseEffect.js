import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);
  useEffect(() => {
    document.title = `Add effect on Title(${myNum})`;
  });

  return (
    <>
      <div className="center_div">
        <p>Use Effect {myNum}</p>
        <div
          className="button2"
          onClick={() => (myNum < 10 ? setMyNum(myNum + 1) : setMyNum(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
