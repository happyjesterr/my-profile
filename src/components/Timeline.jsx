import { timeline } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        {timeline.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={{ background: item.background, color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid ${item.background}` }}
            date={item.date}
            iconStyle={{ background: item.background, color: "#fff" }}
            icon={item.icon}
          >
            <h1 className="vertical-timeline-element-title glow text-2xl font-bold tracking-wider  leading-[1.6]">
              {item.head_title}
            </h1>
            <h4 className="vertical-timeline-element-subtitle !my-2  font-medium">
              {item.subtitle}
            </h4>
            <hr className="   w-full    opacity-25  my-2" />
            <p className=" text-sm md:text-base !leading-[1.8]">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
