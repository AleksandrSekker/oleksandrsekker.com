import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBlog,
  faBriefcase,
  faContactCard,
  faHome,
  faInfo,
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
  {
    link: "https://www.linkedin.com/in/aleksandr-sekker-521352161/",
    id: 4,
    icon: faLinkedin,
  },
  {
    link: "github.com/AleksandrSekker",
    id: 5,
    icon: faGithub,
  },
];

export const user = {
  firstName: "Oleksandr",
  lastName: "Sekker",
};

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
