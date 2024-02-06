import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { styles } from "../styles"; // Importe os estilos do arquivo styles.js
import "../styles/navbar.css"; // Importe o arquivo CSS para o Navbar

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${
        scrolled ? "bg-[#F1E4C3]" : "bg-transparent"
      }`}
    >
      <div className="navbar-container">

        <ul className="navbar-links">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "active" : ""
              } navbar-link`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-toggle">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="toggle-icon"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`toggle-menu ${toggle ? "active" : ""}`}>
            <ul className="toggle-links">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "active" : ""
                  } toggle-link`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
