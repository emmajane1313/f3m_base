"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [time, setTime] = useState<string>("00:00");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateClock = () => {
      const t = Math.floor(video.currentTime);
      const minutes = String(Math.floor(t / 60)).padStart(2, "0");
      const seconds = String(t % 60).padStart(2, "0");
      setTime(`${minutes}:${seconds}`);
    };

    const interval = setInterval(updateClock, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center flex-col justify-between p-4 selection:bg-offBlue selection:text-lightYellow">
      <div className="relative w-full h-fit items-center justify-center sm:justify-between gap-3 flex flex-row text-xl font-york flex-wrap text-center">
        <div
          className="relative w-fit h-fit flex cursor-empireS"
          onClick={() => window.open("https://f3manifesto.xyz/")}
        >
          F3Manifesto
        </div>
        <div className="relative w-fit h-fit flex">& The Machines</div>
      </div>

      <div className="relative w-full h-fit flex flex-col app:flex-row justify-between items-center sm:gap-0 gap-5">
        <div className="relative w-full h-fit items-center flex gap-1 font-firaB text-xs justify-start app:justify-center">
          <div className="relative w-fit h-fit flex flex-col text-left">
            <div className="relative w-fit h-fit flex">100% CC0</div>
            <div className="relative w-fit h-fit flex">100% On-Chain</div>
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-col items-center justify-center">
          <div className="font-air text-sm w-fit h-fit relative text-center">
            I WANT MY WEB3 FASHION
          </div>
          <div className="relative w-fit h-fit flex">
            <video
              draggable={false}
              autoPlay
              poster="/images/f3m.png"
              loop
              ref={videoRef}
              muted
              className="relative flex w-60 h-60 border border-offBlue object-cover"
            >
              <source src="/videos/f3m.mp4" />
            </video>
          </div>
          <div className="font-air text-sm w-fit h-fit relative text-center">
            EST. 2021
          </div>
        </div>
        <div
          className="relative h-full flex flex-col gap-1 w-full font-din text-sm items-end justify-end"
          id="coined"
        >
          <div className="relative font-firaB">{time}</div>
          <div
            className="relative w-fit h-full flex cursor-empireS"
            onClick={() =>
              window.open("https://cypher.digitalax.xyz/autograph/f3manifesto")
            }
          >
            Follow on Lens.
          </div>
          <div
            className="relative w-fit h-full flex cursor-empireS"
            onClick={() => window.open("https://icoinedweb3fashion.com")}
          >
            I Coined Web3 Fashion.
          </div>
        </div>
      </div>

      <div className="relative w-full h-fit items-center sm:items-end justify-center sm:justify-between gap-3 flex flex-col sm:flex-row font-york">
        <div className="font-din text-base w-fit sm:w-40 h-fit text-center sm:text-left">
          Cotton warp, varieties of weft, shuttles, tapestry needle, comb, shed.
        </div>
        <div className="relative text-center sm:text-right flex h-fit text-xs font-din w-fit sm:w-44 flex-col items-center justify-center sm:items-end sm:justify-end">
          <div className="relative w-fit h-fit flex">
            stacking looks and skills. sewing together more useful stuff.
          </div>
          <h1
            className="relative w-fit h-fit flex underline cursor-empireS"
            onClick={() => window.open("https://emmajanemackinnonlee.com/")}
          >
            by Emma-Jane MacKinon-Lee
          </h1>
        </div>
      </div>
    </div>
  );
}
