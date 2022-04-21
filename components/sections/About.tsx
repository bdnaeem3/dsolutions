import _ from "lodash";
import { about } from "../../data";
import HTMLParser from "../helper/HTMLParser";
import SectionHeading from "../common/SectionHeading";

const About: React.FC = () => {
  return (
    <div className="py-50">
      <SectionHeading />
      <div className="container">
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
      </div>
    </div>
  );
};

export default About;
