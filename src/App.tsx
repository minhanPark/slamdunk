import React, { useEffect, useRef, useState } from "react";
import Loading from "./components/Loading";

// 이미지 계산
// 1019 - 1307 / 1332 - 1355 / 1381  - 1404 / 1428 - 1451 / 1476 - 1668
// 299         /  24         / 24           / 24          / 192

interface FrameType {
  frame: number;
  startNumber: number;
}

const sceneInfo = [{ heightNum: 5, scrollHeight: 0 }];
const images: any = [];
const frames: FrameType[] = [
  { frame: 299, startNumber: 1019 },
  { frame: 24, startNumber: 1332 },
  { frame: 24, startNumber: 1381 },
  { frame: 24, startNumber: 1428 },
  { frame: 192, startNumber: 1476 },
];

const pushImage = ({
  frame,
  startNumber,
}: {
  frame: number;
  startNumber: number;
}): void => {
  for (let i = 0; i < frame; i++) {
    const img = new Image();
    img.src = `./image/${startNumber + i}.jpg`;
    images.push(img);
  }
};

const preloadImages = () => {
  frames.map((frameInfo) =>
    pushImage({ frame: frameInfo.frame, startNumber: frameInfo.startNumber })
  );
};

preloadImages();

function App() {
  const [loading, setLoading] = useState(true);
  const containerWrapper = useRef<HTMLDivElement>(null);
  console.log(images);
  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  useEffect(() => {
    sceneInfo[0].scrollHeight = window.innerHeight * sceneInfo[0].heightNum;
    if (containerWrapper.current) {
      containerWrapper.current.style.height = `${sceneInfo[0].scrollHeight}px`;
    }
  }, []);
  return (
    <>
      <Loading isLoading={loading} />
      <div ref={containerWrapper}>
        <h1>지금부터 시작입니다.</h1>
      </div>
    </>
  );
}

export default App;
