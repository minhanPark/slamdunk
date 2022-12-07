import React from "react";
import SlamDunkText from "./SlamDunkText";

const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: "#0d1821",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SlamDunkText />
    </div>
  );
};

export default Loading;
