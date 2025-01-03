"use client";
import Image from "next/image";
import { data, proyects } from "./lib/data";
import { data2 } from "./lib/data";
import { data3 } from "./lib/data";
import { data4 } from "./lib/data";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setActive(!active);
    document.body.classList.toggle("dark");
    setVisible(!visible);
  };
  const handleClick2 = () => {
    setNav(!nav);
  };
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="w-full  hidden md:block   h-16 fixed top-0 ">
        <ol className="  h-16 flex  gap-10 items-center justify-end mr-10  ">
          <li className="">
            <button
              onClick={() => {
                const skillsSection = document.getElementById("aboutme");
                if (skillsSection) {
                  skillsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-green-500"
            >
              About me
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const skillsSection = document.getElementById("proyects");
                if (skillsSection) {
                  skillsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-green-500"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const skillsSection = document.getElementById("skills");
                if (skillsSection) {
                  skillsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-green-500"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const skillsSection = document.getElementById("contact");
                if (skillsSection) {
                  skillsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-green-500"
            >
              Contact
            </button>
          </li>
          <li>
            {" "}
            <button className="" onClick={handleClick}>
              {active ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#ffffff"
                  fill="none"
                >
                  <path
                    d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </li>
        </ol>
      </div>

      {/* Navegación responsiva */}
      <button className={`md:hidden  p-4`} onClick={handleClick2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="md:text-white"
          fill="none"
        >
          <path
            d="M2 11.4C2 10.2417 2.24173 10 3.4 10H20.6C21.7583 10 22 10.2417 22 11.4V12.6C22 13.7583 21.7583 14 20.6 14H3.4C2.24173 14 2 13.7583 2 12.6V11.4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2 3.4C2 2.24173 2.24173 2 3.4 2H20.6C21.7583 2 22 2.24173 22 3.4V4.6C22 5.75827 21.7583 6 20.6 6H3.4C2.24173 6 2 5.75827 2 4.6V3.4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2 19.4C2 18.2417 2.24173 18 3.4 18H20.6C21.7583 18 22 18.2417 22 19.4V20.6C22 21.7583 21.7583 22 20.6 22H3.4C2.24173 22 2 21.7583 2 20.6V19.4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className={`md:hidden ${nav ? "block" : "hidden"}  mb-16 `}>
        <ol className="  h-16 flex flex-col  gap-4 items-center md:mr-10   ">
          <li className="">
            <button
              onClick={() => {
                const skillsSection = document.getElementById("aboutme");
                if (skillsSection) {
                  skillsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-green-500"
            >
              About me
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const skillsSection = document.getElementById("proyects");
                if (skillsSection) {
                  skillsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-green-500"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const skillsSection = document.getElementById("skills");
                if (skillsSection) {
                  skillsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-green-500"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const skillsSection = document.getElementById("contact");
                if (skillsSection) {
                  skillsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-green-500"
            >
              Contact
            </button>
          </li>
          <li>
            {" "}
            <button className="" onClick={handleClick}>
              {active ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#ffffff"
                  fill="none"
                >
                  <path
                    d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </li>
        </ol>
      </div>

      <div className=" flex flex-col items-center    xl:h-[885px]">
        <h1
          id="aboutme"
          className="sm:text-2xl mt-20 mb-8 text-md  xl: m-auto font-extrabold relative after:content-[''] after:block after:h-[2px] after:bg-green-500 after:w-1/2 after:mx-auto after:mt-1"
        >
          Hello world, I'm Maximiliano Duran!
        </h1>

        <div className=" mb-10  ">
          <Image
            alt=""
            src="/coding.png"
            width={300}
            height={300}
            className="rounded-full "
          />
        </div>
        <div
          className=" w-[80%]  md:w-[50%]
        "
        >
          <div className="flex flex-col gap-2 font-medium  ">
            <p>
              My name is Maximiliano Durán Ramirez, and I am currently in my
              third year of studying Computer Engineering at Duoc UC Viña del
              Mar professional institute. I am also a self-taught programmer.
            </p>
            <p>
              I discovered the world of computing in 2022 thanks to a friend,
              and since then, I have been passionate about researching and
              learning more about this field.
            </p>
            <p>
              I am seeking a job opportunity to develop my programming skills
              further and to continue learning new technologies and tools. I am
              highly committed to continuous learning and professional growth
            </p>
          </div>
          <ul className="list-disc flex flex-col gap-1 ml-5 items-center mt-5 font-medium">
            <li>
              I am a self taught Full Stack Developer and Mobile Developer
            </li>
            <li> I am a student of Computer engineer</li>
            <li>Working on Node.js</li>
            <li>Main languages: Java, JavaScript</li>
            <li>
              I have a strong interest in Data Science and Artificial
              Intelligence
            </li>
          </ul>
        </div>
        <div className="flex gap-5 mt-5">
          <button>
            <a href="https://github.com/Maxi-Duran" target="_blank">
              <Image
                alt=""
                src={"/github.png"}
                width={50}
                height={50}
                className="object-scale-down "
              />
            </a>
          </button>

          <button>
            <a
              href="https://www.linkedin.com/in/maximiliano-duran-ramirez-a5b2b2236/"
              target="_blank"
            >
              <Image
                alt=""
                src={"/linkedin.png"}
                width={40}
                height={40}
                className="object-scale-down "
              />{" "}
            </a>
          </button>
          <button>
            <a href="https://www.youtube.com/@maxiduran4433" target="_blank">
              <Image
                alt=""
                src={"/yotube.png"}
                width={40}
                height={40}
                className="object-scale-down "
              />
            </a>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center  ">
        <h1
          id="skills"
          className="text-2xl mt-10 m-auto font-extrabold relative after:content-[''] after:block after:h-[2px] after:bg-green-500 after:w-1/2 after:mx-auto after:mt-1"
        >
          Skills
        </h1>
        <h1 className="text-lg mt-5 ml-5 ">👨‍💻 Programming Languages</h1>
        <div className="flex flex-col gap-5  ">
          <div className="md:flex grid  grid-cols-3  gap-10 ml-5">
            {data.map((item) => (
              <div key={item.id} className="flex gap-5 ">
                <Image
                  alt=""
                  src={item.image}
                  width={70}
                  height={70}
                  className="object-scale-down min-w-[30px] "
                />
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-lg mt-5 ml-5">🧰 Frameworks and Libraries</h1>
        <div className="flex flex-col gap-5">
          <div className="md:flex grid  grid-cols-3   gap-10 ml-5">
            {data2.map((item) => (
              <div key={item.id} className="flex gap-5 ">
                <Image
                  alt=""
                  src={item.image}
                  width={70}
                  height={70}
                  className="object-scale-down "
                />
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-lg mt-5 ml-5">🗄️ Databases and Cloud Hosting</h1>
        <div className="flex flex-col gap-5">
          <div className="md:flex grid  grid-cols-3   gap-10 ml-5">
            {data3.map((item) => (
              <div key={item.id} className=" ">
                <Image
                  alt=""
                  src={item.image}
                  width={70}
                  height={70}
                  className="object-scale-down "
                />
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-lg mt-5 ml-5">💻 Software and Tools</h1>
        <div className="flex flex-col gap-5 ">
          <div className="md:flex grid  grid-cols-3   gap-10 ml-5">
            {data4.map((item) => (
              <div key={item.id} className="flex gap-5 ">
                <Image
                  alt=""
                  src={item.image}
                  width={70}
                  height={70}
                  className="object-scale-down "
                />
              </div>
            ))}
          </div>
        </div>
        <h1
          id="proyects"
          className="text-2xl m-auto  font-extrabold relative after:content-[''] after:block after:h-[2px] after:bg-green-500 after:w-1/2 after:mx-auto after:mt-1"
        >
          Projects
        </h1>
        <div className=" mb-10 ">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 text-center grid-rows-1 gap-20 sm:grid-cols-3 sm:grid-rows-2  ">
              {proyects.map((item) => (
                <a href={item.url} key={item.id}>
                  <div
                    key={item.id}
                    className="flex flex-col justify-center items-center border-2 p-20 sm:w-full w-[80%] m-auto  shadow-xl"
                  >
                    <div>{item.name}</div>
                    <div className="text-[12px] underline">
                      {item.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <h1
            id="contact"
            className="text-2xl m-auto font-extrabold relative after:content-[''] after:block after:h-[2px] after:bg-green-500 after:w-1/2 after:mx-auto after:mt-1"
          >
            Leave a message!
          </h1>
          <div className=" h-96 text-center mt-10  ">Comming soon!</div>
        </div>
      </div>
    </div>
  );
}
