"use client";
import Banner from "@/components/banner";
import Cases from "@/components/cases";
import IntroOverlay from "@/components/introOverlay";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import { homeAnimation } from "@/animations/homeAnimation";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    gsap.to(".main  .container  .row h2", { css: { opacity: 1 } });
    homeAnimation(completeAnimation);
  }, []);

  return (
    <div className="App ">
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
      <Cases />
    </div>
  );
}
