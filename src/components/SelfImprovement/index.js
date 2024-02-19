import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//   <VerticalTimeline layout="1-column-left">
//     <VerticalTimelineElement
//       className="vertical-timeline-element--work"
//       date="2010 - 2011"
//       iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//       icon={<WorkIcon />}
//     >
//       <h3 className="vertical-timeline-element-title font-bold text-xl">
//         It's not as easy as 1-2-3.
//       </h3>
//       <p>
//         The journey of cahnge may be long. Lorem ipsum dolor sit amet,
//         consectetur adipisicing elit. Incidunt ullam repudiandae aspernatur
//         sequi veniam mollitia explicabo totam beatae enim accusamus, quam non
//         maxime!
//       </p>
//     </VerticalTimelineElement>
//     <VerticalTimelineElement
//       className="vertical-timeline-element--work"
//       date="2008 - 2010"
//       iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//       icon={<WorkIcon />}
//     >
//       <h3 className="vertical-timeline-element-title font-bold text-xl">
//         It's not as easy as 1-2-3.
//       </h3>
//       <p>
//         The journey of cahnge may be long. Lorem ipsum dolor sit amet,
//         consectetur adipisicing elit. Incidunt ullam repudiandae aspernatur
//         sequi veniam mollitia explicabo totam beatae enim accusamus, quam non
//         maxime!
//       </p>
//     </VerticalTimelineElement>
//     <VerticalTimelineElement
//       className="vertical-timeline-element--work"
//       date="2006 - 2008"
//       iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//       icon={<WorkIcon />}
//     >
//       <h3 className="vertical-timeline-element-title font-bold text-xl">
//         It's not as easy as 1-2-3.
//       </h3>
//       <p>
//         The journey of cahnge may be long. Lorem ipsum dolor sit amet,
//         consectetur adipisicing elit. Incidunt ullam repudiandae aspernatur
//         sequi veniam mollitia explicabo totam beatae enim accusamus, quam non
//         maxime!
//       </p>
//     </VerticalTimelineElement>
//     <VerticalTimelineElement
//       className="vertical-timeline-element--education"
//       date="April 2013"
//       iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//       icon={<WorkIcon />}
//     >
//       <h3 className="vertical-timeline-element-title font-bold text-xl">
//         It's not as easy as 1-2-3.
//       </h3>
//       <p>
//         The journey of cahnge may be long. Lorem ipsum dolor sit amet,
//         consectetur adipisicing elit. Incidunt ullam repudiandae aspernatur
//         sequi veniam mollitia explicabo totam beatae enim accusamus, quam non
//         maxime!
//       </p>
//     </VerticalTimelineElement>

//     <VerticalTimelineElement
//       iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
//       icon={<WorkIcon />}
//     />
//   </VerticalTimeline>
// );

const Timeline1 = () => {
  return (
    <VerticalTimeline layout="1-column-left">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          left: "10px",
        }}
        lineColor="black"
      >
        <h3 className="vertical-timeline-element-title font-bold text-xl">
          It's not as easy as 1-2-3.
        </h3>
        <p>
          The journey of cahnge may be long. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Incidunt ullam repudiandae aspernatur
          sequi veniam mollitia explicabo totam beatae enim accusamus, quam non
          maxime!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          left: "10px",
        }}
        lineColor="black"
      >
        <h3 className="vertical-timeline-element-title text-xl font-bold">
          It's not as easy as 1-2-3.
        </h3>
        <p>
          The journey of cahnge may be long. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Incidunt ullam repudiandae aspernatur
          sequi veniam mollitia explicabo totam beatae enim accusamus, quam non
          maxime!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          left: "10px",
        }}
        lineColor="black"
      >
        <h3 className="vertical-timeline-element-title text-xl font-bold">
          It's not as easy as 1-2-3.
        </h3>
        <p>
          The journey of cahnge may be long. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Incidunt ullam repudiandae aspernatur
          sequi veniam mollitia explicabo totam beatae enim accusamus, quam non
          maxime!
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

const SelfImprovement = () => {
  return (
    <div className="bg-slate-400 py-10 px-7">
      <h1 className="text-2xl font-medium mb-2">
        Wrong with self-improvement & how we're fixing it.
      </h1>
      <h1 className="text-6xl font-bold text-black mb-3">
        Self-improvement. Ugh
      </h1>
      <Timeline1 />
    </div>
  );
};

export default SelfImprovement;
