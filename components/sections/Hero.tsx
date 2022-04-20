/* eslint-disable @next/next/no-img-element */
import _ from "lodash";
import Slider from "react-slick";
import { slider } from "../../data";

const settings = {
  arrows: false,
  autoplay: true,
  dots: false,
  fade: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
};

const Hero = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "url('/img/slider/1.jpg')no-repeat center center/cover",
      }}
    >
      <Slider {...settings}>
        {_.map(slider, (item, i) => {
          return (
            <div key={i}>
              <div className="min-h-screen container flex items-center">
                <div className="w-1/2">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="w-1/2">
                  <a
                    href={item.url}
                    className="text-30 text-white hover:text-primary tracking-5"
                  >
                    {item.title}
                  </a>
                  <p className="my-15 text-white">{item.desc}</p>
                  <a
                    href={item.url}
                    className="table p-10 border uppercase text-primary border-primary hover:text-white hover:bg-primary"
                  >
                    Check this out
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
