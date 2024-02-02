import { useEffect } from "react";
import contactus from "../assets/contact-us.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AOS from "aos";
import { CiMail } from "react-icons/ci";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      delay: 0,
    });
  }, []);

  return (
    <div
      id="contact"
      className="w-full  bg-gradient-to-b from-black to-gray-800 text-white pt-20"
    >
      <div className="max-w-screen-lg mx-auto w-full h-full px-4">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row gap-8 shadow-xl shadow-sky-200 p-6"
        >
          <div className="w-full md:w-1/2 h-full rounded-xl ">
            <img src={contactus} alt="man with laptop" className="rounded-xl" />
            <p className="pt-2 pb-8">
              I am actively seeking full-time opportunities and would welcome any inquiries through your preferred mode of communication.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p>Delhi, India</p>
              </div>
              <div className="flex flex-row gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <p> +91 8700557833</p>
              </div>
              <div className="flex flex-row gap-5">
                {<CiMail size={26} />}
                <p> parveenheena196@gmail.com</p>
              </div>
              <div className="flex flex-row gap-5 mt-2">
                <div>
                  <a
                    href="https://www.linkedin.com/in/heena-parveen25/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {<FaLinkedin size={26} />}
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/parveenheena"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {<FaGithub size={26} />}
                  </a>
                </div>
                <div>
                  <a
                    as='a'
                    href="mailto:parveenheena196@gmail.com"
                    rel="noreferrer"
                  >
                    {<SiGmail size={26} />}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* form stuff  */}
          <div className="w-full md:w-1/2 h-full rounded-xl">
            <form
              action="https://getform.io/f/535b7c0a-c95f-4a96-9cec-4dc05e6cdb0f"
              method="POST"
            >
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div>
                  <label className="block text-sm leading-6 capitalize font-light">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      required
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full bg-transparent rounded-md border border-inherit  py-2 px-3.5 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm leading-6 capitalize font-light">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full bg-transparent rounded-md border border-inherit py-2 px-3.5 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm leading-6 capitalize font-light">
                    Phone number
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      required
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full bg-transparent rounded-md border border-inherit py-2 px-3.5 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm leading-6 capitalize font-light">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full bg-transparent rounded-md border border-inherit py-2 px-3.5 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm leading-6 capitalize font-light">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      required
                      name="message"
                      id="message"
                      rows="5"
                      className="block w-full bg-transparent rounded-md border border-inherit py-2 px-3.5 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-blue-500 text-white px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:scale-105 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <h1 className="mt-12 text-center">
        Copyright &#169; 2024. Designed and build by Heena Parveen.
      </h1>
    </div>
  );
};

export default Contact;
