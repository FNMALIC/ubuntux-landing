import Image from "next/image";
import React from "react";
import DemoImage from "../images/phone.png";
import Mask from "../images/Mask.png";

// orange  FCC062, FBB03B
// blue 2A2D9D, 21237B
type Props = {};

const Demo = (props: Props) => {
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold">
        How it all <span className="text-[#FCC062]">works </span>
      </h2>

      <p className="text-center font-semibold mb-8 mt-4">
        As simple as 3 clicks are
      </p>

      <div className="flex md:flex-row flex-col items-center justify-evenly gap-x-8 pt-10">
        <Image src={DemoImage} alt="Demo" width={300} height={300} />
        <Image src={DemoImage} alt="Demo" width={300} height={300} />
      </div>

      <div className="relative mt-5 h-56">
        <div className="bg-gradient-to-tr from-[#2A2D9D] to-[#21237B] absolute lg:-left-20 md:-left-10 -left-5 lg:-right-20 md:-right-10 -right-5 h-full">
          <Image src={Mask} alt="mask" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Demo;
