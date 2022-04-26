import _ from "lodash";
import { useState } from "react";

// Components
import Icon from "../../icons";
import Section from "../common/Section";
import HTMLParser from "../helper/HTMLParser";

// Data
import { service } from "../../data";

const Services: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);

  const selectHandler = (i: number) => {
    setSelected(i);
  };

  return (
    <Section title={service.title} className="bg-sectionBG">
      <div className="flex">
        <div className="w-1/2 px-10">
          <ul>
            {_.map(service.services, (item, i) => {
              return (
                <li
                  key={i}
                  className={`border border-border cursor-pointer flex items-center justify-between my-7 px-15 py-10 rounded-4 ${
                    selected === i
                      ? "bg-black text-white"
                      : "bg-serviceTab hover:bg-white"
                  }`}
                  onClick={() => selectHandler(i)}
                >
                  {item.title}
                  <Icon name="angle-right" height="18" width="18" />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-1/2 px-10">
          <h3 className="text-24 mb-10">{service.services[selected].title}</h3>
          <HTMLParser>{service.services[selected].desc}</HTMLParser>
        </div>
      </div>
    </Section>
  );
};

export default Services;
