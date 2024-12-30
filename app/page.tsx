import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-red-400 w-full h-96 flex  ">
      <div className="w-[50%] bg-blue-300 flex justify-center items-center ">
        <Image
          src="/coding.png"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>Maximiliano Duran</h1>
        <h3>Computer Engineer Student</h3>
        <ul>
          <li>I am a self taught Full Stack Developer and Mobile Developer</li>
          <li> I am a student of Computer engineer</li>
          <li>Working on Node.js</li>
          <li>Main languages: Java, JavaScript</li>
          <li>Interested in Full Stack Web and Mobile developer</li>
        </ul>
      </div>
    </div>
  );
}
