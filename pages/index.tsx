import type { NextPage } from "next";

// components
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
    </>
  );
};

export default Home;
