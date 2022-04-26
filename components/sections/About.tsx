import _ from "lodash";

// Components
import Section from "../common/Section";
import HTMLParser from "../helper/HTMLParser";

// Data
import { about } from "../../data";

const About: React.FC = () => {
  return (
    <Section title="about us">
      <h1 className="mb-20 text-30 px-10">{about.heading}</h1>
      <div className="flex">
        <div className="w-1/2 px-10">
          <p className="text-16 lineHeight-24 text-justify">
            <HTMLParser>{about.desc}</HTMLParser>
          </p>
        </div>

        <div className="w-1/2 px-10">
          <ul>
            {_.map(about.skills, (item, i) => {
              return (
                <li className="flex items-center mb-20" key={i}>
                  <h3 className="min-w-100">{item.name}</h3>
                  <div className="w-full shadow-progressBG h-20 overflow-hidden bg-offWhite rounded-4">
                    <div
                      className="h-full text-12 lineHeight-20 text-white text-center bg-primary shadow-progress"
                      style={{
                        width: `${item.value}%`,
                      }}
                    >
                      {item.value}%
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
