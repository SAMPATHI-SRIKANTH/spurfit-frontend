import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import meetLogo from "../../assets/images/aheadmeet.png";

const MeetCard = () => {
  const builtRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      builtRef.current,
      {
        scrollTrigger: {
          trigger: builtRef.current,
          start: "top center",
        },
        duration: 1,
        x: "-100",
        delay: 2,
        opacity: 0,
      },
      { duration: 1, x: 0, delay: 2, opacity: 1 }
    );
  }, []);

  return (
    <div className="bg-[#FEF6F1] w-11/12 mx-auto p-3 mt-5">
      <h1 className="text-4xl font-semibold m-3" ref={builtRef}>
        Built out of frustration
      </h1>
      <h1 className="text-6xl font-bold m-3">Meet the ahead app</h1>
      <div className="flex ">
        <img src={meetLogo} alt="meet-card" className="w-1/2 " />
        <div className="py-12 space-y-4 w-1/2">
          <p className="text-2xl font-sm">
            A personalized pocket coach that provides bitesized,science-driven
            tools to boost emotional intelligence.
          </p>
          <p className="text-2xl font-sm">
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetCard;
