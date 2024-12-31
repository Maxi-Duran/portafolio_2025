import Image from "next/image";
import { data, proyects } from "./lib/data";
import { data2 } from "./lib/data";
import { data3 } from "./lib/data";
import { data4 } from "./lib/data";
export default function Home() {
  return (
    <div>
      <div className=" w-full h-96 flex   ">
        <div className="w-[50%]  flex justify-center items-center ">
          <Image
            alt=""
            src="/coding.png"
            width={300}
            height={300}
            className="rounded-full "
          />
        </div>
        <div className="flex flex-col justify-center gap-5  w-[50%] ml-10 ">
          <h1 className="text-5xl ">Maximiliano Duran</h1>
          <h3 className="text-2xl">Computer Engineer Student</h3>

          <ul className="list-disc flex flex-col gap-1 ml-5 ">
            <li>
              I am a self taught Full Stack Developer and Mobile Developer
            </li>
            <li> I am a student of Computer engineer</li>
            <li>Working on Node.js</li>
            <li>Main languages: Java, JavaScript</li>
            <li>Interested in Full Stack Web and Mobile developer</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-5  ">
          <h1 className="text-2xl ml-5">👨‍💻 Programming Languages</h1>
          <div className="flex  gap-10 ml-5">
            {data.map((item) => (
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
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl ml-5">🧰 Frameworks and Libraries</h1>
          <div className="flex  gap-10 ml-5">
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
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl ml-5">🗄️ Databases and Cloud Hosting</h1>
          <div className="flex  gap-10 ml-5">
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
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl ml-5">💻 Software and Tools</h1>
          <div className="flex  gap-10 ml-5">
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
        <div className=" mb-10">
          <h1 className="text-2xl ml-5">🛠️ Projects</h1>
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 grid-rows-2 gap-20">
              {proyects.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-center items-center border-2 p-20 shadow-xl"
                >
                  <div>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
