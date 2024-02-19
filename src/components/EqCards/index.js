import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import EqLogos from "../../assets/images/aheadlogo.png";
const EqCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    gsap.to(".boxes", {
      x: -400,
      opacity: 1,
      scrollTrigger: {
        trigger: ".boxes",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      duration: 2,
      delay: 1.5,
    });
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const Card = ({ cardDetails }) => {
    const { title, description, color } = cardDetails;
    return (
      <div
        className={`min-w-80 mx-auto mt-5 rounded  shadow-lg box`}
        style={{ backgroundColor: color }}
      >
        <div className="px-6 py-4">
          <img src={EqLogos} alt="eq-card-logos" className="w-10 mb-2" />
          <h1 className="font-bold text-xl mb-2">{title}</h1>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="overflow-x-scroll no-scrollbar">
      <div className="w-full flex flex-nowra space-x-8  boxes">
        {data.map((eachCard) => (
          <Card key={eachCard.id} cardDetails={eachCard} />
        ))}
      </div>
    </div>
  );
};

export default EqCards;
