import classes from  './Header.module.css';
import pinkLogo from '../../assets/images/logos/kasa-logo-pink.svg';


const Header = (props) => {
  return (
    <header>
      <div>
        <img className={classes.header_logo} src={pinkLogo} alt="Page d'accueil" />
      </div>
      <ul>
        <li>Accueil</li>
        <li>A Propos</li>
      </ul>
    </header>
  );
};

export default Header;
