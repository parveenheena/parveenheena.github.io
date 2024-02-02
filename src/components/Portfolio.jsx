import React, { useEffect } from "react";
import honestWing from "../assets/portfolio/honest-wing.png";
import fusion from "../assets/portfolio/fusionfurnish.png";
import travelbee from "../assets/portfolio/travelbee.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: honestWing,
      title: "Honest-Wing",
      tag: "The project Honest-wing, is built with HTML, CSS, and SASS, underwent enhancements to improve aesthetics and the user experience, following the Figma design.",
      stack: "HTML, CSS, SASS",
      link: "https://honest-wing-579.netlify.app/",
      github: "https://github.com/SourabhBurman/honest-wing-579",
    },
    {
      id: 2,
      src: travelbee,
      title: "TravelBee",
      tag: "TravelBee is a website designed to make travel planning easy and convenient. Users can explore travel packages, select destinations, choose dates, and book their journeys seamlessly.",
      stack: "HTML, CSS, SASS, BootStrap, JavaScript",
      link: "https://travel-bee-b66ab7.netlify.app/",
      github: "https://github.com/underiya/code-rhapsody-3467",
    },
    {
      id: 3,
      src: fusion,
      title: "Fusion Furnish",
      tag: "This is a nutrition tracking website. I implemented some functionalities like login & signup user data authentication. User can track BMI & daily calorie intake.",
      stack: "React, Chakra UI, CSS, JavaScript",
      link: "https://fusionfurnish.vercel.app/",
      github: "https://github.com/Deepakkumarrp/debug-daksh-7543",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
    });
  }, []);

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20"
    >
      <div className="max-w-screen-lg px-4 mx-auto w-full h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          data-aos="fade-up"
          className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-5 sm:px-0"
        >
          {portfolios.map(({ id, src, title, tag, stack, link, github }) => (
            <div
              key={id}
              className="flex flex-col gap-2 shadow-md shadow-gray-600 rounded-lg "
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-center font-bold pt-8">
                <h2>{title}</h2>
              </div>

              <div className="p-3  h-40">
                <h3>{tag}</h3>
              </div>

              <div className="p-3 h-16 ">
                <h3 className="font-bold mt-2 text-sky-300">
                  Tech Stacks :-{" "}
                  <span className="font-light text-white">{stack}</span>
                </h3>
              </div>

              <div className="flex items-center justify-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-2/5 text-center py-3 m-4 px-6 duration-200 hover:scale-105 border-solid border-2 border-sky-500 rounded-lg"
                >
                  <button className=" ">Demo</button>
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-2/5 text-center py-3 m-4 px-6 duration-200 hover:scale-105 border-solid border-2 border-sky-500 rounded-lg"
                >
                  <button>Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
