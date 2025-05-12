"use client";
import Image from "next/image";
import { proyects } from "./lib/data";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert";
import { AlertDescription } from "@/components/ui/alert";
import { AlertTitle } from "@/components/ui/alert";
import { useEffect } from "react";
import { useRive } from "@rive-app/react-canvas";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [nav, setNav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error" | "">("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { RiveComponent } = useRive({
    src: "/fondo.riv",
  });
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage("");
    setAlertType("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setAlertMessage("Mensaje enviado correctamente.");
      setAlertType("success");
    } catch (err) {
      console.error(err);

      setAlertMessage("Error al enviar el mensaje.");
      setAlertType("error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleClick = () => {
    setActive(!active);
    document.body.classList.toggle("dark");
    setVisible(!visible);
  };
  const handleClick2 = () => {
    setNav(!nav);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <div className="dark:bg-gray-900 min-h-screen   dark:text-white">
        <div className="w-full h-16 fixed md:block hidden">
          <div className="w-[80%]  hidden md:block  backdrop-blur h-16 fixed top-0 left-1/2 transform -translate-x-1/2">
            <ol className="  h-16 flex  gap-10 items-center   ">
              <li className="text-xl font-bold ml-10 ">
                <Link href="/">Maximiliano Duran</Link>
              </li>
              <div className="ml-auto flex gap-10 items-center">
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
                {/* <li>
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
                </li> */}
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
              </div>
            </ol>{" "}
          </div>{" "}
          <hr className="absolute md:block hidden  bottom-0 w-full border-t border-gray-300" />
        </div>

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
            {/* <li>
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
            </li> */}
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

        <div className="flex flex-col items-center md:py-56 py-16  ">
          <div className="flex items-center justify-center lg:flex-row flex-col     gap-20 w-full">
            <div className="flex flex-col lg:text-start text-center   gap-5  animate-fade-right animate-ease-in">
              <h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold  ">
                Hello world, I am
                <span className="text-[#2555E0]"> Maximiliano Duran!</span>
              </h1>
              <h3 className="dark:text-[#6E7787] text-white  lg:text-xl text-lg py-2">
                Computer Engineering student passionate about building
                innovative solutions.
              </h3>
              <div className="flex gap-5 mt-2 lg:justify-start justify-center">
                <button className="border w-16 flex items-center justify-center h-16 rounded-lg dark:bg-[#EAF2F8]   hover:bg-[#EAF2F8]  transition-all duration-300">
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

                <button className="border w-16 flex items-center justify-center h-16 rounded-lg dark:bg-[#EAF2F8]  hover:bg-[#EAF2F8]  transition-all duration-300">
                  <a
                    href="https://www.linkedin.com/in/maximiliano-duran-ramirez-a5b2b2236/"
                    target="_blank"
                  >
                    <Image
                      alt=""
                      src={"/linkedin.png"}
                      width={40}
                      height={40}
                      className="object-scale-down ml-1 "
                    />
                  </a>
                </button>
                <button className="border w-16 flex items-center justify-center h-16 rounded-lg  dark:bg-[#EAF2F8]   hover:bg-[#EAF2F8]  transition-all duration-300">
                  <a
                    href="https://www.youtube.com/@maxiduran4433"
                    target="_blank"
                  >
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

            <div className=" mb-10  animate-fade-right animate-ease-in">
              <Image
                alt=""
                src="/coding.png"
                width={1000}
                height={1000}
                className="rounded-full border-4 border-[#2555E0] lg:min-w-[300px] lg:h-[300px] w-[200px]  h-[200px]  "
              />
            </div>
          </div>
        </div>
        <div
          id="aboutme"
          className="py-16  lg:px-10 px-4 lg:w-[80%] m-auto    
        "
        >
          <div className="  flex flex-col gap-10    ">
            <h1 className="lg:text-4xl text-2xl font-bold underline decoration-blue-500 w-4/5">
              About me
            </h1>

            <div className="   ">
              <p className="lg:text-lg text-sm">
                My name is Maximiliano Durán Ramirez, and I am currently in my
                third year of studying Computer Engineering at Duoc UC Viña del
                Mar professional institute. I am also a self-taught programmer.
                I discovered the world of computing in 2022 thanks to a friend,
                and since then, I have been passionate about researching and
                learning more about this field.
              </p>

              <p className="lg:text-lg text-sm">
                I am seeking a job opportunity to develop my programming skills
                further and to continue learning new technologies and tools. I
                am highly committed to continuous learning and professional
                growth
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[80%] m-auto lg:px-10 px-4   " id="skills">
          {/* <h1 className="lg:text-4xl text-2xl  mt-5 font-bold underline decoration-blue-500 w-4/5">
            Skills
          </h1>
          <h1 className="lg:text-xl text-lg font-semibold mt-5  ">
            👨‍💻 Programming Languages
          </h1>

          <div className=" grid  lg:grid-cols-6 sm:grid-cols-3 grid-cols-2  gap-10 mt-5 ">
            {data.map((item) => (
              <div className="flex flex-col items-center " key={item.id}>
                <div className="flex gap-5 hover:shadow-md p-2 m-auto lg:w-16 lg:h-16 w-12 h-12 rounded-lg items-center justify-center bg-[#EAF2F8] transition-all duration-300 hover:scale-110 ">
                  <Image
                    loading="lazy"
                    alt=""
                    src={item.image}
                    width={70}
                    height={70}
                    className="object-scale-down min-w-[30px] "
                  />
                </div>{" "}
                <p className="mt-3 font-medium">{item.name}</p>
              </div>
            ))}
          </div>

          <h1 className="text-lg lg:text-xl font-semibold mt-5  ">
            🧰 Frameworks and Libraries
          </h1>
          <div className="flex flex-col gap-5">
            <div className=" grid  lg:grid-cols-6 sm:grid-cols-3 grid-cols-2  gap-10 mt-5 ">
              {data2.map((item) => (
                <div className="flex flex-col items-center " key={item.id}>
                  <div className="flex gap-5 p-2 hover:shadow-md m-auto lg:w-16 lg:h-16 w-12 h-12  rounded-lg items-center justify-center bg-[#EAF2F8] transition-all duration-500 hover:scale-110 ">
                    <Image
                      alt=""
                      src={item.image}
                      width={70}
                      height={70}
                      className="object-scale-down "
                    />
                  </div>
                  <p className="mt-3 font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <h1 className="lg:text-xl text-lg font-semibold mt-5  ">
            🗄️ Databases and Cloud Hosting
          </h1>
          <div className="flex flex-col gap-5">
            <div className=" grid  lg:grid-cols-6 sm:grid-cols-3 grid-cols-2  gap-10 mt-5 ">
              {data3.map((item) => (
                <div className="flex flex-col items-center " key={item.id}>
                  <div className="flex gap-5 p-2 hover:shadow-md m-auto lg:w-16 lg:h-16 w-12 h-12  rounded-lg items-center justify-center bg-[#EAF2F8] transition-all duration-500 hover:scale-110 ">
                    <Image
                      alt=""
                      src={item.image}
                      width={70}
                      height={70}
                      className="object-scale-down "
                    />
                  </div>
                  <p className="mt-3 font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <h1 className="lg:text-xl text-lg font-semibold mt-5  ">
            💻 Software and Tools
          </h1>
          <div className="flex flex-col gap-5 ">
            <div className=" grid  lg:grid-cols-6 sm:grid-cols-3 grid-cols-2  gap-10 mt-5 ">
              {data4.map((item) => (
                <div className="flex flex-col items-center " key={item.id}>
                  <div className="flex gap-5 p-2 hover:shadow-md m-auto lg:w-16 lg:h-16 w-12 h-12  rounded-lg items-center justify-center bg-[#EAF2F8] transition-all duration-500 hover:scale-110 ">
                    <Image
                      alt=""
                      src={item.image}
                      width={70}
                      height={70}
                      className="object-scale-down "
                    />
                  </div>{" "}
                  <p className="mt-3 font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div> */}
          <h1
            id="proyects"
            className="lg:text-4xl text-2xl mt-10  font-bold underline decoration-blue-500 w-4/5 py-10 "
          >
            Projects
          </h1>
          <div className=" mb-10  ">
            <div className="grid grid-cols-1 mt-5   grid-rows-1 gap-10 lg:grid-cols-3 sm:grid-rows-2  ">
              {proyects.map((item) => (
                <div key={item.id} className="group">
                  <div
                    key={item.id}
                    className="flex flex-col h-60 p-8 gap-5 rounded-lg border-2 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="font-semibold text-xl tracking-tight">
                      {item.name}
                    </h3>

                    <p className="dark:text-[#6E7D91] mb-6">
                      {item.description}
                    </p>

                    <a
                      href={item.url}
                      className="group-hover:bg-[#2555E0] group-hover:text-white transition-all duration-300 rounded-lg"
                    >
                      <button className="border p-2 rounded-lg  w-full flex justify-center items-center gap-5">
                        View project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-external-link ml-2 h-4 w-4"
                        >
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mb-20">
            <h1
              id="contact"
              className="lg:text-4xl text-2xl mt-10 font-bold underline decoration-blue-500 w-4/5 py-16 "
            >
              Leave a message!
            </h1>
            <p>Animation in progress... </p>
            <div className=" flex lg:flex-row  flex-col justify-between ">
              <div className="lg:w-[50%]  ">
                <RiveComponent className="" />
              </div>
              <Card className="lg:w-[50%] w-full ">
                <CardHeader className="text-center">
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={onSubmit}>
                    {" "}
                    {/* Aquí se maneja el submit */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="animate-spin rounded-full border-2 border-white border-t-transparent h-4 w-4 mr-2"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            {alertMessage && (
              <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
                <Alert
                  variant={alertType === "success" ? "default" : "destructive"}
                >
                  <AlertTitle>
                    {alertType === "success" ? "Éxito" : "Error"}
                  </AlertTitle>
                  <AlertDescription>{alertMessage}</AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
