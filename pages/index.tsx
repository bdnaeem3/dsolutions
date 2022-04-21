import type { NextPage } from "next";
import About from "../components/sections/About";

// components
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
};

export default Home;
