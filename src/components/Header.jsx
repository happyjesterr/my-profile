import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Header() {
  const [fixed, setfixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setfixed(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        fixed ? "fixed shadow-nav   animate-[hedar_1s]" : ""
      } w-full top-0  z-50 bg-[#111]`}
    >
      <nav className=" container">
        <ul className="flex items-center gap-x-5  py-5 justify-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                target={link.target}
                className="hover:text-[#ffffffbf]   font-medium duration-[0.3s] text-[#ffffff8c] hover:hover-text-shadow"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
