import { gsap } from "gsap";
import { useEffect } from "react";
import eqLogo from "../../assets/images/aheadlogo.png";
import EqCards from "../EqCards";
const EqSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".heading",
      { duration: "1", x: "-100%" },
      {
        scrollTrigger: {
          trigger: ".heading",
          start: "top center",
        },
        duration: "3",
        x: "20",
      }
    );
  }, []);

  return (
    <div className=" p-6 ">
      <div className="flex ">
        <h1 className="w-1/3 text-xl font-semibold">EQ beats IQ</h1>
        <div className="w-1/3">
          <p>
            People with high emotional intelligence(EQ) live more fulfilled
            lives.They tend to be happier and have healthier relationships.
          </p>
        </div>
        <div className="w-1/3">
          <p>
            People with high emotional intelligence(EQ) live more fulfilled
            lives.They tend to be happier and have healthier relationships.
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-semibold my-5 heading">
        Does this sound familiar...&nbsp;
        <img src={eqLogo} alt="sound" className="w-8 inline " />
      </h1>
      <EqCards />
    </div>
  );
};

export default EqSection;
