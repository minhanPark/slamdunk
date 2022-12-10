import React from "react";
import SlamDunkText from "./SlamDunkText";
import styled from "styled-components";

const Background = styled.div`
  background-color: "#0d1821";
  height: "100vh";
  display: "flex";
  justify-content: "center";
  align-items: "center";
`;

const Loading = () => {
  return (
    <Background>
      <SlamDunkText />
    </Background>
  );
};

export default Loading;
