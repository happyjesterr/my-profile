import Name from "./Name";
import { SocialIcons } from "../constants";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" container  w-4/5  flex items-center justify-center   min-h-custom  flex-col ">
      <Name />
      <hr className="   w-full    opacity-25  my-8" />
      <div className="flex items-center flex-wrap   justify-center gap-8">
        {SocialIcons.map((social, index) => (
          <div className="relative glow  group" key={index}>
            <Link
              to={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="  relative  glow2"
            >
              {social.icon}
            </Link>
            <span className="absolute  -bottom-8   sm:block hidden left-1/2 transform -translate-x-1/2 text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {social.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
