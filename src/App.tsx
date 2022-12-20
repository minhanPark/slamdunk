import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";

const images: any = [];

const preloadImages = () => {
  for (let i = 0; i < 344; i++) {
    const img = new Image();
    img.src = `./image/${210 + i}.jpg`;
    images.push(img);
  }
};

preloadImages();

function App() {
  const [loading, setLoading] = useState(true);
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
  return (
    <>
      <Loading isLoading={loading} />
      <div className="aa">
        <h1>지금부터 시작입니다.</h1>
      </div>
    </>
  );
}

export default App;
