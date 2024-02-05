import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1500,
      offset: 100,
    });
  },[])


  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        data-aos="fade-up"
        className="max-w-screen-lg mx-auto mx-auto px-4 pt-20"
      >
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <ul className="text-xl mt-10 border-red-600">
          <li>
          Greetings! I'm Heena, a Full stack web developer. With a keen eye for detail and a 
          knack for creative problem-solving, I bring a subtle touch to crafting robust and 
          user-friendly digital experiences.
          </li>
        </ul>

        <br />

        <ul className="text-xl  border-red-600">
          <li>
          I specialize in building cutting-edge web technologies and products. My interests also 
          extend to the exciting domains of deep learning and natural language processing, 
          where I explore innovative solutions and advancements.
          </li>
        </ul>

        <br />

        <ul className="text-xl  border-red-600">
          <li>
          My experience encompasses diverse projects, including individual initiatives and collaborative team endeavors, showcasing my versatility and commitment.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
