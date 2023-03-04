import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
export const links = [
  {
    link: "https://discordapp.com/users/613024264706064390",
    id: 1,
    icon: faDiscord,
  },
  { title: "telegram", link: "https://t.me/sekk_er", id: 2, icon: faTelegram },

  {
    link: "https://www.linkedin.com/in/aleksandr-sekker-521352161/",
    id: 3,
    icon: faLinkedin,
  },
  {
    link: "github.com/AleksandrSekker",
    id: 4,
    icon: faGithub,
  },
  {
    link: "https://www.instagram.com/sekk_er/",
    id: 5,
    icon: faInstagram,
  },
];
export const user = {
  firstName: "Oleksandr",
  lastName: "Sekker",
};

export const locales = [
  { id: 1, title: "en", icon: "gb" },
  { id: 2, title: "es", icon: "es" },
  { id: 3, title: "de", icon: "de" },
  { id: 4, title: "fr", icon: "fr" },
];
export const routes = [
  { title: "Home", link: "/", id: 1 },
  { title: "Portfolio", link: "/portfolio", id: 2 },
  { title: "Contact", link: "/contact", id: 3 },
  { title: "Blog", link: "/blog", id: 4 },
];
