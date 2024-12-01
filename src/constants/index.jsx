import { SiHackerone, SiBugcrowd } from "react-icons/si";
import { FaTwitter, FaGithub, FaBlog, FaLinkedin } from "react-icons/fa";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import mobile from "../assets/mobile.png";
import Coursera from "../assets/Coursera.svg";
import hextree from "../assets/hextree.svg";
import mobisec from "../assets/Mobisec.png";
export const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    title: "CV",
    path: "https://drive.google.com/file/d/1ds1ygRUX0cCOz66tKEQvSfNj5nZv-h04/view",
    target: "_blank",
  },
  { title: "Contact", path: "mailto:mohamedasadek22@gmail.com" },
];

export const SocialIcons = [
  {
    icon: <SiHackerone size={50} />,
    link: "https://hackerone.com/happyjesterrr?type=user",
    title: "HackerOne",
  },
  {
    icon: <FaLinkedin size={50} />,
    link: "https://www.linkedin.com/in/msadek-hj/",
    title: "Linkedin ",
  },

  {
    icon: <FaTwitter size={50} />,
    link: "https://x.com/happyjester80",
    title: "Twitter",
  },
  {
    icon: <FaGithub size={50} />,
    link: "https://github.com/happyjesterr",
    title: "Github",
  },
  {
    icon: <FaBlog size={50} />,
    link: "https://medium.com/@happyjester80",
    title: "Blog",
  },

  {
    icon: <SiBugcrowd size={50} />,
    link: "https://bugcrowd.com/Happyjester",
    title: "Bugcrowd",
  },
];

export const timeline = [
  {
    icon: <FaBriefcase />,
    background: "#336",
    date: "Dec  2023 - Present",
    head_title: " Cyber Security Engineer",
    subtitle: "CyShield",
    description:
      " Performed Pen-Testing for Web Applications, Android , IOS and writing technical Reports.",
  },
  {
    icon: <FaBriefcase />,
    background: "#336",
    date: "Aug 2023 - Oct 2023",
    head_title: " Intern Offensive Track",
    subtitle: "We Innovate",
    description: "Internship at Offensive Track",
  },
  {
    icon: <FaBriefcase />,
    background: "#336",
    date: " Aug 2022 - Aug 2023 ",
    head_title: " IT Specialist ",
    subtitle: "Gulf English School Cairo",
    description:
      "Installing new software and hardware components Assisting with Network administration tasks Resolving all issues coworkers have with their IT systems and softw are",
  },
  {
    icon: <FaGraduationCap />,
    background: "#033",
    date: "2018 - 2022",
    head_title: " B.Degree in Management Information systems",
    subtitle: "El Shorouk Academy",
    description: "Huawei ICT Competition 2021-2022 Bronze Medal Network Track",
  },
];

export const certifications = [
  {
    img: mobile,
    certificate: "Android Application Security",
    place: "Mobile Hacking Lab",
    link: "https://mycourse.app/911jdrBB1Jm1gigL8",
  },
  {
    img: mobile,
    certificate: "IOS Application Security",
    place: "Mobile Hacking Lab",
    link: "https://www.mobilehackinglab.com/certificate_v2/66e555b981d584d4640a7b66/user/65e498fd632a7696880effc7 ",
  },
  {
    img: mobile,
    certificate: "Frida Labs",
    place: "Mobile Hacking Lab",
    link: "https://mycourse.app/3jVhbyUNJtAQXRZU8",
  },
  {
    img: Coursera,
    certificate: "Google IT Support Certificate",
    place: "Coursera",
    link: "https://www.credly.com/badges/4bdbf923-e139-4ba9-a867-bc69cac1c583?source=linked_in_profile",
  },
];
export const Courses = [
  {
    img: hextree,
    Course: "Android Security Course",
    place: "Hextree",
    link: "https://app.hextree.io/profile/happyjester80",
  },
  {
    img: mobisec,
    Course: "Mobile Systems and Smartphone Security",
    place: "Mobisec ",
    link: "https://challs.reyammer.io ",
  },
];
