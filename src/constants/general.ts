import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  // faBlog,
  // faBriefcase,
  // faContactCard,
  faEnvelope,
  faHome,
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
    title: "Default title",
    backgroundImg: "/assets/avatar.jpg",
    projectUrl: "/",
    tech: "Next JS",
    id: 1,
  },
  {
    title: "Default title",
    backgroundImg: "/assets/avatar.jpg",
    projectUrl: "/",
    tech: "Next JS",
    id: 2,
  },
  {
    title: "Default title",
    backgroundImg: "/assets/avatar.jpg",
    projectUrl: "/",
    tech: "Next JS",
    id: 3,
  },
  {
    title: "Default title",
    backgroundImg: "/assets/avatar.jpg",
    projectUrl: "/",
    tech: "Next JS",
    id: 4,
  },
  {
    title: "Default title",
    backgroundImg: "/assets/avatar.jpg",
    projectUrl: "/",
    tech: "Next JS",
    id: 5,
  },
  {
    title: "Default title",
    backgroundImg: "/assets/avatar.jpg",
    projectUrl: "/",
    tech: "Next JS",
    id: 6,
  },
];
export const user = {
  firstName: "Oleksandr",
  lastName: "Sekker",
};

export const locales = [
  { id: 1, title: "en", icon: "gb" },
  { id: 1, title: "ua", icon: "ua" },
  { id: 2, title: "es", icon: "es" },
  { id: 3, title: "de", icon: "de" },
  { id: 4, title: "fr", icon: "fr" },
];
export const routes = [
  { title: "Home", link: "/", icon: faHome, id: 1 },
  { title: "About", link: "/about", icon: faHome, id: 2 },
  // { title: "Projects", link: "/projects", icon: faBriefcase, id: 3 },
  // { title: "Contact", link: "/contact", icon: faContactCard, id: 4 },
  // { title: "Skills", link: "/skills", icon: faBlog, id: 5 },
  // { title: "Blog", link: "/blog", icon: faBlog, id: 6 },
];
