import React from "react";
import preloader from "../assets/preloader.svg";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={preloader} style={{ width: "100px", height: "100px" }} />
    </div>
  );
};

export default Loading;
