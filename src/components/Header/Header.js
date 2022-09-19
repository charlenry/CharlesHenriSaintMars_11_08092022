import classes from "./Header.module.css";
import pinkLogo from "../../assets/images/logos/kasa-logo-pink.svg";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div>
        <Link to="/">
          <img
            className={classes.header_logo}
            src={pinkLogo}
            alt="Page d'accueil"
          />
        </Link>
      </div>
      <nav>
        <NavLink
          aria-current="page d'accueil"
          to="/"
          className={({ isActive }) => {
            return isActive ? classes.activeLink : classes.nonActiveLink;
          }}
        >
          Accueil
        </NavLink>
        <NavLink
          aria-current="à propos"
          to="/about"
          className={({ isActive }) => {
            return isActive ? classes.activeLink : classes.nonActiveLink;
          }}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
