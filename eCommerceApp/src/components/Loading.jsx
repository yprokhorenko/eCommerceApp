import React from "react";
import preloader from "../assets/preloader.svg";


const Loading = () => {
  return (
      <div style={{ position: "absolute", left: "550px" }}>
        <img src={preloader} style={{ width: "100px", height: "100px" }} />
      </div>
  );
};

export default Loading;
