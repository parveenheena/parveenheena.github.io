import React, { useEffect } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png"
import mango from "../assets/mongo.png"
import chakra from "../assets/chakra.png"
import typescript from "../assets/typescript.png"
import redux from "../assets/redux.png"
import express from "../assets/express.png"
import npm from "../assets/npm.png"
import sql from "../assets/sql.png"
import mongoose from "../assets/mongoose.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "Node Js",
      style: "shadow-green-600",
    },
    {
      id: 13,
      src: mongoose,
      title: "Mongoose",
      style: "shadow-red-300",
    },
    {
      id: 9,
      src: mango,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: chakra,
      title: "Chakra UI",
      style: "shadow-sky-300",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 12,
      src: npm,
      title: "Npm",
      style: "shadow-red-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: sql,
      title: "Sql",
      style: "shadow-yellow-400",
    }
  ];

  useEffect(()=>{
    AOS.init({
      duration: 1500,
      offset: 100,
    });
  },[])

  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto px-4 w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div
          data-aos="fade-up"
          className="w-full grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-8 text-center py-8 px-6 md:px-5  sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
