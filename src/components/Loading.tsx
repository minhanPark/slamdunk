import React, { useEffect, useRef, useState } from "react";
import SlamDunkText from "./SlamDunkText";
import classNames from "classnames";

interface Props {
  isLoading: boolean;
}

const Loading = ({ isLoading }: Props) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState(true);
  const hide = () => {
    setIsShow(false);
  };
  useEffect(() => {
    if (backgroundRef && backgroundRef.current) {
      backgroundRef.current.addEventListener("transitionend", hide);

      return () => {
        backgroundRef.current?.removeEventListener("transitionend", hide);
      };
    }
  }, [backgroundRef]);
  if (!isShow) return null;
  return (
    <div
      ref={backgroundRef}
      className={classNames(
        "bg-[#0d1821] h-screen flex justify-center items-center transition-opacity duration-[4000ms] ease-in absolute w-full",
        { "opacity-100": isLoading, "opacity-0": !isLoading }
      )}
    >
      <SlamDunkText />
    </div>
  );
};

export default Loading;
