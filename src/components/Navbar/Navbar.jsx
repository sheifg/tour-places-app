import React from "react";
import "./Navbar.scss";
export default function Navbar() {
  const navLinks = [
    {
      text: "About",
      href: "#aboutus",
    },
    {
      text: "For you",
      href: "#foryou",
    },
    {
      text: "Services",
      href: "#services",
    },
    {
      text: "Blog",
      href: "#blog",
    },
    {
      text: "Vlog",
      href: "#vlog",
    },
    {
      text: "Contact",
      href: "#contact",
    },
  ];
  return (
    <div className="navbar">
      {navLinks.map((link, index) => (
        <a href={link.href} key={index}>
          {link.text}
        </a>
      ))}
    </div>
  );
}
