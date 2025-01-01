import Image from "next/image";
import React from "react";
import Vector from "@/components/Reilverse_Assets/Vector.svg";

function Back() {
  return (
    <div className="inset-0 absolute z-[-999] bg-gradient-to-b from-[rgba(26,85,158,255)] to-transparent">
      <div className="absolute top-0 right-0">
        <Image src={Vector} alt="Vector" width={650} height={0} />
      </div>
      <div className="absolute -top-10 ">
        <Image src="LogoVector.svg" alt="LogoVector" width={700} height={0} />
      </div>
    </div>
  );
}

export default Back;
