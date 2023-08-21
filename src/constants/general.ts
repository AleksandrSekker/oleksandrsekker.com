import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faBlog, faBriefcase, faContactCard, faHome, faInfo } from "@fortawesome/free-solid-svg-icons";

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

export const stats = [
  {
    statSubtitle: "TRAFFIC",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescription: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500",
    id: 1,
  },
  {
    statSubtitle: "TRAFFIC",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescription: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500",
    id: 2,
  },
  {
    statSubtitle: "TRAFFIC",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescription: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500",
    id: 3,
  },
  {
    statSubtitle: "TRAFFIC",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescription: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500",
    id: 4,
  },
];
export const AdminPagesLinks = [
  { title: "Home", link: "/admin/pages/home", id: 1 },
  { title: "About", link: "/admin/pages/about", id: 2 },
  { title: "Projects", link: "/admin/pages/projects", id: 3 },
  { title: "Skills", link: "/admin/pages/skills", id: 4 },
];
export const AdminBlogLinks = [
  { title: "Create Post", link: "/admin/blog/create", id: 1 },
  { title: "Post Overview", link: "/admin/blog/overview", id: 2 },
];

export const user = {
  firstName: "Oleksandr",
  lastName: "Sekker",
};

export const tableHeader = [
  { title: "Title", id: 1 },
  { title: "Description", id: 2 },
  { title: "Tags", id: 3 },
  { title: "Edit", id: 4 },
  { title: "Delete", id: 5 },
  { title: "Update date", id: 6 },
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
