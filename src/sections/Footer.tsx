import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export const navItems = [
  {
    name: "About",
    href: "#features",
  },
  {
    name: "Skills",
    href: "#pricing",
  },
  {
    name: "Projects",
    href: "#blogs",
  },
  {
    name: "Blogs",
    href: "#faq",
  },
  {
    name: "More",
    href: "#faq",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
];

export const Footer = () => {
  return <footer>footer section</footer>;
};

export default Footer;
