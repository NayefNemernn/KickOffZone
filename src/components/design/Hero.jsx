import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assets/svg/PlusSvg";

export const Gradient = () => {
  return (
    <>

      <div className="relative z-1 h-6 mx-2.5 bg-yellow-300 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-yellow-200 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-yellow-500 border-opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2 " />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-yellow-500 border-opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-yellow-500 border-opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-yellow-500 border-opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-yellow-500 border-opacity-30 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
      <div className="absolute bottom-1/2 left-1/2 w-0.2 h-1/2 origin-bottom rotate-[52deg]">
          <img
            src="../../src/assets/hero/ball2.png" 
            alt="ball"
            className={`w-10 h-10 -ml-4 -mt-32 object-contain transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>


        <div className="absolute bottom-1/2 left-1/6 w-0.2 h-1/4 origin-bottom -rotate-0">
          <img
            src="src/assets/logo.png" 
            alt="ball"
            className={`w-20 h-20 -ml-4 -mt-32 object-contain transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.2 h-1/2 origin-bottom rotate-[54deg]">
          <img
            src="../../src/assets/hero/ball1.png" 
            alt="ball"
            className={`hidden w-20 h-20 -ml-4 mt-[12.9rem] object-contain xl:block transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.2 h-1/4 origin-bottom -rotate-[56deg]">
          <img
            src="../../src/assets/hero/ball2.png" 
            alt="ball"
            className={`w-10 h-10 -ml-4 -mt-32 object-contain transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>


        <div className="absolute bottom-1/2 left-1/2 w-0.2 h-1/2 origin-bottom -rotate-[90deg]">
          <img
            src="../../src/assets/hero/ball1.png" 
            alt="ball"
            className={`w-20 h-20 -ml-4 -mt-32 object-contain transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>


        <div className="absolute bottom-1/4 left-1/5 -right-15 w-0.2 h-1/3 origin-bottom -rotate-0">
          <img
            src="src/assets/logo.png" 
            alt="ball"
            className={`w-20 h-20 -ml-4 -mt-32 object-contain transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

      </MouseParallax>
    </div>
  );
};
