import {
  faBootstrap,
  faCss3,
  faDiscord,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLinkedin,
  faReact,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBlog,
  faBriefcase,
  faContactCard,
  faEnvelope,
  faHome,
  faInfo,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export const links = [
  {
    link: "https://discordapp.com/users/613024264706064390",
    id: 1,
    icon: faDiscord,
  },
  {
    title: "telegram",
    link: "https://t.me/sekk_er",
    id: 2,
    icon: faTelegram,
  },
  {
    link: "https://www.instagram.com/sekk_er/",
    id: 2,
    icon: faInstagram,
  },
  {
    link: "https://twitter.com/AleksandrSekker",
    id: 3,
    icon: faTwitter,
  },
];

export const skills = [
  {
    title: "HTML",
    icon: faHtml5,
    link: "https://www.w3schools.com/html/",
    id: 1,
  },
  {
    title: "CSS",
    icon: faCss3,
    link: "https://www.w3schools.com/css/",
    id: 2,
  },
  {
    title: "JavaScript",
    icon: faJs,
    link: "https://www.w3schools.com/js/",
    id: 3,
  },
  {
    title: "React",
    icon: faReact,
    link: "https://reactjs.org/",
    id: 4,
  },
  {
    title: "Bootstrap",
    icon: faBootstrap,
    link: "https://getbootstrap.com/",
    id: 5,
  },
];

export const linksContact = [
  {
    link: "https://www.linkedin.com/in/aleksandr-sekker-521352161/",
    id: 1,
    icon: faLinkedin,
  },
  {
    link: "github.com/AleksandrSekker",
    id: 2,
    icon: faGithub,
  },
  {
    link: "",
    id: 3,
    icon: faEnvelope,
  },
  {
    link: "/resume",
    id: 4,
    icon: faUser,
  },
];

export const projects = [
  {
    title: "internship",
    backgroundImg: "/assets/Internship.png",
    projectUrl: "https://aleksandrsekker.github.io/onix",
    tech: "reactredux",
    id: 1,
  },
  {
    title: "oldpersonal",
    backgroundImg: "/assets/OldPersonalPage.png",
    projectUrl: "https://aleksandrsekker.github.io/resume/",
    tech: "react",
    id: 2,
  },
  {
    title: "test",
    backgroundImg: "/assets/TestFirst.png",
    projectUrl: "https://aleksandrsekker.github.io/bandapixelstest/",
    tech: "react",
    id: 3,
  },
  {
    title: "test",
    backgroundImg: "/assets/TestSecond.png",
    projectUrl: "https://aleksandrsekker.github.io/clinic/",
    tech: "Bootstrap",
    id: 4,
  },
];
export const user = {
  firstName: "Oleksandr",
  lastName: "Sekker",
};

export const locales = [
  { id: 1, title: "en", icon: "gb" },
  { id: 1, title: "uk", icon: "ua" },
  { id: 2, title: "es", icon: "es" },
  { id: 3, title: "de", icon: "de" },
  { id: 4, title: "fr", icon: "fr" },
];
export const routes = [
  { title: "Home", link: "/", icon: faHome, id: 1 },
  { title: "About", link: "/about", icon: faInfo, id: 2 },
  { title: "Projects", link: "/projects", icon: faBriefcase, id: 3 },
  { title: "Skills", link: "/skills", icon: faBlog, id: 4 },
  { title: "Contact", link: "/contact", icon: faContactCard, id: 5 },
  // { title: "Blog", link: "/blog", icon: faBlog, id: 6 },
];

export const placeholderImage = "/assets/DefaultProject.jpg";
export const defaultProjectTitle = "defaultProjectTitle";
export const defaultProjectTech = "defaultProjectTech";
