import React from "react";
import SlamDunkText from "./SlamDunkText";
import classNames from "classnames";

interface Props {
  isLoading: boolean;
}

const Loading = ({ isLoading }: Props) => {
  return (
    <div
      className={classNames(
        "bg-[#0d1821] h-screen flex justify-center items-center transition-opacity duration-1000 ease-in",
        { "opacity-100": isLoading, "opacity-0": !isLoading }
      )}
    >
      <SlamDunkText />
    </div>
  );
};

export default Loading;
