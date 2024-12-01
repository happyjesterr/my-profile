import about from "../assets/smalldroid.gif";
import { Typewriter } from "react-simple-typewriter";
import Timeline from "./Timeline";
import { certifications, Courses } from "../constants";

export default function About() {
  return (
    <div className=" container ">
      <div className="  lg:w-4/5 mx-auto">
        <div className="flex   items-center   mt-20 mb-4   gap-4 ">
          <h1 className="text-4xl   glow">About </h1>
          <img src={about} alt="About" className="  w-10 rounded-full " />
        </div>
        <p>Hi, I'm Sadek</p>
        <p className=" my-3  max-w-[390px] break-words leading-[1.9]	 ">
          <Typewriter
            words={[
              "I'm just a security researcher who is interested in Android application security",
            ]}
            cursor // يظهر مؤشر الكتابة
            cursorStyle="|"
            typeSpeed={80} // سرعة الكتابة
          />
        </p>
        <h2 className=" text-center glow  text-3xl">Timeline</h2>
        <hr className="   w-full    opacity-25  my-4" />
      </div>
      <Timeline />

      <div className="lg:w-4/5 mx-auto mb-10">
        <hr className="w-full opacity-25 mt-4 " />
        <h2 className="text-center glow text-2xl  sm:text-3xl my-8">Certifications & Courses</h2>
        <h3 className="text-2xl  glow ">Certifications </h3>
        <div className="grid md:grid-cols-2   gap-8 my-8">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="p-4 rounded-lg relative border border-gray-600 "
            >
              <div className="flex items-center justify-between mb-2">
                <a
                  href={certification.link} // ضع رابط الشهادة هنا
                  rel="noopener noreferrer"
                  download
                  className="hover:text-[#ffffffbf]   font-medium duration-[0.3s] text-[#ffffff8c] hover:hover-text-shadow"
                >
                  Download
                </a>
                <img
                  src={certification.img}
                  alt="Mobile"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-xl">
                {certification.certificate}
              </h3>
              <p className="text-gray-400 mt-2"> {certification.place}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl  glow ">Courses </h3>
        <div className="grid md:grid-cols-2   gap-8 my-8">
          {Courses.map((Course, index) => (
            <div
              key={index}
              className="p-4 rounded-lg relative border border-gray-600 "
            >
              <div className="flex items-center justify-between mb-2">
                <a
                  href={Course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffffffbf]   font-medium duration-[0.3s] text-[#ffffff8c] hover:hover-text-shadow"
                >
                  Profile
                </a>
                <img
                  src={Course.img}
                  alt="Mobile"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-xl">
                {Course.Course}
              </h3>
              <p className="text-gray-400 mt-2"> {Course.place}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
