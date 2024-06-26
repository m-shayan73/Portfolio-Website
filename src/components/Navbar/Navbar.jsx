import "./navbar.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LogoS from "../../../public/images/logo-s.png";
import { useState, useEffect } from "react";

const navigateTo = (path) => {
  window.location.href = path;
};

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <>
      <nav>
        <Link className="nav-logo" to="/">
          <img id="nav-logo-s" src={LogoS} alt="logo" />
          <p className="logo-title">M.Shayan</p>
        </Link>

        <ul className="nav-links">
          <li
            className={`nav-home ${currentPath === "/" ? "active" : ""}`}
            onClick={() => navigateTo("/")}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </li>
          <li
            className={`nav-about ${currentPath === "/about" ? "active" : ""}`}
            onClick={() => navigateTo("/about")}
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </li>
          <li
            className={`nav-projects ${currentPath === "/projects" ? "active" : ""}`}
            onClick={() => navigateTo("/projects")}
          >
            <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
          </li>
          <li
            className={`nav-contact ${currentPath === "/contact" ? "active" : ""}`}
            onClick={() => navigateTo("/contact")}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </li>
        </ul>

        <ul className="nav-links nav-profiles">
          <li>
            <a href="https://www.linkedin.com/in/muhammad-shayan-806657238/">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a href="https://github.com/m-shayan73">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}