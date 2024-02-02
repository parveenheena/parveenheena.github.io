import { useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GitHub=()=>{

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      offset: 100,
      delay: 0,
    });
  },[])

    return (
      <div id="*" className="bg-black w-full h-max text-white pt-20">
        <div className="max-w-screen-lg mx-auto px-4 text-white">
          <div>
            <p className="text-4xl  font-bold border-b-4 border-gray-500 inline">
              Calendar & Stats
            </p>
            <p className="py-6">Check out my Github Calendar & Streak Stats </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="w-11/12 m-auto pt-10 pb-10 flex justify-center"
        >
          <GitHubCalendar username="parveenheena" />
        </div>

        <div data-aos="fade-up" className="flex justify-center pt-8 ">
          <a href="https://github.com/parveenheena" className=" px-12 sm:px-0">
            <img
              className="shadow-md hover:scale-105 duration-500  rounded-lg shadow-sky-400"
              src="https://github-readme-streak-stats.herokuapp.com/?user=parveenheena&theme=onedark&hide_border=true&ring=2DB0CB&background=161616&currStreakLabel=DDDDDD&fire=FF0000"
              alt=""
            />
          </a>
        </div>

        <div data-aos="fade-up" className="flex justify-center pt-12">
          <a href="https://github.com/parveenheena" className="px-12 sm:px-0">
            <img
              className="shadow-md hover:scale-105 duration-500  rounded-lg shadow-sky-400"
              src="https://github-readme-stats.vercel.app/api?username=parveenheena&show_icons=true&locale=en&theme=onedark&hide_border=true&bg_color=161616"
              alt=""
            />
          </a>
        </div>
      </div>
    );
}

export default GitHub