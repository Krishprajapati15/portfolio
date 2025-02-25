"use client";
import Lottie from "lottie-react";
import animation from "@/public/lottie/hero.json";

export default function Face() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-[600px] md:w-[600px] lg:w-[600px]"
        style={{
          height: "auto",
        }}
      >
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
}
