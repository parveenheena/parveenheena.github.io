import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../assets/portfolioImage.jpeg"
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <div
      id="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center gap-24 h-full px-4">
        <div
          data-aos="fade-right"
          className="flex flex-col gap-3"
        >
          <h4 className="text-sm sm:text-2xl font-bold text-white">
            Hello, my name is
          </h4>
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Heena Parveen
          </h2>
          <h2 className="text-3xl sm:text-3xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>

          <div>
            <a
              href="/Heena_Parveen_Resume.pdf"
              download
              target="_blank"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1tr86WSzdvMiNzYCwHw0q3Jyvc2RFptxI/view?usp=sharing",
                  "_blank"
                );
              }}
              smooth
              duration={500}
              className="group text-white w-fit px-6 mt-10 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-900 cursor-pointer"
            >
              My Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </a>

            {/* <a
          href="/Heena_Parveen_Resume.pdf"
          download
          target="_blank"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1tr86WSzdvMiNzYCwHw0q3Jyvc2RFptxI/view?usp=sharing",
              "_blank"
            );
          }}
          className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-125 duration-200 hover:text-sky-500 mr-4"
        >
          Resume
        </a> */}
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            src={profile}
            alt="my profile"
            className="rounded-full mx-auto w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
